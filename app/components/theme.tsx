import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    }
  },
  typography: {
    h1: {
      fontFamily: 'Norwester, sans-serif',
      fontWeight: 'normal',
      fontSize: 'clamp(3rem, 6.5vw + 0.2rem, 7.2rem)',
      lineHeight: 'clamp(2.8rem, 6.5vw + 0.2rem, 7rem)',
      margin: '0',
    },
    h4:{
      fontFamily: 'Norwester, sans-serif',
      fontWeight: 'normal',
      fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 3rem)',
      margin: '0',
    },
    h5: {
      fontFamily: 'Norwester, sans-serif',
      fontWeight: 'normal',
      fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 2rem)',
      margin: '0',
    },
    h6: {
      fontFamily: 'Norwester, sans-serif',
      fontWeight: 'normal',
      fontSize: 'clamp(1.5rem, 0.7vw + 1.3rem, 1.75rem)',
      margin: '0',
    },
    body1:{
      fontFamily: 'neue-haas-grotesk-display, sans-serif',
      fontWeight: 'light',
      fontSize: 'clamp(1.3rem, 0.7vw + 1rem, 1.75rem)',
      lineHeight:'clamp(1.4rem, 0.7vw + 1rem, 2rem)',
    }
  }
});