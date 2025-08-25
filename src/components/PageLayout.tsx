import { Box } from "@mui/material";
import type { ReactNode } from "react";

interface PageLayoutProps {
  readonly id: string;
  readonly title: string;
  readonly children: ReactNode;
}

function PageLayout({ id, title, children }: PageLayoutProps) {
  return (
    <Box sx={{ mt: 0, minHeight: "80vh", maxWidth: "1000px" }}>
      <section id={id}>
        <h1 style={{ marginTop: 0, paddingTop: 24 }}>{title}</h1>
        <div>{children}</div>
      </section>
    </Box>
  );
}

export default PageLayout;
