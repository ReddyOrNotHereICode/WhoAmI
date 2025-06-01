import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

const setPathname = (path: string) => {
  window.history.replaceState(null, '', path);
};

describe('App Navbar and Navigation', () => {
  it('renders the navbar with correct sections', () => {
    render(<App />);
    // There are two About buttons: one in the navbar, one in the Home hero section. Use getAllByRole and check at least one is in the navbar.
    const aboutButtons = screen.getAllByRole('button', { name: /about/i });
    // The navbar About button should be visible
    expect(aboutButtons.some(btn => btn.textContent === 'About')).toBe(true);
    expect(screen.getByRole('button', { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /training/i })).toBeInTheDocument();
  });

  it('renders About content by default', () => {
    setPathname('/');
    render(<App />);
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByText(/linkedin profile/i)).toBeInTheDocument();
  });

  it('renders Projects content when path includes "projects"', () => {
    setPathname('/WhoAmI/projects');
    render(<App />);
    expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
  });

  it('renders Training content when path includes "training"', () => {
    setPathname('/WhoAmI/training');
    render(<App />);
    expect(screen.getByRole('heading', { name: /training/i })).toBeInTheDocument();
  });

  it('renders About content when path includes "about"', () => {
    setPathname('/WhoAmI/about');
    render(<App />);
    expect(screen.getAllByRole('heading', { name: /about/i })[0]).toBeInTheDocument();
  });

  it('navigates to Projects and Training via button clicks', async () => {
    render(<App />);
    // Go to Projects
    await userEvent.click(screen.getByRole('button', { name: /projects/i }));
    expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByText(/tech stack/i)).toBeInTheDocument();
    // Go to Training
    await userEvent.click(screen.getByRole('button', { name: /training/i }));
    expect(screen.getByRole('heading', { name: /training/i })).toBeInTheDocument();
    expect(screen.getByText(/completed training/i)).toBeInTheDocument();
    // Go back to About
    await userEvent.click(screen.getByRole('button', { name: /about/i }));
    expect(screen.getAllByRole('heading', { name: /about/i })[0]).toBeInTheDocument();
  });

  it('does not change URL when navigating via navbar', async () => {
    const initialUrl = window.location.pathname;
    render(<App />);
    await userEvent.click(screen.getByRole('button', { name: /projects/i }));
    expect(window.location.pathname).toBe(initialUrl);
    await userEvent.click(screen.getByRole('button', { name: /training/i }));
    expect(window.location.pathname).toBe(initialUrl);
    await userEvent.click(screen.getByRole('button', { name: /about/i }));
    expect(window.location.pathname).toBe(initialUrl);
  });

  it('closes the contact popover when clicking the escape key', async () => {
    render(<App />);
    const contactBtn = screen.getByLabelText(/contact/i);
    await userEvent.click(contactBtn);
    expect(screen.getByText(/red.parker.red@gmail.com/i)).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    expect(screen.queryByText(/red.parker.red@gmail.com/i)).not.toBeInTheDocument();
  });

  it('theme toggle button is accessible and toggles twice', async () => {
    render(<App />);
    const toggleBtn = screen.getByLabelText(/toggle dark mode/i);
    expect(toggleBtn).toBeInTheDocument();
    await userEvent.click(toggleBtn); // dark
    await userEvent.click(toggleBtn); // light
    expect(screen.getByTestId('FaMoon')).toBeInTheDocument();
  });

  it('renders Home after redirect from /WhoAmI', () => {
    setPathname('/WhoAmI');
    render(<App />);
    expect(screen.getByText(/linkedin profile/i)).toBeInTheDocument();
  });

  it('renders Home and navigates to Projects and About via Home page buttons', async () => {
    setPathname('/WhoAmI/');
    render(<App />);
    // Home page should be visible
    expect(screen.getByRole('heading', { name: /hi, i'm red parker/i })).toBeInTheDocument();
    // Click "Explore my work" (should go to Projects)
    await userEvent.click(screen.getByRole('button', { name: /explore my work/i }));
    expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
    // Go back to Home
    await userEvent.click(screen.getByRole('button', { name: /home/i }));
    // Click "Learn more about me" (should go to About)
    await userEvent.click(screen.getByRole('button', { name: /learn more about me/i }));
    expect(screen.getAllByRole('heading', { name: /about/i })[1]).toBeInTheDocument();
  });
});
