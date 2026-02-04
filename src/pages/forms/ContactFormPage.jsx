import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
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
import SEO from "../../components/SEO";
import landing_contact_us from "../../assets/forms/landing_contact_us.jpeg";

export default function ContactFormPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
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
        // Redirect to success page
        navigate("/success", {
          state: {
            title: t("forms.titles.contact-success"),
            text: t("forms.subtitles.contact-success"),
            backgroundImage: "/landing_contact_us.jpeg",
          },
        });
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
      <SEO
        title="Contact Us | Flip Inverted Arts"
        description="Get in touch with us for inquiries about our gymnastics, dance, and art classes."
      />
      <HalfPageLanding
        image={landing_contact_us}
        title={t("navbar.contact-us").toUpperCase()}
      />

      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Container maxWidth="sm">
          <Paper
            elevation={3}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 4,
            }}
          >
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
                  name="phone"
                  label={t("forms.labels.phone")}
                  type="tel"
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
                  {loading
                    ? t("forms.buttons.sending")
                    : t("forms.buttons.send")}
                </Button>
              </Box>
            </form>
          </Paper>
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
