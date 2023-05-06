import { Stack, Divider, Paper, styled, Typography } from '@mui/material';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import { WeatherCard } from '../../../redux/slices/weatherSlice';
import {
  createCardHeaderStyles,
  createCityWeatherCardWrapperStyles,
} from './styles';
import { kelvinToCelsius } from '../../../common/utils';
import WeatherIcon from '../WeatherIcon';
import TooltipButton from '../TooltipButton';

interface CityWeatherCardProps {
  weatherCardData: WeatherCard;
}

const CityWeatherCardWrapper = styled(Paper)(
  createCityWeatherCardWrapperStyles
);
const CardHeader = styled(Stack)(createCardHeaderStyles);

const CityWeatherCard = ({ weatherCardData }: CityWeatherCardProps) => {
  const {
    city,
    weather: [{ description, icon }],
    main: { temp },
  } = weatherCardData;

  return (
    <CityWeatherCardWrapper>
      <CardHeader>
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
      </CardHeader>

      <Divider />

      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" alignItems="center" gap="8px">
          <WeatherIcon iconId={icon} />

          <Typography>{description}</Typography>
        </Stack>

        <Stack direction="row" justifyContent="flex-end">
          <TooltipButton title="Refresh">
            <SyncOutlinedIcon />
          </TooltipButton>

          <TooltipButton title="Delete">
            <HighlightOffOutlinedIcon />
          </TooltipButton>
        </Stack>
      </Stack>
    </CityWeatherCardWrapper>
  );
};

export default CityWeatherCard;
