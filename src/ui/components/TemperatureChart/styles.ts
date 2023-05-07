import { StackProps } from '@mui/system';
import { StyleFunction } from '../../../common/types';

const createCharItemsListStyles: StyleFunction<StackProps> = ({
  theme: { spacing },
}) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '1px',

  height: spacing(8),
});

export { createCharItemsListStyles };
