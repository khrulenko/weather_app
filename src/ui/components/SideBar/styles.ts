import { ButtonProps, CSSObject, DrawerProps, StackProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createSideBarWrapperStyles: StyleFunction<DrawerProps> = ({
  theme: {
    spacing,
    transitions,
    palette,
    navBarSizes: { width },
  },
  open,
}) => {
  const transition = transitions.create('width', {
    easing: transitions.easing.sharp,
    duration: transitions.duration.shortest,
  });

  const openedMixin = (): CSSObject => ({
    width: width.opened,
    transition,
  });

  const closedMixin = (): CSSObject => ({
    width: width.closed,
    transition,
  });

  const borderRadius = spacing(3);

  return {
    width: width.opened,
    flexShrink: 0,
    ...(open ? openedMixin() : closedMixin()),

    '& .MuiDrawer-paper': {
      ...(open ? openedMixin() : closedMixin()),

      borderTopRightRadius: borderRadius,
      borderBottomRightRadius: borderRadius,
      backgroundColor: palette.background.paper,
      overflowX: 'hidden',
    },
  };
};

const createSideBarBodyStyles: StyleFunction<StackProps & DrawerProps> = ({
  theme: { spacing },
  open,
}) => ({
  display: open ? 'flex' : 'none',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: spacing(1),

  height: '100%',
  padding: spacing(1),
});

const createSideBarButtonStyles: StyleFunction<ButtonProps> = ({
  theme: { spacing },
}) => ({
  width: '100%',

  padding: spacing(1),

  borderRadius: '0',
});

export {
  createSideBarWrapperStyles,
  createSideBarBodyStyles,
  createSideBarButtonStyles,
};
