import { useTranslation } from "react-i18next";
import { Container, Typography, Box } from "@mui/material";
import HalfPageLanding from "../components/HalfPageLanding";

// import landing_privacy from "../assets/footer/landing_privacy.webp";

const R2_URL = import.meta.env.VITE_R2_URL;

export default function FooterPrivacyPolicy() {
  const { t } = useTranslation();
  return (
    <Box>
      <HalfPageLanding
        image={`${R2_URL}/landing/landing_privacy.webp`}
        logo="/logos/flip_logo_half_landing_white_privacy.svg"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="body1">
          {t("footer-pages.privacy-policy.text")}
        </Typography>
      </Container>
    </Box>
  );
}
