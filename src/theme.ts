import { createTheme } from '@mui/material/styles';

export const getTheme = (mode: 'light' | 'dark') => createTheme({
  palette: {
    mode,
    primary: {
      main: '#b34700', // deep orange
      contrastText: '#fff',
    },
    secondary: {
      main: '#e25822', // pumpkin
    },
    background: {
      default: mode === 'light' ? '#fff8f0' : '#1a1a1a',
      paper: mode === 'light' ? '#fff3e0' : '#222',
    },
    error: {
      main: '#b22222', // firebrick
    },
    warning: {
      main: '#ff9800', // orange
    },
    info: {
      main: '#ffb347', // light orange
    },
    success: {
      main: '#a0522d', // sienna
    },
    text: {
      primary: mode === 'light' ? '#4e260e' : '#fff8f0',
      secondary: mode === 'light' ? '#b34700' : '#ffb347',
    },
  },
  typography: {
    fontFamily: 'Segoe UI, Arial, sans-serif',
    h1: { color: mode === 'light' ? '#b34700' : '#ffb347' },
    h2: { color: mode === 'light' ? '#e25822' : '#ff9800' },
    h3: { color: '#ff9800' },
  },
});

export default getTheme;
