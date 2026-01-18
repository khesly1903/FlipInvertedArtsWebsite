import { Typography, Container } from "@mui/material";

export default function EventsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Events Page
      </Typography>
      <Typography variant="body1">This is the events page content.</Typography>
    </Container>
  );
}
