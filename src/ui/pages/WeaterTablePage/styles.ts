import { StackProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createWeatherTableWrapperStyles: StyleFunction<StackProps> = ({
  theme: { spacing },
}) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: spacing(2),
});

export { createWeatherTableWrapperStyles };
