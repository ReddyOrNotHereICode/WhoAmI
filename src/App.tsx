import './App.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Training from './pages/Training';

function App() {
  return (
    <Router>
      <AppBar position="fixed" color="primary" sx={{ width: '100vw', left: 0, top: 0, boxShadow: 3 }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
            <Button color="inherit" component={Link} to="/WhoAmI/about" sx={{ fontWeight: 600, letterSpacing: 1 }}>About</Button>
            <Button color="inherit" component={Link} to="/WhoAmI/projects" sx={{ fontWeight: 600, letterSpacing: 1 }}>Projects</Button>
            <Button color="inherit" component={Link} to="/WhoAmI/training" sx={{ fontWeight: 600, letterSpacing: 1 }}>Training</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Navigate to="/WhoAmI/about" replace />} />
        <Route path="/WhoAmI" element={<Navigate to="/WhoAmI/about" replace />} />
        <Route path="/WhoAmI/about" element={<About />} />
        <Route path="/WhoAmI/projects" element={<Projects />} />
        <Route path="/WhoAmI/training" element={<Training />} />
      </Routes>
    </Router>
  )
}

export default App
