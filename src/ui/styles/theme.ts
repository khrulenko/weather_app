import { createTheme, ThemeOptions } from '@mui/material';
import { teal, grey } from '@mui/material/colors';
import MuiCssBaseline from './muiComponents/MuiCssBaseline';
import MuiTextField from './muiComponents/MuiTexfield';

type CustomThemeProps = {
  navBarSizes: {
    width: {
      opened: number;
      closed: number;
    };
  };
};

declare module '@mui/material/' {
  interface Theme extends CustomThemeProps {}
  interface ThemeOptions extends CustomThemeProps {}
}

const palette = {
  primary: {
    light: grey[100],
    main: grey[900],
    dark: grey[700],
    contrastText: '#fff',
  },
  secondary: teal,
};

const navBarSizes = {
  width: {
    opened: 240,
    closed: 56,
  },
};

const theme = createTheme({
  palette,
  components: {
    MuiCssBaseline,
    MuiTextField,
  },
  navBarSizes,
} as ThemeOptions);

export default theme;
