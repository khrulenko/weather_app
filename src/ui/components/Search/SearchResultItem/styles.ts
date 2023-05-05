import { PaperProps } from '@mui/material';
import { StyleFunction } from '../../../../common/types';

const createItemWrapperStyles: StyleFunction<PaperProps> = ({
  theme: { spacing, palette },
}) => ({
  minHeight: spacing(8),
  padding: spacing(2),

  borderRadius: spacing(3),
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: palette.secondary.dark,
    color: palette.primary.light,
  },
});

export { createItemWrapperStyles };
