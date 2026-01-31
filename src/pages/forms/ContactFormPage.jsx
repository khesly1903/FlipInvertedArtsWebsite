import { useState, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
  Paper,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";
import HalfPageLanding from "../../components/HalfPageLanding";
import landingImage from "../../assets/landing.webp"; // Using generic landing for now

export default function ContactFormPage() {
  const { t } = useTranslation();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      setSnackbar({
        open: true,
        message: "Please complete the reCAPTCHA verification.",
        severity: "error",
      });
      return;
    }

    setLoading(true);
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());
    data.captchaToken = captchaToken;

    try {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSnackbar({
          open: true,
          message: "Message sent successfully!",
          severity: "success",
        });
        formRef.current.reset();
        setCaptchaToken(null);
      } else {
        throw new Error(result.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSnackbar({
        open: true,
        message: "Failed to send message. Please try again later.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box>
      <HalfPageLanding
        image={landingImage}
        title={t("navbar.contact-us").toUpperCase()}
      />

      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Container maxWidth="sm">
          <Box sx={{ mb: 4, textAlign: "center" }}>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              fontWeight="bold"
            >
              {t("forms.titles.contact")}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t("forms.subtitles.contact-text")}
            </Typography>
          </Box>

          <form ref={formRef} onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <TextField
                name="name"
                label={t("forms.labels.full-name")}
                variant="outlined"
                fullWidth
                required
              />

              <TextField
                name="email"
                label={t("forms.labels.email")}
                type="email"
                variant="outlined"
                fullWidth
                required
              />

              <TextField
                name="message"
                label={t("forms.labels.message")}
                variant="outlined"
                fullWidth
                multiline
                rows={6}
                required
              />

              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <ReCAPTCHA
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={(token) => setCaptchaToken(token)}
                />
              </Box>

              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={loading}
                endIcon={
                  loading ? (
                    <CircularProgress size={20} color="inherit" />
                  ) : (
                    <SendIcon />
                  )
                }
                sx={{
                  py: 1.5,
                  mt: 2,
                  fontWeight: "bold",
                  borderRadius: 50,
                  fontSize: "1.1rem",
                }}
              >
                {loading ? t("forms.buttons.sending") : t("forms.buttons.send")}
              </Button>
            </Box>
          </form>
        </Container>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
