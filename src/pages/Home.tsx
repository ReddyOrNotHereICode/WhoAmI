import PageLayout from "../components/PageLayout";
import { Box, Typography, Button } from "@mui/material";

function Home({
  onExplore,
  onAbout,
}: Readonly<{ onExplore: () => void; onAbout: () => void }>) {
  return (
    <PageLayout id="home" title="">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
        }}
      >
        <Typography
          variant="h2"
          sx={{ mb: 2, fontWeight: 800, letterSpacing: 1, textAlign: "center" }}
        >
          Hi, I'm Red Parker
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mb: 2,
            color: "text.secondary",
            maxWidth: 600,
            textAlign: "center",
          }}
        >
          Full-stack developer specializing in React, .NET, and Python. I'm
          passionate about clean code and building accessible, user-friendly
          experiences.
        </Typography>
        <Box sx={{ display: "flex", gap: 3, mb: 3 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={onExplore}
            aria-label="Explore my work"
            sx={{ fontWeight: 600, px: 4 }}
          >
            Explore my work
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={onAbout}
            aria-label="Learn more about me"
            sx={{ fontWeight: 600, px: 4 }}
          >
            Learn more about me
          </Button>
        </Box>
      </Box>
    </PageLayout>
  );
}

export default Home;
