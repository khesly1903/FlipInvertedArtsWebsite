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
import { useTranslation } from "react-i18next";
import HalfPageLanding from "../../components/HalfPageLanding";
import SimpleCaptcha from "../../components/SimpleCaptcha";

// import landing_contact_us from "../../assets/forms/landing_contact_us.webp";
// import afterFormLanding from "../../assets/forms/after_contact_form_landing.webp";

const R2_URL = import.meta.env.VITE_R2_URL;

export default function ContactFormPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isCaptchaValid) {
      setSnackbar({
        open: true,
        message: "Please solve the math problem correctly.",
        severity: "error",
      });
      return;
    }

    setLoading(true);
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3001";
      const response = await fetch(`${apiUrl}/api/contact`, {
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
            backgroundImage: `${R2_URL}/landing/after_contact_form_landing.webp`,
          },
        });
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
        image={`${R2_URL}/landing/landing_contact_us.webp`}
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

                <SimpleCaptcha onValidate={setIsCaptchaValid} />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={loading || !isCaptchaValid}
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
