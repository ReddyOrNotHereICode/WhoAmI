import PageLayout from '../components/PageLayout';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { skillAreas } from '../data/trainingSkillAreas';
import type { CourseWithProvider, CertWithProvider } from '../data/trainingSkillAreas';

function SkillAreaAccordion({ area, items, summary }: Readonly<{ area: string; items: CertWithProvider[]; summary?: string }>) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box>
          <Typography variant="h5">{area}</Typography>
          {summary && (
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              {summary}
            </Typography>
          )}
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        {items.map((cert: CertWithProvider) => (
          <Accordion key={cert.name} sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">
                {cert.name} <span style={{ marginLeft: 8, fontSize: '0.75rem', opacity: 0.7 }}>({cert.provider})</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {/* Show cert-level PDF and Coursera link if available */}
              <Box sx={{ mb: 2 }}>
                {cert.pdf && (
                  <Link href={cert.pdf} target="_blank" rel="noopener">Certificate (PDF)</Link>
                )}
                {cert.coursera && cert.coursera !== '' && (
                  <>
                    {cert.pdf ? ' | ' : ''}
                    <Link href={cert.coursera} target="_blank" rel="noopener">Coursera Info</Link>
                  </>
                )}
              </Box>
              <Box sx={{ ml: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                {cert.courses.map((course: CourseWithProvider) => (
                  <Box key={course.name}>
                    <Typography variant="subtitle1">
                      {course.name} <span style={{ marginLeft: 8, fontSize: '0.75rem', opacity: 0.7 }}>({course.provider})</span>
                    </Typography>
                    <Link href={course.pdf} target="_blank" rel="noopener">Certificate (PDF)</Link>
                    {course.coursera && course.coursera !== '' && (
                      <>
                        {' | '}
                        <Link href={course.coursera} target="_blank" rel="noopener">Coursera Info</Link>
                      </>
                    )}
                  </Box>
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </AccordionDetails>
    </Accordion>
  );
}

function Training() {
  return (
    <PageLayout id="training" title="Training">
      <Typography variant="body1" paragraph>
        Below are my completed training courses and certifications, grouped by skill area. Provider details are shown next to each certificate and course. Click to expand each section for details and links to certificates and Coursera info.
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {skillAreas?.length > 0 ? (
          skillAreas.map((area) => (
            <SkillAreaAccordion key={area.area} area={area.area} items={area.items} summary={area.summary} />
          ))
        ) : (
          <Typography variant="body1" color="text.secondary">
            No training data available.
          </Typography>
        )}
      </Box>
    </PageLayout>
  );
}

export default Training;
