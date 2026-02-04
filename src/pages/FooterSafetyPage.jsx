import { useTranslation } from "react-i18next";
import {
  Container,
  Typography,
  Box,
} from "@mui/material";
import HalfPageLanding from "../components/HalfPageLanding";
import landing_safety from "../assets/footer/landing_safety.jpeg";

export default function FooterSafetyPage() {
  const { t } = useTranslation();
  return (
    <Box>
      <HalfPageLanding
        image={landing_safety}
        logo="/logos/flip_logo_half_landing_white_safety.svg"
      />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="body1" paragraph>
          {t("footer-pages.safety.text")}
        </Typography>
        
       
      </Container>
    </Box>
  );
}
