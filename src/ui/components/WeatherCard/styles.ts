import { PaperProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createCityWeatherCardWrapperStyles: StyleFunction<PaperProps> = ({
  theme: { spacing, palette },
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

  '&:hover': {
    backgroundColor: palette.secondary.dark,
    color: palette.primary.light,
  },
});

export { createCityWeatherCardWrapperStyles };
