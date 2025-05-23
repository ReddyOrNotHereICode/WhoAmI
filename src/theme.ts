import { createTheme } from '@mui/material/styles';

const autumnTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#b34700', // deep orange
      contrastText: '#fff',
    },
    secondary: {
      main: '#e25822', // pumpkin
    },
    background: {
      default: '#fff8f0', // warm off-white
      paper: '#fff3e0', // light orange
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
      primary: '#4e260e', // dark brown
      secondary: '#b34700',
    },
  },
  typography: {
    fontFamily: 'Segoe UI, Arial, sans-serif',
    h1: { color: '#b34700' },
    h2: { color: '#e25822' },
    h3: { color: '#ff9800' },
  },
});

export default autumnTheme;
