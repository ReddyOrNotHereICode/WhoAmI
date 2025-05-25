import PageLayout from '../components/PageLayout';
import Typography from '@mui/material/Typography';

function About() {
  return (
    <PageLayout id="about" title="About">
      <Typography variant="body1" paragraph>
        I'm Red Parker, a Lead Software Developer with a proven record delivering modern web, cloud, and data solutions.
      </Typography>
      <Typography variant="body1" paragraph>
        I have hands-on experience with full-stack development, DevSecOps, and using cloud platforms,
        I also have a passion for mentoring and driving quality in all aspects of the software development lifecycle.
      </Typography>
      <Typography variant="body1" paragraph>
        My main areas of interest are big data and problem solving,
        I enjoy being able to work with new and unique technologies.
      </Typography>
      <Typography variant="h6">Experience</Typography>
      <Typography variant="body1" paragraph>
        Lead Software Developer, SRC UK (2024-present)
        <br />Software Developer, SRC UK (2022-2024)
      </Typography>
      <Typography variant="body1" paragraph>
        Before starting my career in software, I worked in various customer service positions.
        This experience gave me a strong foundation in communication and other non-technical skills,
        which have supported my work as a lead on software projects.
        <br />Call Centre Agent (2022-2022)
        <br />Server/Bartender (2021-2022)
      </Typography>
      <Typography variant="h6">Education</Typography>
      <Typography variant="body1" paragraph>
        BSc Computer Science, University of Sheffield & The Open University
        <br />A Levels: Computer Science, Maths, Physics
        <br />AS Levels: Further Maths, Chemistry
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Contact:{' '}
        <a href="mailto:red.parker.red@gmail.com">red.parker.red@gmail.com</a>
      </Typography>
    </PageLayout>
  );
}

export default About;
