import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import Projects from './pages/Projects';
import Training from './pages/Training';
import userEvent from '@testing-library/user-event';

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
