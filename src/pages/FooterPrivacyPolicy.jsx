import { Container, Typography, Box } from "@mui/material";

export default function FooterPrivacyPolicy() {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph>
          At Flip Inverted Arts, we take your privacy seriously. This policy
          outlines how we collect, use, and protect your personal information.
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
          Information Collection
        </Typography>
        <Typography variant="body1" paragraph>
          We collect information you provide directly to us when you register
          for classes or contact us.
        </Typography>
      </Container>
    </Box>
  );
}
