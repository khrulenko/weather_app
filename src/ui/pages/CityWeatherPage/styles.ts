import { PaperProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createPageCanvasStyles: StyleFunction<PaperProps> = ({
  theme: {
    spacing,
    breakpoints: { down },
  },
}) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing(2),

  width: '100%',
  maxWidth: '1000px',
  padding: spacing(4),

  borderRadius: spacing(6),

  [down('sm')]: {
    paddingLeft: spacing(2),
    paddingRight: spacing(2),
  },
});

const createHeaderWrapperStyles: StyleFunction<PaperProps> = ({
  theme: { spacing },
}) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: spacing(1),

  height: spacing(7),
});

const createDetailsListWrapperStyles: StyleFunction<PaperProps> = ({
  theme: {
    spacing,
    breakpoints: { down },
  },
}) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: spacing(2),
  flexWrap: 'wrap',

  [down('md')]: {
    justifyContent: 'center',
  },

  [down('sm')]: {
    flexDirection: 'column',
  },
});

export {
  createPageCanvasStyles,
  createHeaderWrapperStyles,
  createDetailsListWrapperStyles,
};
