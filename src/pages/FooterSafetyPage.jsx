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
import HalfPageLanding from "../components/HalfPageLanding";
import landing from "../assets/landing.webp";

export default function FooterSafetyPage() {
  return (
    <Box>
      <HalfPageLanding
        image={landing}
        title1="Take Precautions"
        title2="SAFETY FIRST!"
      />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="body1" paragraph>
          Whether attending online or in-person, your safety comes first! If
          online, clear away anything hard (like chairs or furniture with sharp
          corners), or anything breakable.
        </Typography>
        <Typography
          variant="h4"
          component="h3"
          textAlign="center"
          gutterBottom
          sx={{ mt: 4, mb: 2 }}
        >
          How to Setup a Safe Space for Online Gymnastics
        </Typography>
        <Typography variant="body1" paragraph>
          Please prepare a mat over a carpet or grass for your child. If you
          don't have a mat or an old matress, you can make one by using laying
          out 3 couch cushions in a row and wrapping them together tightly with
          a fitted bed sheet. Perferrably you'd still have a yoga mat or carpet
          underneath. Please don't leave your kids unattended during class! We
          sometimes do exercises that they'll need your help with.
        </Typography>
      </Container>
    </Box>
  );
}
