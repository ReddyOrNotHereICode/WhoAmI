import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import Home from './Home';

describe('Home page', () => {
  it('renders hero section with headings and tagline', () => {
    render(<Home onExplore={() => {}} onAbout={() => {}} />);
    expect(screen.getByRole('heading', { name: /hi, i'm red parker/i })).toBeInTheDocument();
    expect(screen.getByText(/full-stack developer/i)).toBeInTheDocument();
  });

  it('renders navigation buttons with correct labels and aria-labels', () => {
    render(<Home onExplore={() => {}} onAbout={() => {}} />);
    const exploreBtn = screen.getByRole('button', { name: /explore my work/i });
    const aboutBtn = screen.getByRole('button', { name: /learn more about me/i });
    expect(exploreBtn).toBeInTheDocument();
    expect(aboutBtn).toBeInTheDocument();
    expect(exploreBtn).toHaveAttribute('aria-label', 'Explore my work');
    expect(aboutBtn).toHaveAttribute('aria-label', 'Learn more about me');
  });

  it('calls onExplore and onAbout when buttons are clicked', () => {
    const onExplore = vi.fn();
    const onAbout = vi.fn();
    render(<Home onExplore={onExplore} onAbout={onAbout} />);
    fireEvent.click(screen.getByRole('button', { name: /explore my work/i }));
    expect(onExplore).toHaveBeenCalled();
    fireEvent.click(screen.getByRole('button', { name: /learn more about me/i }));
    expect(onAbout).toHaveBeenCalled();
  });
});
