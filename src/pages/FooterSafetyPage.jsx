import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function FooterSafetyPage() {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" gutterBottom>
          Safety Guidelines
        </Typography>
        <Typography variant="body1" paragraph>
          Your safety is our top priority. We adhere to strict safety protocols
          to ensure a safe environment for all gymnasts.
        </Typography>

        <List sx={{ mt: 2 }}>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Certified instructors present at all times" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Equipment regularly inspected and maintained" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Proper warm-up and cool-down routines" />
          </ListItem>
        </List>
      </Container>
    </Box>
  );
}
