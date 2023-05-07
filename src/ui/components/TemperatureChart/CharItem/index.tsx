import { Stack, styled } from '@mui/material';
import { getTemperatureColor } from '../../../../common/utils';
import { createCharItemWrapperStyles, createTemperatureStyles } from './styles';

export interface Props {
  hour: number;
}

export interface CharItemWrapperProps {
  temp: number;
}

export interface TemperatureProps {
  backgroundColor: string;
}

type CharItemProps = CharItemWrapperProps & Props;

const CharItemWrapper = styled(Stack)(createCharItemWrapperStyles);
const Temperature = styled(Stack)(createTemperatureStyles);

const CharItem = ({ temp, hour }: CharItemProps) => {
  const backgroundColor = getTemperatureColor(temp);

  return (
    <CharItemWrapper temp={temp}>
      <Temperature backgroundColor={backgroundColor}>{temp}°</Temperature>

      <Stack textAlign="center">{hour}h</Stack>
    </CharItemWrapper>
  );
};

export default CharItem;
