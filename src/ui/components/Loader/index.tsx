import { Backdrop, CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <Backdrop
      open
      sx={({ zIndex: { drawer }, palette }) => ({
        background: palette.primary.light,
        zIndex: drawer + 1,
      })}
    >
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

export default Loader;
