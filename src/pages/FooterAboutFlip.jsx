import { Container, Typography, Box } from "@mui/material";
import AnimatedInformation from "../components/AnimatedInformation";

export default function FooterAboutFlip() {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" gutterBottom>
          About Flip Inverted Arts
        </Typography>
        <Typography variant="body1" paragraph>
          Flip Inverted Arts Academy is one of the first academies to bring
          recreational gymnastics for kids and adults to Egypt.
        </Typography>
        <AnimatedInformation
          title="Our Vision"
          text="To create a supportive environment where students of all ages can discover the joy of movement."
        />
      </Container>
    </Box>
  );
}
