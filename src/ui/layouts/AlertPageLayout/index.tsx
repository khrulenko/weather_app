import { Stack, Typography } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { ReactNode } from 'react';

interface AlertPageLayoutProps {
  children: string | ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
}

const AlertPageLayout = ({
  children,
  action,
  icon = <SentimentVeryDissatisfiedIcon fontSize="large" />,
}: AlertPageLayoutProps) => (
  <Stack alignItems="center" spacing={2}>
    {icon}

    <Typography fontWeight="bold" textAlign="center">
      {children}
    </Typography>

    {action}
  </Stack>
);
export default AlertPageLayout;
