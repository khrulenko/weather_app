import { PaperProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createWeatherDetailCardWrapperStyles: StyleFunction<PaperProps> = ({
  theme: { spacing },
}) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing(2),
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: spacing(2),

  borderRadius: spacing(3),
});

export { createWeatherDetailCardWrapperStyles };
