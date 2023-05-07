import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { styled, Stack, Divider, Paper, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { createPageCanvasStyles } from './styles';
import { useNavigate } from 'react-router';
import { URL_WEATHER } from '../../../routing/URLs';
import { getWeather } from '../../../redux/slices/weatherSlice';
import Options from '../../components/Options';
import CityWeatherHeader from '../../components/CityWeatherHeader';
import NoCityFoundPage from '../NoCityFoundPage';

const PageCanvas = styled(Paper)(createPageCanvasStyles);

const CityWeatherPage = () => {
  const { weatherCards } = useSelector(getWeather);
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const lon = queryParams.get('lon');
  const lat = queryParams.get('lat');
  const weatherData = weatherCards.find(
    (card) => card.city.lon === Number(lon) && card.city.lat === Number(lat)
  );

  if (!weatherData) {
    return <NoCityFoundPage />;
  }

  const {
    city,
    weather: [{ description, icon }],
    main: { temp },
  } = weatherData;

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
    </PageCanvas>
  );
};

export default CityWeatherPage;
