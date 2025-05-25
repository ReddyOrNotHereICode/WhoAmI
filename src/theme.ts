import { createTheme } from '@mui/material/styles';

export const getTheme = (mode: 'light' | 'dark') => createTheme({
  palette: {
    mode,
    primary: {
      main: mode === 'light' ? '#b34700' : '#ffb347', // deep orange (light), light orange (dark)
      contrastText: '#fff',
    },
    secondary: {
      main: mode === 'light' ? '#e25822' : '#b34700', // pumpkin (light), deep orange (dark)
    },
    background: {
      default: mode === 'light' ? '#fff8f0' : '#2a1a0a', // light cream (light), deep brown (dark)
      paper: mode === 'light' ? '#fff3e0' : '#3a2412', // light tan (light), dark tan (dark)
    },
    error: {
      main: '#b22222', // firebrick
    },
    warning: {
      main: '#ff9800', // orange
    },
    info: {
      main: mode === 'light' ? '#b34700' : '#ffb347', // light orange (light), orange (dark)
    },
    success: {
      main: mode === 'light' ? '#a0522d' : '#b34700', // sienna (light), deep orange (dark)
    },
    text: {
      primary: mode === 'light' ? '#4e260e' : '#fff8f0', // dark brown (light), cream (dark)
      secondary: mode === 'light' ? '#b34700' : '#ffb347', // deep orange (light), light orange (dark)
    },
  },
  typography: {
    fontFamily: 'Segoe UI, Arial, sans-serif',
    h1: { color: mode === 'light' ? '#b34700' : '#ffb347' },
    h2: { color: mode === 'light' ? '#e25822' : '#ff9800' },
    h3: { color: mode === 'light' ? '#ff9800' : '#ffb347' },
  },
});

export default getTheme;
