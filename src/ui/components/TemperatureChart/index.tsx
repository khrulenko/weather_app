import { Stack } from '@mui/system';

interface TemperatureChartProps {
  values: number[];
}
const TemperatureChart = ({ values }: TemperatureChartProps) => {
  return (
    <Stack direction="row">
      {values.map((value) => (
        <div>{value}</div>
      ))}
    </Stack>
  );
};

export default TemperatureChart;
