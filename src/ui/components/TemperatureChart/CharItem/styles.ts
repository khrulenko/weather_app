import { StackProps } from '@mui/system';
import { CharItemWrapper, TemperatureProps } from '.';
import { StyleFunction } from '../../../../common/types';

const createCharItemWrapperStyles: StyleFunction<CharItemWrapper> = ({
  theme: {
    breakpoints: { down },
  },
  temp,
  hour,
}) => ({
  position: 'relative',
  bottom: `${temp}px`,

  width: '100%',

  [down('xl')]: {
    fontSize: '12px',
  },

  [down('lg')]: {
    display: hour % 2 === 0 ? 'block' : 'none',
    fontSize: '16px',
  },

  [down('md')]: {
    display: hour % 4 === 0 ? 'block' : 'none',
    fontSize: '18px',
  },
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
