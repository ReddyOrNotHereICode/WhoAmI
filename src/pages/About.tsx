import PageLayout from '../components/PageLayout';
import { Typography, Tabs, Tab, Box } from '@mui/material';
import { useState } from 'react';

function About() {
  const [tab, setTab] = useState(0);

  return (
    <PageLayout id="about" title="About">
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          aria-label="About sections"
          centered
        >
          <Tab label="Overview" />
          <Tab label="Beyond the Code" />
          <Tab label="My History" />
        </Tabs>
      </Box>

      {tab === 0 && (
        <Box>
          <Typography variant="h6" gutterBottom>A Little Bit About Me</Typography>
          <Typography variant="body1">
            I'm Red, a Lead Software Developer with a proven record of delivering modern web, cloud, and data-driven solutions.
          </Typography>
          <Typography variant="body1">
            I specialise in full-stack development using React, .NET, and Python, with a strong focus on accessibility, performance, and clean code practices. I also bring hands-on experience in DevSecOps and cloud-native architectures.
          </Typography>
          <Typography variant="body1">
            My core strengths lie in problem-solving, scalable system design, and working with emerging technologies. I'm equally passionate about mentoring others and continuously improving the development lifecycle.
          </Typography>
        </Box>
      )}

      {tab === 1 && (
        <Box>
          <Typography variant="h6" gutterBottom>Non-Technical Experience</Typography>
          <Typography variant="body1">
            In addition to writing code, I frequently contribute to team coordination, communication, and knowledge sharing.
          </Typography>
          <Typography variant="body1">
            I've stepped into the role of Scrum Master during agile sprints — facilitating standups, retrospectives, and planning sessions to help the team stay aligned and unblock progress. I also work closely with product owners and stakeholders to ensure clarity of requirements and prioritisation of value.
          </Typography>
          <Typography variant="body1">
            As a mentor, I support junior developers and apprentices through code reviews, pair programming, and architectural discussions — creating an environment of continuous learning and growth.
          </Typography>
          <Typography variant="body1">
            I also take initiative in writing technical documentation and onboarding materials. Clear, well-structured documentation helps maintain team velocity and improves handovers across teams.
          </Typography>
        </Box>
      )}

      {tab === 2 && (
        <Box>
          <Typography variant="h6" gutterBottom>Professional Experience</Typography>
          <Typography variant="body1">
            <strong>Lead Software Developer</strong>, SRC UK (2024-Present)
            <br />
            Leading delivery of secure, accessible software solutions with a focus on quality, maintainability, and collaboration.
          </Typography>
          <Typography variant="body1">
            <strong>Software Developer</strong>, SRC UK (2022-2024)
            <br />
            Worked across full-stack systems, contributing to everything from API design and front-end UX to CI/CD and cloud deployment.
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }} >
            Prior to my software career, I worked in various customer-facing roles — building valuable skills in communication, empathy, and adaptability.
          </Typography>
          <Typography variant="body1">
            Call Centre Agent (2022)
            <br />
            Server/Bartender (2021-2022)
          </Typography>
          <Typography variant="h6" sx={{mt: 2}}>Education</Typography>
          <Typography variant="body1">
            <strong>BSc Computer Science:</strong> University of Sheffield & The Open University
            <br />
            <strong>A Levels:</strong> Computer Science, Maths, Physics
            <br />
            <strong>AS Levels:</strong> Further Maths, Chemistry
          </Typography>
        </Box>
      )}
    </PageLayout>
  );
}

export default About;
