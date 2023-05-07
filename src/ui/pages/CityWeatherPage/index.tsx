import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled, Stack, Divider, Paper, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import WindPowerIcon from '@mui/icons-material/WindPower';
import WaterIcon from '@mui/icons-material/Water';
import CompressIcon from '@mui/icons-material/Compress';
import DryIcon from '@mui/icons-material/Dry';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import {
  createDetailsListWrapperStyles,
  createPageCanvasStyles,
} from './styles';
import { URL_WEATHER } from '../../../routing/URLs';
import { getWeather } from '../../../redux/slices/weatherSlice';
import Options from '../../components/Options';
import CityWeatherHeader from '../../components/CityWeatherHeader';
import NoCityFoundPage from '../NoCityFoundPage';
import WeatherIcon from '../../components/WeatherIcon';
import { kelvinToCelsius } from '../../../common/utils';
import WeatherDetailCard, {
  WeatherDetails,
} from '../../components/WeatherDetailCard';
import TemperatureChart from '../../components/TemperatureChart';

const PageCanvas = styled(Paper)(createPageCanvasStyles);
const DetailsListWrapper = styled(Stack)(createDetailsListWrapperStyles);

const CityWeatherPage = () => {
  const { weatherCards } = useSelector(getWeather);
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const lat = queryParams.get('lat');
  const lon = queryParams.get('lon');
  const weatherData = weatherCards.find(
    (card) => card.city.lat === Number(lat) && card.city.lon === Number(lon)
  );

  if (!weatherData) {
    return <NoCityFoundPage />;
  }

  const {
    city,
    weather: [{ description, icon }],
    main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
    wind: { speed },
    hourlyTemp,
  } = weatherData;

  const weatherDetailsData: WeatherDetails[] = [
    {
      header: 'Temp feels like',
      value: `${kelvinToCelsius(feels_like)}°С`,
      icon: <DryIcon />,
    },
    {
      header: 'Temp min',
      value: `${kelvinToCelsius(temp_min)}°С`,
      icon: <TrendingDownIcon />,
    },
    {
      header: 'Temp max',
      value: `${kelvinToCelsius(temp_max)}°С`,
      icon: <TrendingUpIcon />,
    },
    {
      header: 'Wind speed',
      value: `${speed} m/s`,
      icon: <WindPowerIcon />,
    },
    {
      header: 'Humidity',
      value: `${humidity} %`,
      icon: <WaterIcon />,
    },
    {
      header: 'Pressure',
      value: `${pressure} hPa`,
      icon: <CompressIcon />,
    },
  ];

  const goToCityWeatherPage = () => navigate(URL_WEATHER);

  return (
    <PageCanvas elevation={0}>
      <Stack direction="row" justifyContent="space-between">
        <Button startIcon={<ArrowBackIcon />} onClick={goToCityWeatherPage}>
          Back to cities
        </Button>

        <Options city={city} />
      </Stack>

      <Stack spacing={2}>
        <Divider />

        <CityWeatherHeader
          name={city.name}
          state={city?.state}
          temp={temp}
          iconSize="large"
          variant="h4"
        />
      </Stack>

      <WeatherDetailCard
        header="Main weather"
        value={description}
        icon={<WeatherIcon iconId={icon} />}
      />

      <DetailsListWrapper>
        {weatherDetailsData.map(({ header, value, icon }) => (
          <WeatherDetailCard
            key={header + value}
            header={header}
            value={value}
            icon={icon}
          />
        ))}
      </DetailsListWrapper>

      <TemperatureChart values={hourlyTemp} />
    </PageCanvas>
  );
};

export default CityWeatherPage;
