import PageLayout from '../components/PageLayout';
import { Box, Typography, Link, Tabs, Tab } from '@mui/material';
import { useState } from 'react';

function Projects() {
  const [tab, setTab] = useState(0);

  return (
    <PageLayout id="projects" title="Projects">
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          aria-label="Project sections"
          centered
        >
          <Tab label="Portfolio Project" />
          <Tab label="Django Web App" />
        </Tabs>
      </Box>
      {tab === 0 && (
        <Box>
          <Typography variant="h6">Portfolio Web App</Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            This site is currently my primary public project.
            As a developer who mostly works on internal/proprietary software,
            I created this portfolio to share a public-facing example of my development, design, and CI/CD skills.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Tech Stack:</strong> React, TypeScript, Material UI,
            Vite, ESLint, Vitest, GitHub Actions, and GitHub Pages.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>CI/CD:</strong> The project uses GitHub Actions to automatically lint, test, check coverage on every push.
            The site is built and deployed to GitHub Pages on every push to the main branch.
            <br />
            <strong>Code coverage:</strong> Enforced and reported using Vitest and the V8 coverage provider, ensuring
            all functions and branches are covered.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Key Focus Areas:</strong> Semantic HTML, keyboard navigation, color
            contrast, screen reader accessibility
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>What I Learned:</strong> Creating a project from scratch, optimising
            for accessibility, refining frontend design practices, and implementing
            professional CI/CD and test coverage standards.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Link
              href="https://github.com/reddyornothereicode/WhoAmI"
              target="_blank"
              rel="noopener"
              aria-label="GitHub Repo for the Portfolio project"
            >
              GitHub Repo
            </Link>
          </Box>
        </Box>
      )}
      {tab === 1 && (
        <Box>
          <Typography variant="h6">Django Web App</Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            A basic "Job Board" web application built with Django and Python, 
            designed as a foundation for rapid development and deployment of web projects.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Tech Stack:</strong> Django, Python, HTML, Docker, Shell
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Key Features:</strong> Modular Django app structure, user authentication (accounts), 
            job management (jobs), Dockerized setup, and seed data script for easy onboarding.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>CI/CD & Deployment:</strong> Project includes a <code>Dockerfile</code> and{' '}
            <code>docker-compose.yml</code> for easy deployment. (No automated CI/CD pipeline configured.)
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Code coverage:</strong> Unit tests are next ont he todo list, 
            with plans to use <code>coverage.py</code> for measuring test coverage.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>What I Learned:</strong> Building and structuring Django projects, 
            Dockerizing Python web apps, and managing migrations and seed data for rapid development.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Link
              href="https://github.com/ReddyOrNotHereICode/Django"
              target="_blank"
              rel="noopener"
              aria-label="GitHub Repo for the Django project"
            >
              GitHub Repo
            </Link>
          </Box>
        </Box>
      )}
    </PageLayout>
  );
}

export default Projects;
