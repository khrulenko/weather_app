import { Button, Tooltip } from '@mui/material';

interface TooltipButtonProps {
  title: string;
  children: any;
}

const TooltipButton = ({ title = '', children }: TooltipButtonProps) => (
  <Tooltip title={title} followCursor placement="top">
    <Button>{children}</Button>
  </Tooltip>
);
export default TooltipButton;
