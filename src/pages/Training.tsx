import PageLayout from "../components/PageLayout";
import {
  Link,
  Box,
  Typography,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { skillAreas } from "../data/trainingSkillAreas";
import type {
  CourseWithProvider,
  CertWithProvider,
} from "../data/trainingSkillAreas";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

function SkillAreaAccordion({
  area,
  items,
}: Readonly<{ area: string; items: CertWithProvider[] }>) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<FaChevronDown aria-label="expand" />}>
        <Box>
          <Typography variant="body1">{area}</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        {items.map((cert: CertWithProvider) => (
          <Accordion key={cert.name} sx={{ mb: 2 }}>
            <AccordionSummary
              expandIcon={<FaChevronDown aria-label="expand" />}
            >
              <Typography variant="body2">
                {cert.name}{" "}
                <span
                  style={{ marginLeft: 8, fontSize: "0.75rem", opacity: 0.7 }}
                >
                  ({cert.provider})
                </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {/* Show cert-level PDF and Coursera link if available */}
              <Box sx={{ mb: 2 }}>
                {cert.pdf && (
                  <Link href={cert.pdf} target="_blank" rel="noopener">
                    Certificate (PDF)
                  </Link>
                )}
                {cert.coursera && cert.coursera !== "" && (
                  <>
                    {cert.pdf ? " | " : ""}
                    <Link href={cert.coursera} target="_blank" rel="noopener">
                      Coursera Info
                    </Link>
                  </>
                )}
              </Box>
              <Box
                sx={{ ml: 2, display: "flex", flexDirection: "column", gap: 1 }}
              >
                {cert.courses.map((course: CourseWithProvider) => (
                  <Box key={course.name}>
                    <Typography variant="subtitle1">
                      {course.name}{" "}
                      <span
                        style={{
                          marginLeft: 8,
                          fontSize: "0.75rem",
                          opacity: 0.7,
                        }}
                      >
                        ({course.provider})
                      </span>
                    </Typography>
                    <Link href={course.pdf} target="_blank" rel="noopener">
                      Certificate (PDF)
                    </Link>
                    {course.coursera && course.coursera !== "" && (
                      <>
                        {" | "}
                        <Link
                          href={course.coursera}
                          target="_blank"
                          rel="noopener"
                        >
                          Coursera Info
                        </Link>
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
  const [tab, setTab] = useState(0);
  const tabAreas = skillAreas.slice(0, 2);
  return (
    <PageLayout id="training" title="Training">
      <Typography variant="body1" sx={{ mb: 2 }}>
        Below are my completed training courses and certifications, grouped by
        skill area. Provider details are shown next to each certificate and
        course. Click to expand each section for details and links to
        certificates and Coursera info.
      </Typography>
      <Tabs
        value={tab}
        onChange={(_, v) => setTab(v)}
        aria-label="Training sections"
        centered
      >
        {tabAreas.map((area) => (
          <Tab key={area.area} label={area.area} />
        ))}
      </Tabs>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 2,
          maxHeight: "50vh",
          overflowY: "auto",
        }}
      >
        {tabAreas[tab]?.items.map((cert: CertWithProvider) => (
          <SkillAreaAccordion key={cert.name} area={cert.name} items={[cert]} />
        ))}
      </Box>
    </PageLayout>
  );
}

export default Training;
