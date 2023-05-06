import { useSelector } from 'react-redux';
import { getWeather } from '../../../redux/slices/weatherSlice';

const WeatherTablePage = () => {
  const { weatherCards } = useSelector(getWeather);

  return (
    <div>
      {weatherCards.map(({ city }) => (
        <p>{city.name}</p>
      ))}
    </div>
  );
};

export default WeatherTablePage;
