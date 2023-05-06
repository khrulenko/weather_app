import { Button, ButtonProps, Tooltip } from '@mui/material';

interface Props {
  title: string;
  children: any;
}

type TooltipButtonProps = Props & ButtonProps;

const TooltipButton = ({
  title = '',
  onClick,
  children,
}: TooltipButtonProps) => (
  <Tooltip title={title} followCursor placement="top">
    <Button onClick={onClick}>{children}</Button>
  </Tooltip>
);
export default TooltipButton;
