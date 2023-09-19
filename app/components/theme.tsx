import { createTheme } from '@mui/material';

const Norwester = {
  fontFamily: 'Norwester, sans-serif',
  fontWeight: 'normal',
};

const Neue = {
  fontFamily: 'neue-haas-grotesk-display, sans-serif',
  fontWeight: '100',
};

const typoTheme = createTheme();

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
  },
  typography: {
    h1: {
      ...Norwester,
      [typoTheme.breakpoints.up('xs')]: {
        fontSize: '45px',
        lineHeight: '45px'
      },
      [typoTheme.breakpoints.up('md')]: {
        fontSize: '60px',
        lineHeight: '60px'
      },
      [typoTheme.breakpoints.up('xl')]: {
        fontSize: '90px',
        lineHeight: '90px'
      },
    },
    h2: {
      ...Norwester,
      [typoTheme.breakpoints.up('xs')]: {
        fontSize: '30px',
        lineHeight: '30px'
      },
      [typoTheme.breakpoints.up('md')]: {
        fontSize: '60px',
        lineHeight: '60px'
      },
      [typoTheme.breakpoints.up('xl')]: {
        fontSize: '90px',
        lineHeight: '90px'
      },
      lineHeight: 'clamp(2rem, 3.7vw + 0.4rem, 6.8rem)',
    },
    h3: {
      ...Norwester,
      fontSize: 'clamp(3.2rem, 6vw + 0.9rem, 10rem)',
      lineHeight: 'clamp(3.2rem, 6vw + 0.9rem, 10rem)',
    },
    h4: {
      ...Norwester,
      fontSize: 'clamp(1.8rem, 2.9vw + 1.7rem, 6.8rem)',
      lineHeight: 'clamp(1.8rem, 2.9vw + 1.7rem, 6.8rem)',
    },
    h5: {
      ...Norwester,
      fontSize: '1rem',
    },
    h6: {
      ...Norwester,
      fontSize: '0.8rem',
    },
    body1: {
      ...Neue,
      [typoTheme.breakpoints.up('xs')]: {
        fontSize: '14px',
      },
      [typoTheme.breakpoints.up('md')]: {
        fontSize: '16px',
      },
      [typoTheme.breakpoints.up('xl')]: {
        fontSize: '18px',
      },
    },
    body2: {
      ...Neue,
      [typoTheme.breakpoints.up('xs')]: {
        fontSize: '16px',
      },
      [typoTheme.breakpoints.up('md')]: {
        fontSize: '16px',
      },
      [typoTheme.breakpoints.up('xl')]: {
        fontSize: '18px',
      },
      textTransform: 'none'
    },
    subtitle1: {
      ...Neue,
      [typoTheme.breakpoints.up('xs')]: {
        fontSize: '30px',
        lineHeight: '36px'
      },
      [typoTheme.breakpoints.up('md')]: {
        fontSize: '60px',
        lineHeight: '66px'
      },
      [typoTheme.breakpoints.up('xl')]: {
        fontSize: '72px',
        lineHeight: '74px'
      },
    },
    subtitle2: {
      ...Neue,
      fontSize: '1.4rem',
    },
  },
  
});