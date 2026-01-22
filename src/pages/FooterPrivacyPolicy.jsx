import { Container, Typography, Box } from "@mui/material";
import HalfPageLanding from "../components/HalfPageLanding";
import landing from "../assets/landing.webp";

export default function FooterPrivacyPolicy() {
  return (
    <Box>
      <HalfPageLanding
        image={landing}
        title1="Your Info"
        title2="PRIVACY POLICY"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="body1">
          Your privacy is important to us. The info you submit to us is used to
          find you a session most fit for you. We never share or sell your info.
        </Typography>
      </Container>
    </Box>
  );
}
