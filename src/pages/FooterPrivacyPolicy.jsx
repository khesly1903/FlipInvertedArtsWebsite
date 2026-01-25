import { useTranslation } from "react-i18next";
import { Container, Typography, Box } from "@mui/material";
import HalfPageLanding from "../components/HalfPageLanding";
import landing from "../assets/landing.webp";

export default function FooterPrivacyPolicy() {
  const { t } = useTranslation();
  return (
    <Box>
      <HalfPageLanding
        image={landing}
        title1={t("footer-pages.privacy-policy.title")}
        title2={t("footer-pages.privacy-policy.subtitle").toUpperCase()}
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="body1">
          {t("footer-pages.privacy-policy.text")}
        </Typography>
      </Container>
    </Box>
  );
}
