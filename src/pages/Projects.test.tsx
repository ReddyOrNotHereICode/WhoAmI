import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Projects from "./Projects";

describe("Projects page", () => {
  it("renders Projects page content", () => {
    render(<Projects />);
    expect(
      screen.getByRole("heading", { name: /projects/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/tech stack/i)).toBeInTheDocument();
  });

  it("shows Portfolio Project tab by default", () => {
    render(<Projects />);
    expect(
      screen.getByRole("tab", { name: /portfolio project/i }),
    ).toHaveAttribute("aria-selected", "true");
    expect(
      screen.getByRole("heading", { name: /portfolio web app/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/i created this portfolio/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /github repo/i })).toHaveAttribute(
      "href",
      expect.stringContaining("WhoAmI"),
    );
  });

  it("switches to Django Web App tab and shows correct content", async () => {
    render(<Projects />);
    const djangoTab = screen.getByRole("tab", { name: /django web app/i });
    await userEvent.click(djangoTab);
    expect(djangoTab).toHaveAttribute("aria-selected", "true");
    expect(
      screen.getByRole("heading", { name: /django web app/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/dockerizing python web apps/i),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /github repo/i })).toHaveAttribute(
      "href",
      expect.stringContaining("Django"),
    );
  });
});
