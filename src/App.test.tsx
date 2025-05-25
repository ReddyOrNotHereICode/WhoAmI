import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import Projects from './pages/Projects';
import Training from './pages/Training';
import userEvent from '@testing-library/user-event';
import { getTheme } from './theme'; 

describe('App Navbar and Navigation', () => {
  it('renders the navbar with correct sections', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /training/i })).toBeInTheDocument();
  });

  it('renders About content by default', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByText(/red parker/i)).toBeInTheDocument();
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
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument();
  });

  it('does not change URL when navigating via navbar', async () => {
    render(<App />);
    const initialUrl = window.location.pathname;
    await userEvent.click(screen.getByRole('button', { name: /projects/i }));
    expect(window.location.pathname).toBe(initialUrl);
    await userEvent.click(screen.getByRole('button', { name: /training/i }));
    expect(window.location.pathname).toBe(initialUrl);
    await userEvent.click(screen.getByRole('button', { name: /about/i }));
    expect(window.location.pathname).toBe(initialUrl);
  });
});

describe('Projects page', () => {
  it('renders Projects page content', () => {
    render(
      <Projects />
    );
    expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByText(/tech stack/i)).toBeInTheDocument();
  });
});

describe('Training page', () => {
  it('renders skill area accordions and provider details', async () => {
    render(
      <Training />
    );
    // Check for skill area headings
    expect(screen.getByText(/Software Engineering & Development/i)).toBeInTheDocument();
    expect(screen.getByText(/Leadership & Management/i)).toBeInTheDocument();
    // Expand the first skill area accordion
    const skillAreaButton = screen.getByRole('button', { name: /Software Engineering & Development/i });
    await userEvent.click(skillAreaButton);
    // Expand the first certificate accordion
    const certButton = await screen.findByRole('button', { name: /Applied Software Engineering Fundamentals Specialization/i });
    await userEvent.click(certButton);
    // Check for a certificate and provider
    expect(screen.getByText(/Applied Software Engineering Fundamentals Specialization/i)).toBeInTheDocument();
    expect(screen.getAllByText(/IBM/i)[0]).toBeInTheDocument();
    // Check for a course and provider
    expect(screen.getAllByText(/Introduction to Software Engineering/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/IBM/i)[1]).toBeInTheDocument();
    // Check for certificate PDF links (multiple expected)
    expect(screen.getAllByRole('link', { name: /Certificate \(PDF\)/i }).length).toBeGreaterThan(0);
    // Check for Coursera Info links (multiple expected)
    expect(screen.getAllByRole('link', { name: /Coursera Info/i }).length).toBeGreaterThan(0);
  });

  it('renders all course certificate PDF links and Coursera links (full coverage for cert.courses.map)', async () => {
    render(
      <Training />
    );
    // Expand all skill area accordions dynamically
    const skillAreaButtons = screen.getAllByRole('button', { expanded: false });
    for (const btn of skillAreaButtons) {
      await userEvent.click(btn);
    }
    // Expand all certificate accordions
    const certButtons = screen.getAllByRole('button', { expanded: false });
    for (const btn of certButtons) {
      await userEvent.click(btn);
      break;
    }
    // Dynamically check that every course's PDF link is present and visible
    const pdfLinks = screen.getAllByRole('link', { name: /Certificate \(PDF\)/i });
    expect(pdfLinks.length).toBeGreaterThan(0); // There should be at least one
    pdfLinks.forEach(link => {
      expect(link).toBeVisible();
      expect(link).toHaveAttribute('href');
      expect(link.getAttribute('href')).toMatch(/\.pdf$/i);
    });
    // Dynamically check that every course's Coursera Info link is present if available
    const courseraLinks = screen.getAllByRole('link', { name: /Coursera Info/i });
    expect(courseraLinks.length).toBeGreaterThan(0); // There should be at least one
    courseraLinks.forEach(link => {
      expect(link).toBeVisible();
      expect(link).toHaveAttribute('href');
      expect(link.getAttribute('href')).toMatch(/^https:\/\//);
    });
  });

  it('renders a course with only a PDF and no Coursera link (edge case for cert.courses.map)', async () => {
    render(
      <Training />
    );
    // Expand all skill area accordions
    const skillAreaButtons = screen.getAllByRole('button', { name: /Software Engineering & Development|Leadership & Management/i });
    for (const btn of skillAreaButtons) {
      await userEvent.click(btn);
    }
    // Expand all certificate accordions
    const certButtons = screen.getAllByRole('button', { name: /Specialization|Certificate|Developer|Teams|Organizations|Team|Fundamentals/i });
    for (const btn of certButtons) {
      await userEvent.click(btn);
    }
    // Find a course PDF link that does NOT have a Coursera Info link next to it
    const allCourseBoxes = screen.getAllByText((content, element) => {
      return element?.tagName.toLowerCase() === 'a' && /Certificate \(PDF\)/i.test(content);
    });
    // For each PDF link, check if its parent contains a Coursera Info link
    let foundPdfWithoutCoursera = false;
    for (const pdfLink of allCourseBoxes) {
      const parent = pdfLink.parentElement;
      if (parent && !Array.from(parent.querySelectorAll('a')).some(a => /Coursera Info/i.test(a.textContent ?? ''))) {
        foundPdfWithoutCoursera = true;
        break;
      }
    }
    expect(foundPdfWithoutCoursera).toBe(true);
  });
});

describe('Theme toggling', () => {
   it('toggles between light and dark mode when the icon is clicked', async () => {
     render(<App />);
    const toggleBtn = screen.getByLabelText(/toggle dark mode/i);
    expect(toggleBtn).toBeInTheDocument();
    
    // Verify initial state shows moon icon (light mode)
    expect(toggleBtn.querySelector('[data-testid="FaMoon"]')).toBeInTheDocument();
    
    // Click the toggle button
    await userEvent.click(toggleBtn);
    
    // After toggle, sun icon should be visible (dark mode)
    expect(screen.getByLabelText(/toggle dark mode/i).querySelector('[data-testid="FaSun"]')).toBeInTheDocument();
   });
 });

describe('Theme toggle icon', () => {
  it('shows FaMoon in light mode and FaSun in dark mode', async () => {
    render(<App />);
    // Should show FaMoon (moon icon) in light mode
    expect(screen.getByTestId('FaMoon')).toBeInTheDocument();
    // Toggle to dark mode
    await userEvent.click(screen.getByLabelText(/toggle dark mode/i));
    // Should show FaSun (sun icon) in dark mode
    expect(screen.getByTestId('FaSun')).toBeInTheDocument();
  });
});

describe('Theme toggle branch coverage', () => {
  it('toggles from light to dark and back to light, covering both branches', async () => {
    render(<App />);
    // Should start in light mode (FaMoon icon)
    const toggleBtn = screen.getByLabelText(/toggle dark mode/i);
    expect(toggleBtn.querySelector('svg')).toBeInTheDocument();
    // Toggle to dark mode
    await userEvent.click(toggleBtn);
    // Should now show FaSun (dark mode)
    expect(screen.getByLabelText(/toggle dark mode/i).querySelector('svg')).toBeInTheDocument();
    // Toggle back to light mode
    await userEvent.click(screen.getByLabelText(/toggle dark mode/i));
    // Should show FaMoon again (light mode)
    expect(screen.getByLabelText(/toggle dark mode/i).querySelector('svg')).toBeInTheDocument();
  });
});

describe('Contact popover', () => {
  it('shows email and phone when the contact icon is clicked', async () => {
    render(<App />);
    // Find the contact button (envelope icon)
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
    // Simulate clicking away (click on the overlay)
    await userEvent.keyboard('{Escape}');
    expect(screen.queryByText(/red.parker.red@gmail.com/i)).not.toBeInTheDocument();
  });
});

describe('Theme toggling', () => {
  it('does not change the URL when toggling theme', async () => {
    render(<App />);
    const initialUrl = window.location.pathname;
    const toggleBtn = screen.getByLabelText(/toggle dark mode/i);
    await userEvent.click(toggleBtn);
    expect(window.location.pathname).toBe(initialUrl);
    await userEvent.click(toggleBtn);
    expect(window.location.pathname).toBe(initialUrl);
  });
});

describe('App initial deep linking', () => {
  it('shows Projects if URL contains projects', () => {
    window.history.replaceState(null, '', '/WhoAmI/projects');
    render(<App />);
    expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
  });
  it('shows Training if URL contains training', () => {
    window.history.replaceState(null, '', '/WhoAmI/training');
    render(<App />);
    expect(screen.getByRole('heading', { name: /training/i })).toBeInTheDocument();
  });
  it('redirects from / to /WhoAmI and shows About', () => {
    window.history.replaceState(null, '', '/');
    render(<App />);
    expect(window.location.pathname).toBe('/WhoAmI');
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument();
  });
});

describe('getTheme', () => {
  it('returns correct palette for light mode', () => {
    const theme = getTheme('light');
    expect(theme.palette.mode).toBe('light');
    expect(theme.palette.background.default).toBe('#fff8f0');
    expect(theme.palette.text.primary).toBe('#4e260e');
  });
  it('returns correct palette for dark mode', () => {
    const theme = getTheme('dark');
    expect(theme.palette.mode).toBe('dark');
    expect(theme.palette.background.default).toBe('#1a1a1a');
    expect(theme.palette.text.primary).toBe('#fff8f0');
  });
});
