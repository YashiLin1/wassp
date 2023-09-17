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
      fontSize: 'clamp(3rem, 2.9vw + 1.7rem, 6.8rem)',
      lineHeight: 'clamp(3rem, 2.9vw + 1.7rem, 6.8rem)',
    },
    h2: {
      fontFamily: 'Norwester, sans-serif',
      fontWeight: 'normal',
      fontSize: 'clamp(2rem, 3.7vw + 0.4rem, 6.8rem)',
      lineHeight: 'clamp(2rem, 3.7vw + 0.4rem, 6.8rem)',
    },
    h3: {
      fontFamily: 'Norwester, sans-serif',
      fontWeight: 'normal',
      fontSize: 'clamp(3.2rem, 6vw + 0.9rem, 10rem)',
      lineHeight: 'clamp(3.2rem, 6vw + 0.9rem, 10rem)',
    },
    h4:{
      fontFamily: 'Norwester, sans-serif',
      fontWeight: 'normal',
      fontSize: 'clamp(1.8rem, 2.9vw + 1.7rem, 6.8rem)',
      lineHeight: 'clamp(1.8rem, 2.9vw + 1.7rem, 6.8rem)',
    },
    h5: {
      fontFamily: 'Norwester, sans-serif',
      fontWeight: 'normal',
      fontSize: '1rem',
    },
    h6: {
      fontFamily: 'Norwester, sans-serif',
      fontWeight: 'normal',
      fontSize: '0.8rem',
    },
    body1:{
      fontFamily: 'neue-haas-grotesk-display, sans-serif',
      fontWeight: '100',
      fontSize: 'clamp(0.8rem, 0.3vw + 0.7rem, 1.2rem)',
    },
    body2:{
      fontFamily: 'neue-haas-grotesk-display, sans-serif',
      fontWeight: '100',
      fontSize: '0.8rem',
      textTransform:'none',
    },
    subtitle1: {
      fontFamily: 'neue-haas-grotesk-display, sans-serif',
      fontWeight: 'normal',
      fontSize: 'clamp(3rem, 2.9vw + 1.7rem, 6.2rem)',
      lineHeight: 'clamp(3rem, 2.9vw + 1.7rem, 6.8rem)',
    },
    subtitle2:{
      fontFamily: 'neue-haas-grotesk-display, sans-serif',
      fontWeight: 'normal',
      fontSize: '1.4rem',
    }
  }
});