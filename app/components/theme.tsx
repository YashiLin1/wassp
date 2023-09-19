
// Theme configuration using Material UI
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

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxl: true;
  }
}


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
        lineHeight: '54px'
      },
      [typoTheme.breakpoints.up('md')]: {
        fontSize: '60px',
        lineHeight: '64px'
      },
      [typoTheme.breakpoints.up('xl')]: {
        fontSize: 'clamp(5.625rem, 1.5vw + 4.5rem, 6.875rem);',
        lineHeight: 'clamp(5.7rem, 1.5vw + 4.5rem, 6.875rem);'
      },
    },
    h2: {
      ...Norwester,
      [typoTheme.breakpoints.up('xs')]: {
        fontSize: '32px',
        lineHeight: '36px'
      },
      [typoTheme.breakpoints.up('md')]: {
        fontSize: '60px',
        lineHeight: '64px'
      },
      [typoTheme.breakpoints.up('xl')]: {
        fontSize: 'clamp(5.625rem, 1.5vw + 4.5rem, 6.875rem);',
        lineHeight: 'clamp(5.7rem, 1.5vw + 4.5rem, 6.875rem);'
      },
    },
    h3: {
      ...Norwester,
      fontSize: 'clamp(3.2rem, 6vw + 0.9rem, 10rem)',
      lineHeight: 'clamp(3.2rem, 6vw + 0.9rem, 10rem)',
    },
    h4: {
      ...Norwester,
      [typoTheme.breakpoints.up('xs')]: {
        fontSize: '24px',
        lineHeight: '24px'
      },
      [typoTheme.breakpoints.up('md')]: {
        fontSize: '60px',
        lineHeight: '60px'
      },
      [typoTheme.breakpoints.up('xl')]: {
        fontSize: '72px',
        lineHeight: '72px'
      },
    },
    h5: {
      ...Norwester,
      [typoTheme.breakpoints.up('xs')]: {
        fontSize: '14px',
      },
      [typoTheme.breakpoints.up('md')]: {
        fontSize: '14px',
      },
      [typoTheme.breakpoints.up('lg')]: {
        fontSize: '16px',
      },
      [typoTheme.breakpoints.up('xl')]: {
        fontSize: '20px',
      },
    },
    h6: {
      ...Norwester,
      [typoTheme.breakpoints.up('xs')]: {
        fontSize: '12px',
      },
      [typoTheme.breakpoints.up('md')]: {
        fontSize: '12px',
      },
      [typoTheme.breakpoints.up('lg')]: {
        fontSize: '14px',
      },
      [typoTheme.breakpoints.up('xl')]: {
        fontSize: '18px',
      },
    },
    body1: {
      ...Neue,
      [typoTheme.breakpoints.up('xs')]: {
        fontSize: '14px',
        lineHeight: '18px'
      },
      [typoTheme.breakpoints.up('md')]: {
        fontSize: '16px',
        lineHeight: '20px'
      },
      [typoTheme.breakpoints.up('xl')]: {
        fontSize: '20px',
        lineHeight: '24px'
      },
    },
    body2: {
      ...Neue,
      [typoTheme.breakpoints.up('xs')]: {
        fontSize: '16px',
      },
      [typoTheme.breakpoints.up('xl')]: {
        fontSize: '20px',
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
        lineHeight: '64px'
      },
      [typoTheme.breakpoints.up('xl')]: {
        fontSize: 'clamp(5.625rem, 1.5vw + 4.5rem, 6.875rem);',
        lineHeight: 'clamp(5.625rem, 1.5vw + 4.5rem, 6.875rem);'
      },
      textTransform: 'none'
    },
    subtitle2: {
      ...Neue,
      fontSize: '1.4rem',
      textTransform: 'none'
    },
  },

});