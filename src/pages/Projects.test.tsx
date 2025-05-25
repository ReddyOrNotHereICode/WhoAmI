import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Projects from './Projects';

describe('Projects page', () => {
  it('renders Projects page content', () => {
    render(<Projects />);
    expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByText(/tech stack/i)).toBeInTheDocument();
  });
});
