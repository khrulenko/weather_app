import { useNavigate } from 'react-router-dom';
import { Stack, Paper, styled, Typography } from '@mui/material';
import { WeatherCard } from '../../../redux/slices/weatherSlice';
import { createCityWeatherCardWrapperStyles } from './styles';
import WeatherIcon from '../WeatherIcon';
import Options from '../Options';
import CityWeatherHeader from '../CityWeatherHeader';
import { createCityUrl } from '../../../common/utils';

interface CityWeatherCardProps {
  weatherCardData: WeatherCard;
}

const CityWeatherCardWrapper = styled(Paper)(
  createCityWeatherCardWrapperStyles
);

const CityWeatherCard = ({ weatherCardData }: CityWeatherCardProps) => {
  const navigate = useNavigate();

  const {
    city,
    weather: [{ description, icon }],
    main: { temp },
  } = weatherCardData;

  const cityUrl = createCityUrl(city.name, city.lat, city.lon);

  const goToCityWeatherPage = () => {
    navigate(cityUrl);
  };

  return (
    <CityWeatherCardWrapper
      data-testid="weatherCard"
      onClick={goToCityWeatherPage}
    >
      <CityWeatherHeader name={city.name} state={city?.state} temp={temp} />

      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" alignItems="center" gap="8px">
          <WeatherIcon iconId={icon} />

          <Typography>{description}</Typography>
        </Stack>

        <Options city={city} />
      </Stack>
    </CityWeatherCardWrapper>
  );
};

export default CityWeatherCard;
