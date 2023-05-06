import { Stack, Divider, Paper, styled, Typography } from '@mui/material';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import { WeatherCard } from '../../../redux/slices/weatherSlice';
import { createCityWeatherCardWrapperStyles } from './styles';
import { kelvinToCelsius } from '../../../common/utils';
import WeatherIcon from '../WeatherIcon';

interface CityWeatherCardProps {
  weatherCardData: WeatherCard;
}

const CityWeatherCardWrapper = styled(Paper)(
  createCityWeatherCardWrapperStyles
);

const CityWeatherCard = ({ weatherCardData }: CityWeatherCardProps) => {
  const {
    city,
    weather: [{ description, icon }],
    main: { temp },
  } = weatherCardData;

  return (
    <CityWeatherCardWrapper>
      <Stack direction="row" justifyContent="space-between" minHeight="48px">
        <Stack justifyContent="center">
          <Typography fontSize="24px" fontWeight="bold">
            {city.name}
          </Typography>

          {city?.state && <Typography fontSize="14px">{city.state}</Typography>}
        </Stack>

        <Stack direction="row" alignItems="center">
          <Typography fontSize="24px">{kelvinToCelsius(temp)}°С</Typography>

          <DeviceThermostatOutlinedIcon />
        </Stack>
      </Stack>

      <Divider />

      <Stack direction="row" alignItems="center" gap="8px">
        <WeatherIcon iconId={icon} />

        <Typography>{description}</Typography>
      </Stack>
    </CityWeatherCardWrapper>
  );
};

export default CityWeatherCard;
