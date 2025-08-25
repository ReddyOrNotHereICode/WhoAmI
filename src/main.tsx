import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import getTheme from "./theme";

const container = document.getElementById("root");
if (!container) throw new Error("Root element not found");
createRoot(container).render(
  <StrictMode>
    <ThemeProvider theme={getTheme("light")}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
