import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Theme toggling', () => {
  it('toggles between light and dark mode when the icon is clicked', async () => {
    render(<App />);
    const toggleBtn = screen.getByLabelText(/toggle dark mode/i);
    expect(toggleBtn).toBeInTheDocument();
    expect(toggleBtn.querySelector('[data-testid="FaMoon"]')).toBeInTheDocument();
    await userEvent.click(toggleBtn);
    expect(screen.getByLabelText(/toggle dark mode/i).querySelector('[data-testid="FaSun"]')).toBeInTheDocument();
  });

  it('does not change the URL when toggling theme', async () => {
    render(<App />);
    const initialUrl = window.location.pathname;
    const toggleBtn = screen.getByLabelText(/toggle dark mode/i);
    await userEvent.click(toggleBtn);
    expect(window.location.pathname).toBe(initialUrl);
    await userEvent.click(toggleBtn);
    expect(window.location.pathname).toBe(initialUrl);
  });

  it('shows FaMoon in light mode and FaSun in dark mode', async () => {
    render(<App />);
    expect(screen.getByTestId('FaMoon')).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText(/toggle dark mode/i));
    expect(screen.getByTestId('FaSun')).toBeInTheDocument();
  });

  it('toggles from light to dark and back to light, covering both branches', async () => {
    render(<App />);
    const toggleBtn = screen.getByLabelText(/toggle dark mode/i);
    expect(toggleBtn.querySelector('svg')).toBeInTheDocument();
    await userEvent.click(toggleBtn);
    expect(screen.getByLabelText(/toggle dark mode/i).querySelector('svg')).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText(/toggle dark mode/i));
    expect(screen.getByLabelText(/toggle dark mode/i).querySelector('svg')).toBeInTheDocument();
  });
});

describe('Contact popover', () => {
  it('shows email and phone when the contact icon is clicked', async () => {
    render(<App />);
    const contactBtn = screen.getByLabelText(/contact/i);
    await userEvent.click(contactBtn);
    expect(screen.getByText(/red.parker.red@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByText(/\+44/i)).toBeInTheDocument();
  });

  it('closes when clicking away', async () => {
    render(<App />);
    const contactBtn = screen.getByLabelText(/contact/i);
    await userEvent.click(contactBtn);
    expect(screen.getByText(/red.parker.red@gmail.com/i)).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    expect(screen.queryByText(/red.parker.red@gmail.com/i)).not.toBeInTheDocument();
  });
});
