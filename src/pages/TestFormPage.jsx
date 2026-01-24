import { Box, Container } from "@mui/material";
import ContactForm from "../components/ContactForm";
import HalfPageLanding from "../components/HalfPageLanding";
import landingImage from "../assets/landing.webp";

export default function TestFormPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <HalfPageLanding
        image={landingImage}
        title1="Registration"
        title2="FORM"
      />
      <Container maxWidth="md">
        <Box sx={{ py: 8 }}>
          <ContactForm />
        </Box>
      </Container>
    </Box>
  );
}
