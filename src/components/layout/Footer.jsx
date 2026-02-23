import {
  Box,
  Container,
  Divider,
  Typography,
  IconButton,
  Button,
  Stack,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { YouTube as YouTubeIcon } from "@mui/icons-material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: "auto",
        backgroundColor: "secondary.main",
        color: "secondary.contrastText",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center">
          <Box
            component="img"
            src="/flip_logo.svg"
            alt="Flip Logo"
            onClick={() => navigate("/")}
            sx={{
              height: 60,
              width: "auto",
              mb: 1,
              cursor: "pointer",
            }}
          />

          <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            <Button
              color="inherit"
              component={RouterLink}
              to="/classes"
              sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
            >
              {t("footer.classes")}
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/events"
              sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
            >
              {t("footer.events")}
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/schedules"
              sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
            >
              {t("footer.schedules")}
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/shop"
              sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
            >
              {t("footer.shop")}
            </Button>
          </Stack>

          <Stack
            direction="row"
            spacing={2}
            sx={{ mb: 2, flexWrap: "wrap", justifyContent: "center" }}
          >
            <Button color="inherit" component={RouterLink} to="/about-flip">
              {t("footer.about-flip")}
            </Button>
            <Button color="inherit" component={RouterLink} to="/faq">
              {t("footer.faq")}
            </Button>
            <Button color="inherit" component={RouterLink} to="/privacy-policy">
              {t("footer.privacy-policy")}
            </Button>
            <Button color="inherit" component={RouterLink} to="/safety">
              {t("footer.safety")}
            </Button>
          </Stack>

          <Button
            variant="text"
            color="inherit"
            onClick={() => navigate("/contact")}
          >
            {t("footer.contact-us")}
          </Button>
          <Typography variant="body2" align="center" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} Flip Inverted Arts. All rights
            reserved.
          </Typography>

          <Divider
            sx={{ width: "100%", borderColor: "rgba(255, 255, 255, 0.68)" }}
          />

          <Stack direction="row" spacing={2} alignItems="center">
            <IconButton
              color="inherit"
              href="https://www.instagram.com/flipinvertedarts/"
              target="_blank"
              aria-label="Instagram"
            >
              <InstagramIcon sx={{ fontSize: 40 }} />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.facebook.com/flipinvertedarts"
              target="_blank"
              aria-label="Facebook"
            >
              <FacebookIcon sx={{ fontSize: 40 }} />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.youtube.com/channel/UCT1limIsrVsUT-8QmCx_nuQ"
              target="_blank"
              aria-label="Youtube"
            >
              <YouTubeIcon sx={{ fontSize: 40 }} />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
