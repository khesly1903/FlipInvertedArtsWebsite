import { Container, Typography, Box } from "@mui/material";
import HalfPageLanding from "../components/HalfPageLanding";
import landing from "../assets/landing.webp";
export default function FooterAboutFlip() {
  return (
    <Box>
      <HalfPageLanding
        image={landing}
        title1="A bit of Flippin' History"
        title2="ABOUT FLIP"
      />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="body1">
          Flip Instructors are talented in motivating both kids and adults to
          challenge them to beat their next personal best record. Our
          instructors are reliable, friendly and experienced and we provide a
          safe environment in which you can grow, perform at your best, and feel
          accomplished without the stress of competition. We look forward to new
          challenges with new clients and we're looking forward to seeing YOU
          join us soon! Thanks in advance for choosing us to play an important
          role in you and/or your child's development!
        </Typography>
      </Container>
    </Box>
  );
}
