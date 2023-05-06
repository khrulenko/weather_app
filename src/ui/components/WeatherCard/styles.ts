import { PaperProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createCityWeatherCardWrapperStyles: StyleFunction<PaperProps> = ({
  theme: { spacing },
}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '8px',

  width: '100%',
  maxWidth: '360px',
  padding: spacing(2),

  borderRadius: spacing(3),
  cursor: 'pointer',
});

const createCardHeaderStyles: StyleFunction<PaperProps> = ({
  theme: { spacing },
}) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: spacing(1),

  minHeight: spacing(6),
});

export { createCityWeatherCardWrapperStyles, createCardHeaderStyles };
