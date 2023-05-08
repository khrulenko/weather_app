import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherByCoordsThunk } from './common/api';
import { AppDispatch } from './common/types';
import { CityData } from './redux/slices/citiesSearchSlice';
import { getWeather, setAppLoadingStatus } from './redux/slices/weatherSlice';
import AppRoutes from './routing/Routes';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { weatherCards } = useSelector(getWeather);

  const getAllSavedCitiesWeather = async (cities: CityData[]) => {
    try {
      await Promise.all(
        cities.map((city: CityData) => dispatch(getWeatherByCoordsThunk(city)))
      );
    } finally {
      dispatch(setAppLoadingStatus(false));
    }
  };

  useEffect(() => {
    const citiesString = localStorage.getItem('cities');

    if (citiesString) {
      const cities = JSON.parse(citiesString);

      getAllSavedCitiesWeather(cities);
    }
  }, []);

  useEffect(() => {
    const cities = weatherCards.map(({ city }) => city);

    localStorage.setItem('cities', JSON.stringify(cities));
  }, [weatherCards.length]);

  return <AppRoutes />;
};

export default App;
