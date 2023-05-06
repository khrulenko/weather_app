import { TooltipButtonWrapperProps } from '.';
import { StyleFunction } from '../../../common/types';

const createTooltipButtonWrapperStyles: StyleFunction<
  TooltipButtonWrapperProps
> = ({ isRotating }) => ({
  '@keyframes rotate': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },

  animation: isRotating ? 'rotate 0.5s linear' : '',
});

export { createTooltipButtonWrapperStyles };
