import PageLayout from '../components/PageLayout';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Projects() {
  return (
    <PageLayout id="projects" title="Projects">
      <Typography variant="body1" paragraph>
        Explore my featured projects below. Placeholders.
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Box>
          <Typography variant="h6">Project One</Typography>
          <Typography variant="body2">A web app for managing tasks efficiently. (Description TBC)</Typography>
          <Link href="https://github.com/username/project-one" target="_blank" rel="noopener">GitHub Repo</Link>
        </Box>
        <Box>
          <Typography variant="h6">Project Two</Typography>
          <Typography variant="body2">A portfolio site built with React and Material UI. (Description TBC)</Typography>
          <Link href="https://github.com/username/project-two" target="_blank" rel="noopener">GitHub Repo</Link>
        </Box>
        <Box>
          <Typography variant="h6">Project Three</Typography>
          <Typography variant="body2">A data visualisation dashboard for analytics. (Description TBC)</Typography>
          <Link href="https://github.com/username/project-three" target="_blank" rel="noopener">GitHub Repo</Link>
        </Box>
      </Box>
    </PageLayout>
  );
}

export default Projects;
