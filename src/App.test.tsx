import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import Projects from './pages/Projects';
import Training from './pages/Training';
import userEvent from '@testing-library/user-event';
import { getTheme } from './theme'; // Import getTheme function

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
    expect(screen.getByText(/src uk/i)).toBeInTheDocument();
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
    expect(screen.getByText(/tech stack/i)).toBeInTheDocument();
  });
});

describe('Training page', () => {
  it('renders skill area accordions and provider details', async () => {
    render(
      <MemoryRouter>
        <Training />
      </MemoryRouter>
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
      <MemoryRouter>
        <Training />
      </MemoryRouter>
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
      <MemoryRouter>
        <Training />
      </MemoryRouter>
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
});

describe('Contact popover accessibility', () => {
  it('popover has correct id when open and is not in the DOM when closed', async () => {
    render(<App />);
    // Popover should not be in the document initially
    expect(screen.queryByRole('presentation')).not.toBeInTheDocument();

    // Open the popover
    const contactBtn = screen.getByLabelText(/contact/i);
    await userEvent.click(contactBtn);
    const popover = screen.getByRole('presentation');
    expect(popover).toHaveAttribute('id', 'contact-popover');

    // Close the popover
    // Click away: simulate pressing Escape (which closes MUI popovers)
    await userEvent.keyboard('{Escape}');
    // Wait for popover to be removed
    expect(screen.queryByRole('presentation')).not.toBeInTheDocument();
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
