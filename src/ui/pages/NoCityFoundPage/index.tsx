import { useNavigate } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import WrongLocationIcon from '@mui/icons-material/WrongLocation';
import { URL_WEATHER } from '../../../routing/URLs';

const NoCityFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Stack alignItems="center" spacing={2}>
      <WrongLocationIcon fontSize="large" />

      <Typography fontWeight="bold" textAlign="center">
        Oops, there is no such city in your list
        <br />
        Try finding some using the sidebar search
      </Typography>

      <Button onClick={() => navigate(URL_WEATHER)} variant="contained">
        Go to cities list
      </Button>
    </Stack>
  );
};

export default NoCityFoundPage;
