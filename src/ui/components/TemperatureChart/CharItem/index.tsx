import { Stack, StackProps, styled } from '@mui/material';
import { getTemperatureColor } from '../../../../common/utils';
import { createCharItemWrapperStyles, createTemperatureStyles } from './styles';

export interface CharItemProps {
  hour: number;
  temp: number;
}

export interface TemperatureProps {
  backgroundColor: string;
}

export type CharItemWrapper = StackProps & CharItemProps;

const CharItemWrapper = styled(Stack)(createCharItemWrapperStyles);
const Temperature = styled(Stack)(createTemperatureStyles);

const CharItem = ({ temp, hour }: CharItemProps) => {
  const backgroundColor = getTemperatureColor(temp);

  return (
    <CharItemWrapper temp={temp} hour={hour}>
      <Temperature backgroundColor={backgroundColor}>{temp}°</Temperature>

      <Stack textAlign="center">{hour}h</Stack>
    </CharItemWrapper>
  );
};

export default CharItem;
