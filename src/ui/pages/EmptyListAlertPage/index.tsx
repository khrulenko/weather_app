import WavingHandIcon from '@mui/icons-material/WavingHand';
import AlertPageLayout from '../../layouts/AlertPageLayout';

const EmptyListAlertPage = () => {
  const icon = <WavingHandIcon fontSize="large" />;

  return (
    <AlertPageLayout icon={icon}>
      Hi, there are no cities in your list yet
      <br />
      Try adding some using the sidebar search
    </AlertPageLayout>
  );
};

export default EmptyListAlertPage;
