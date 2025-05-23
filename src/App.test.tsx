import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import App from './App';

// Note: @testing-library/jest-dom matchers are available by default in Vitest >=v1 if configured in vite.config.ts

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /Vite \+ React/i })).toBeInTheDocument();
  });
});
