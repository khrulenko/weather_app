import { styled, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import CharItem from './CharItem';
import { createCharItemsListStyles } from './styles';

interface TemperatureChartProps {
  values: number[];
}

const CharItemsList = styled(Stack)(createCharItemsListStyles);

const TemperatureChart = ({ values }: TemperatureChartProps) => {
  return (
    <Stack padding="24px 0" spacing="24px">
      <Typography variant="h5" fontWeight="bold">
        Hourly:
      </Typography>

      <CharItemsList>
        {values.map((value, index) => (
          <CharItem key={index} temp={Math.round(value)} hour={index} />
        ))}
      </CharItemsList>
    </Stack>
  );
};

export default TemperatureChart;
