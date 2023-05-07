import { Button } from '@mui/material';
import AlertPageLayout from '../../layouts/AlertPageLayout';

const ErrorPage = () => {
  const reload = () => window.location.reload();

  const actionButton = (
    <Button onClick={reload} variant="contained">
      Reload
    </Button>
  );

  return (
    <AlertPageLayout action={actionButton}>
      Oops, something went wrong...
      <br />
      Try reloading the page using the button below
    </AlertPageLayout>
  );
};

export default ErrorPage;
