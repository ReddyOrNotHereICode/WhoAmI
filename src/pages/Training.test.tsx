import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Training from './Training';
import userEvent from '@testing-library/user-event';

describe('Training page', () => {
  it('renders skill area accordions and provider details', async () => {
    render(<Training />);
    expect(screen.getByText(/Software Engineering & Development/i)).toBeInTheDocument();
    expect(screen.getByText(/Leadership & Management/i)).toBeInTheDocument();
    const skillAreaButton = screen.getByRole('button', { name: /Software Engineering & Development/i });
    await userEvent.click(skillAreaButton);
    const certButton = await screen.findByRole('button', { name: /Applied Software Engineering Fundamentals Specialization/i });
    await userEvent.click(certButton);
    expect(screen.getByText(/Applied Software Engineering Fundamentals Specialization/i)).toBeInTheDocument();
    expect(screen.getAllByText(/IBM/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Introduction to Software Engineering/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/IBM/i)[1]).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /Certificate \(PDF\)/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: /Coursera Info/i }).length).toBeGreaterThan(0);
  });

  it('renders all course certificate PDF links and Coursera links (full coverage for cert.courses.map)', async () => {
    render(<Training />);
    const skillAreaButtons = screen.getAllByRole('button', { expanded: false });
    for (const btn of skillAreaButtons) {
      await userEvent.click(btn);
    }
    const certButtons = screen.getAllByRole('button', { expanded: false });
    for (const btn of certButtons) {
      await userEvent.click(btn);
      break;
    }
    const pdfLinks = screen.getAllByRole('link', { name: /Certificate \(PDF\)/i });
    expect(pdfLinks.length).toBeGreaterThan(0);
    pdfLinks.forEach(link => {
      expect(link).toBeVisible();
      expect(link).toHaveAttribute('href');
      expect(link.getAttribute('href')).toMatch(/\.pdf$/i);
    });
    const courseraLinks = screen.getAllByRole('link', { name: /Coursera Info/i });
    expect(courseraLinks.length).toBeGreaterThan(0);
    courseraLinks.forEach(link => {
      expect(link).toBeVisible();
      expect(link).toHaveAttribute('href');
      expect(link.getAttribute('href')).toMatch(/^https:\/\//);
    });
  });

  it('renders a course with only a PDF and no Coursera link (edge case for cert.courses.map)', async () => {
    render(<Training />);
    const skillAreaButtons = screen.getAllByRole('button', { name: /Software Engineering & Development|Leadership & Management/i });
    for (const btn of skillAreaButtons) {
      await userEvent.click(btn);
    }
    const certButtons = screen.getAllByRole('button', { name: /Specialization|Certificate|Developer|Teams|Organizations|Team|Fundamentals/i });
    for (const btn of certButtons) {
      await userEvent.click(btn);
    }
    const allCourseBoxes = screen.getAllByText((content, element) => {
      return element?.tagName.toLowerCase() === 'a' && /Certificate \(PDF\)/i.test(content);
    });
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
