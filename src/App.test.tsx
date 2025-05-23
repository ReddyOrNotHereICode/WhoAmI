import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import Projects from './pages/Projects';
import Training from './pages/Training';

describe('App Navbar and Routing', () => {
  it('renders the navbar with correct sections', () => {
    render(<App />);

    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /training/i })).toBeInTheDocument();

  });

  it('renders About content when redirected from /', async () => {
    render(<App />);
    expect(await screen.findByText(/red parker/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByText(/portfolio showcases my projects/i)).toBeInTheDocument();
  });
});

describe('Projects page', () => {
  it('renders Projects page content', () => {
    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByText(/explore my featured projects/i)).toBeInTheDocument();
  });
});

describe('Training page', () => {
  it('renders Training page content', () => {
    render(
      <MemoryRouter>
        <Training />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /training/i })).toBeInTheDocument();
    expect(screen.getByText(/discover my training/i)).toBeInTheDocument();
  });
});
