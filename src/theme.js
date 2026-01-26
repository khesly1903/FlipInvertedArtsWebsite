import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff9800', // Orange
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#000000', // Black
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: { fontFamily: 'Trebuchet MS' },
    h2: { fontFamily: 'Trebuchet MS' },
    h3: { fontFamily: 'Trebuchet MS' },
    h4: { fontFamily: 'Trebuchet MS' },
    h5: { fontFamily: 'Trebuchet MS' },
    h6: { fontFamily: 'Trebuchet MS' },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      fontFamily: 'Trebuchet MS'
    },
    // Diğer seçenekler: h3, h4, h5, h6, subtitle1, subtitle2, body2, button, caption, overline
  },
});

export default theme;
