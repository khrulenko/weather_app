import { ItemWrapperProps } from '.';
import { StyleFunction } from '../../../../common/types';

const createItemWrapperStyles: StyleFunction<ItemWrapperProps> = ({
  theme: { spacing, palette },
  isAdded,
}) => ({
  minHeight: spacing(8),
  padding: spacing(2),

  borderRadius: spacing(3),
  cursor: isAdded ? 'not-allowed' : 'pointer',

  '&:hover': !isAdded && {
    backgroundColor: palette.secondary.dark,
    color: palette.primary.light,
  },
});

export { createItemWrapperStyles };
