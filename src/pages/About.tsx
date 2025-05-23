import PageLayout from '../components/PageLayout';
import Typography from '@mui/material/Typography';

function About() {
  return (
    <PageLayout id="about" title="About">
      <Typography variant="body1" paragraph>
        Hi, I'm Red Parker, a passionate developer focused on building modern web
        applications.
      </Typography>
      <Typography variant="body1" paragraph>
        This portfolio showcases my projects, training, and experience in software
        development. Feel free to explore and connect!
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Contact:{' '}
        <a href="mailto:red.parker.red@gmail.com">red.parker.red@gmail.com</a>
      </Typography>
    </PageLayout>
  );
}

export default About;
