import { PaperProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createCardHeaderStyles: StyleFunction<PaperProps> = ({
  theme: { spacing },
}) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: spacing(1),

  minHeight: spacing(6),
});

export { createCardHeaderStyles };
