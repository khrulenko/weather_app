import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import WrongLocationIcon from '@mui/icons-material/WrongLocation';
import { URL_WEATHER } from '../../../routing/URLs';
import AlertPageLayout from '../../layouts/AlertPageLayout';

const NoCityFoundPage = () => {
  const navigate = useNavigate();
  const goToWeatherPage = () => navigate(URL_WEATHER);

  const icon = <WrongLocationIcon fontSize="large" />;
  const actionButton = (
    <Button onClick={goToWeatherPage} variant="contained">
      Go to cities list
    </Button>
  );

  return (
    <AlertPageLayout icon={icon} action={actionButton}>
      Oh, there is no such city in your list
      <br />
      Try finding some using the sidebar search
    </AlertPageLayout>
  );
};

export default NoCityFoundPage;
