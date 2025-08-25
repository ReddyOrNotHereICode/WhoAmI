import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import About from "./About";

describe("About page tabs and content", () => {
  it("renders all three tabs", () => {
    render(<About />);
    expect(screen.getByRole("tab", { name: /overview/i })).toBeInTheDocument();
    expect(
      screen.getByRole("tab", { name: /beyond the code/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("tab", { name: /my history/i }),
    ).toBeInTheDocument();
  });

  it("shows Overview tab content by default", () => {
    render(<About />);
    expect(screen.getByText(/lead software developer/i)).toBeInTheDocument();
    expect(screen.getByText(/full-stack development/i)).toBeInTheDocument();
  });

  it("shows Beyond the Code tab content when selected", async () => {
    render(<About />);
    await userEvent.click(
      screen.getByRole("tab", { name: /beyond the code/i }),
    );
    expect(
      screen.getByText(/in addition to writing code/i),
    ).toBeInTheDocument();
  });

  it("shows Professional History tab content when selected", async () => {
    render(<About />);
    await userEvent.click(screen.getByRole("tab", { name: /my history/i }));
    expect(screen.getByText(/professional experience/i)).toBeInTheDocument();
    expect(screen.getByText(/education/i)).toBeInTheDocument();
  });
});
