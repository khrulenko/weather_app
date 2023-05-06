import {
  Button,
  ButtonProps,
  Tooltip,
  TooltipProps,
  styled,
} from '@mui/material';
import { useState } from 'react';
import { AnyFunction } from '../../../common/types';
import { createTooltipButtonWrapperStyles } from './style';

interface Props {
  hasAnimation?: boolean;
  onClick?: AnyFunction;
}
interface WrapperProps {
  isRotating?: boolean;
}

type TooltipButtonProps = Props & TooltipProps & ButtonProps;
export type TooltipButtonWrapperProps = WrapperProps & TooltipProps;

const TooltipButtonWrapper = styled(Tooltip)(createTooltipButtonWrapperStyles);

const TooltipButton = ({
  title = '',
  hasAnimation = false,
  onClick,
  children,
}: TooltipButtonProps) => {
  const [isRotating, setIsRotating] = useState<boolean>(false);

  const handleClick = () => {
    if (hasAnimation) {
      setIsRotating(true);
      setTimeout(() => setIsRotating(false), 500);
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <TooltipButtonWrapper
      title={title}
      followCursor
      placement="top"
      isRotating={isRotating}
    >
      <Button onClick={handleClick}>{children}</Button>
    </TooltipButtonWrapper>
  );
};
export default TooltipButton;
