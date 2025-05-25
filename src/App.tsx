import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import getTheme from './theme';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { FaSun, FaMoon, FaEnvelope } from 'react-icons/fa';
import Popover from '@mui/material/Popover';
import About from './pages/About';
import Projects from './pages/Projects';
import Training from './pages/Training';
import './App.css';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [contactAnchor, setContactAnchor] = useState<null | HTMLElement>(null);
  const [page, setPage] = useState<'about' | 'projects' | 'training'>(() => {
    // Parse the path for deep linking
    const path = window.location.pathname.toLowerCase();
    if (path.includes('projects')) {
      return 'projects';
    }
    if (path.includes('training')) {
      return 'training';
    }
    // Redirect from / or /WhoAmI to /WhoAmI/about on initial load
    if (path === '/') {
      window.history.replaceState(null, '', '/WhoAmI');
    }
    return 'about';
  });
  const theme = getTheme(mode);

  const handleContactClick = (event: React.MouseEvent<HTMLElement>) => {
    setContactAnchor(event.currentTarget);
  };
  const handleContactClose = () => {
    setContactAnchor(null);
  };
  const contactOpen = Boolean(contactAnchor);
  const contactId = contactOpen ? 'contact-popover' : undefined;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed" color="primary" sx={{ width: '100vw', left: 0, top: 0, boxShadow: 3 }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
            <Button color="inherit" sx={{ fontWeight: 600, letterSpacing: 1 }} onClick={() => setPage('about')}>About</Button>
            <Button color="inherit" sx={{ fontWeight: 600, letterSpacing: 1 }} onClick={() => setPage('projects')}>Projects</Button>
            <Button color="inherit" sx={{ fontWeight: 600, letterSpacing: 1 }} onClick={() => setPage('training')}>Training</Button>
          </Box>
          <IconButton
            sx={{ ml: 2 }}
            color="inherit"
            aria-label="contact"
            onClick={handleContactClick}
            edge="end"
          >
            <FaEnvelope />
          </IconButton>
          <Popover
            id={contactId}
            open={contactOpen}
            anchorEl={contactAnchor}
            onClose={handleContactClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <div style={{ padding: '1rem', minWidth: 220 }}>
              <strong>Email:</strong> <a
                href="mailto:red.parker.red@gmail.com"
                style={{ color: theme.palette.info.main, fontWeight: 600, textDecoration: 'underline' }}
              >red.parker.red@gmail.com</a><br />
              <strong>Phone:</strong> <span style={{ whiteSpace: 'nowrap' }}>+44 7792 996199</span>
            </div>
          </Popover>
          <IconButton
            sx={{ ml: 2 }}
            color="inherit"
            aria-label="toggle dark mode"
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            edge="end"
          >
            {mode === 'light' ? <FaMoon data-testid="FaMoon" /> : <FaSun data-testid="FaSun" />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ pt: 10 }}>
        {page === 'about' && <About />}
        {page === 'projects' && <Projects />}
        {page === 'training' && <Training />}
      </Box>
    </ThemeProvider>
  );
}

export default App;
