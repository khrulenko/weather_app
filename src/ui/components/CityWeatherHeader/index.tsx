import { Stack, styled, Typography, TypographyProps } from '@mui/material';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import { kelvinToCelsius } from '../../../common/utils';
import { createCardHeaderStyles } from './styles';
import { IconSize } from '../../../common/types';

interface Props {
  name: string;
  state?: string;
  temp: number;
  iconSize?: IconSize;
}

type CityWeatherHeaderProps = Props & TypographyProps;

const CardHeader = styled(Stack)(createCardHeaderStyles);

const CityWeatherHeader = ({
  name,
  state,
  temp,
  variant = 'h6',
  iconSize = 'small',
}: CityWeatherHeaderProps) => {
  return (
    <CardHeader>
      <Stack justifyContent="center">
        <Typography variant={variant} fontWeight="bold">
          {name}
        </Typography>

        {state && <Typography fontSize="14px">{state}</Typography>}
      </Stack>

      <Stack direction="row" alignItems="center">
        <Typography variant={variant}>{kelvinToCelsius(temp)}°С</Typography>

        <DeviceThermostatOutlinedIcon fontSize={iconSize} />
      </Stack>
    </CardHeader>
  );
};

export default CityWeatherHeader;
