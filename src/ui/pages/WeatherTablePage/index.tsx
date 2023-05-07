import { useSelector } from 'react-redux';
import { Stack, styled } from '@mui/material';
import { getWeather } from '../../../redux/slices/weatherSlice';
import CityWeatherCard from '../../components/WeatherCard';
import { createWeatherTableWrapperStyles } from './styles';
import { numbersToString } from '../../../common/utils';
import ErrorPage from '../ErrorPage';

const WeatherTableWrapper = styled(Stack)(createWeatherTableWrapperStyles);

const WeatherTablePage = () => {
  const { weatherCards, error } = useSelector(getWeather);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <WeatherTableWrapper>
      {weatherCards.map((weatherData) => {
        const {
          city: { lat, lon },
        } = weatherData;

        return (
          <CityWeatherCard
            key={numbersToString(lat, lon)}
            weatherCardData={weatherData}
          />
        );
      })}
    </WeatherTableWrapper>
  );
};

export default WeatherTablePage;
