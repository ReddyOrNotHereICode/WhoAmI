import { getTheme } from "./theme";

describe("getTheme", () => {
  it("returns correct palette for light mode", () => {
    const theme = getTheme("light");
    expect(theme.palette.mode).toBe("light");
    expect(theme.palette.background.default).toBe("#fff8f0");
    expect(theme.palette.text.primary).toBe("#4e260e");
  });
  it("returns correct palette for dark mode", () => {
    const theme = getTheme("dark");
    expect(theme.palette.mode).toBe("dark");
    expect(theme.palette.background.default).toBe("#2a1a0a");
    expect(theme.palette.text.primary).toBe("#fff8f0");
  });
});
