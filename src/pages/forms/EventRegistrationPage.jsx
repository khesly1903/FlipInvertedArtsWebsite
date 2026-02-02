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
  MenuItem,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";
import HalfPageLanding from "../../components/HalfPageLanding";
import landingImage from "../../assets/landing.webp"; // Using generic or specific event image
import SEO from "../../components/SEO";

export default function EventRegistrationPage() {
  const { t } = useTranslation();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [dobError, setDobError] = useState(false);
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
      const response = await fetch("http://localhost:3001/api/register-event", {
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
          message:
            "Registration sent successfully! We will contact you shortly.",
          severity: "success",
        });
        formRef.current.reset();
        setCaptchaToken(null);
      } else {
        throw new Error(result.error || "Failed to register");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSnackbar({
        open: true,
        message: "Failed to send registration. Please try again later.",
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

  const branches = [
    "Gezira Club October",
    "Gazira Club Zamalek",
    "Zamalek Studio",
    "Maadi",
    "Sheikh Zayed",
    "New Cairo",
    "Almaza Bay",
    "Diplo",
  ];

  return (
    <Box>
      <SEO
        title="Event Registration | Flip Inverted Arts"
        description="Register for upcoming events at Flip Inverted Arts. Camps, workshops, and more!"
      />
      <HalfPageLanding
        image="/landing_reg_events.jpeg"
        title={t("home.events").toUpperCase()}
      />

      <Container maxWidth="md" sx={{ py: 8 }}>
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
              {t("forms.titles.event-registration")}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t("forms.subtitles.event-text")}
            </Typography>
          </Box>

          <form ref={formRef} onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Typography
                variant="h6"
                sx={{ mt: 1, borderBottom: "1px solid #eee", pb: 1 }}
              >
                {t("forms.subtitles.parent-info")}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <TextField
                  name="parentName"
                  label={t("forms.labels.parent-name")}
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextField
                  name="parentPhone"
                  label={t("forms.labels.phone")}
                  variant="outlined"
                  fullWidth
                  required
                />
              </Box>

              <TextField
                name="parentEmail"
                label={t("forms.labels.email")}
                type="email"
                variant="outlined"
                fullWidth
                required
              />

              <Typography
                variant="h6"
                sx={{ mt: 1, borderBottom: "1px solid #eee", pb: 1 }}
              >
                {t("forms.subtitles.child-info")}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <TextField
                  name="childName"
                  label={t("forms.labels.child-name")}
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextField
                  name="childDOB"
                  label={t("forms.labels.dob")}
                  variant="outlined"
                  fullWidth
                  required
                  placeholder={t("forms.placeholders.dob")}
                  helperText={
                    dobError ? "Invalid Date (DD/MM/YYYY)" : "e.g. 25/12/2015"
                  }
                  error={dobError}
                  inputProps={{ inputMode: "numeric" }}
                  onBlur={(e) => {
                    const val = e.target.value;
                    if (!val) {
                      setDobError(false);
                      return;
                    }
                    const regex =
                      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/;
                    setDobError(!regex.test(val));
                  }}
                  onChange={(e) => {
                    setDobError(false);
                    let value = e.target.value.replace(/\D/g, "");
                    if (value.length > 2)
                      value = value.slice(0, 2) + "/" + value.slice(2);
                    if (value.length > 5)
                      value = value.slice(0, 5) + "/" + value.slice(5);
                    if (value.length > 10) value = value.slice(0, 10);
                    e.target.value = value;
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <TextField
                  name="favoriteColor1"
                  label={t("forms.labels.fav-color-1")}
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextField
                  name="favoriteColor2"
                  label={t("forms.labels.fav-color-2")}
                  variant="outlined"
                  fullWidth
                />
              </Box>

              <TextField
                name="flipBranch"
                label={t("forms.labels.preferred-branch")}
                variant="outlined"
                fullWidth
                required
                select
                defaultValue=""
              >
                {branches.map((branch) => (
                  <MenuItem key={branch} value={branch}>
                    {branch}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                name="guests"
                label={t("forms.labels.guests")}
                variant="outlined"
                fullWidth
                helperText={t("forms.placeholders.guests")}
              />

              <TextField
                name="message"
                label={t("forms.labels.additional-notes")}
                variant="outlined"
                fullWidth
                multiline
                rows={3}
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
                  : t("forms.buttons.register")}
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>

      {/* Snackbar is consistent */}
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
