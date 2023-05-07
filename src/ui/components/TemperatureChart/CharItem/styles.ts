import { StackProps } from '@mui/system';
import { CharItemWrapperProps, TemperatureProps } from '.';
import { StyleFunction } from '../../../../common/types';

const createCharItemWrapperStyles: StyleFunction<
  StackProps & CharItemWrapperProps
> = ({ temp }) => ({
  position: 'relative',
  bottom: `${temp}px`,

  width: '100%',
});

const createTemperatureStyles: StyleFunction<StackProps & TemperatureProps> = ({
  backgroundColor,
}) => ({
  width: '100%',
  padding: '4px',

  backgroundColor: backgroundColor,
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',

  textAlign: 'center',
});

export { createCharItemWrapperStyles, createTemperatureStyles };
