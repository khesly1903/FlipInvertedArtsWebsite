import { useTranslation } from "react-i18next";
import { Container, Typography, Box } from "@mui/material";
import HalfPageLanding from "../components/HalfPageLanding";

import landing_about_flip from "../assets/footer/landing_about_flip.jpeg";

export default function FooterAboutFlip() {
  const { t } = useTranslation();
  return (
    <Box>
      <HalfPageLanding
        image={landing_about_flip}
        logo="/logos/flip_logo_half_landing_white_about.svg"
      />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="body1">
          {t("footer-pages.about-flip.text")}
        </Typography>
      </Container>
    </Box>
  );
}
