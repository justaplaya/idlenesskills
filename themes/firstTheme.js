import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const firstTheme = createTheme({
  breakpoints: {
    values: {
      zero:0,
      mobile: 360,
      tablet: 768,
      laptopS: 1024,
      laptopL: 1366,
      pc: 1920,
    },
  },
  spacing: 2,
  palette: {
    mode:'light',
    primary: {
      main: 'rgb(0,0,0)',
    },
    secondary: {
      main: 'rgb(245,245,245)',
    },
    success: {
      main: 'rgb(245,222,179)',
    },
    error: {
      main: 'rgb(135,0,10)',
    }
  }
});

export default firstTheme;