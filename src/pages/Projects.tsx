import PageLayout from '../components/PageLayout';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Projects() {
  return (
    <PageLayout id="projects" title="Projects">
      <Typography variant="body1">
        <br />
        This site is currently my primary public project. 
        As a developer who mostly works on internal/proprietary software, 
        I created this portfolio to share a public-facing example of my development, design, and CI/CD skills.
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        <strong>Tech Stack:</strong> React, TypeScript, Material UI,
        Vite, ESLint, Vitest, GitHub Actions, and GitHub Pages.
      </Typography>
      <Typography variant="body1">
        <strong>CI/CD:</strong> The project uses GitHub Actions to automatically lint, test, check coverage on every push.
        The site is built and deployed to GitHub Pages on every push to the main branch.
        <br />
        Code coverage is enforced and reported using Vitest and the V8 coverage provider, ensuring
        all functions and branches are covered.
      </Typography>
      <Typography variant="body1">
        <strong>Key Focus Areas:</strong> Semantic HTML, keyboard navigation, color
        contrast, screen reader accessibility
      </Typography>
      <Typography variant="body1">
        <strong>What I Learned:</strong> Managing a full solo project, optimising
        for accessibility, refining frontend design practices, and implementing
        professional CI/CD and test coverage standards.
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Link
          href="https://github.com/reddyornothereicode/WhoAmI"
          target="_blank"
          rel="noopener"
        >
          GitHub Repo
        </Link>
      </Box>
    </PageLayout>
  );
}

export default Projects;
