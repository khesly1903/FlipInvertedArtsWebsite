import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FooterFAQ() {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" gutterBottom>
          Frequently Asked Questions
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">
                What age groups do you teach?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We have classes for both kids (starting from age 3) and adults
                of all skill levels.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Do I need prior experience?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                No! We have classes tailored for beginners.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </Box>
  );
}
