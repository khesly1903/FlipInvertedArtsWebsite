import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  return (
    <Box>
      <HalfPageLanding
        image={landing}
        title1={t("footer-pages.safety.title")}
        title2={t("footer-pages.safety.subtitle").toUpperCase()}
      />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="body1" paragraph>
          {t("footer-pages.safety.text")}
        </Typography>
        
       
      </Container>
    </Box>
  );
}
