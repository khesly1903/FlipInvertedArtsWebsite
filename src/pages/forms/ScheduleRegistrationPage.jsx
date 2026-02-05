import { useState, useRef, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
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
  Divider,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";
import HalfPageLanding from "../../components/HalfPageLanding";

import landing_schedule_registration from "../../assets/forms/landing_schedule_registration.webp";

export default function ScheduleRegistrationPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [locationName, setLocationName] = useState("");
  const [dobError, setDobError] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const { slug } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    // Try to get location name from state or format slug
    if (state?.locationName) {
      setLocationName(state.locationName);
    } else if (slug) {
      // Simple slug formatter (e.g. gezira-club-october -> Gezira Club October)
      const formatted = slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      setLocationName(formatted);
    }
  }, [slug, state]);

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

    // Add location manually
    data.locationName = locationName;
    data.captchaToken = captchaToken;

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3001";
      const response = await fetch(`${apiUrl}/api/register-schedule`, {
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
            title: t("forms.titles.schedule-success"),
            text: t("forms.subtitles.schedule-success"),
            backgroundImage: landing_schedule_registration,
          },
        });
        setCaptchaToken(null);
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

  return (
    <Box>
      <HalfPageLanding
        image={landing_schedule_registration}
        title={t("home.schedules").toUpperCase()}
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
              {t("forms.titles.schedule-registration")}
            </Typography>
            {locationName && (
              <Typography
                variant="h5"
                color="primary"
                sx={{ mb: 1, fontWeight: "medium" }}
              >
                @ {locationName}
              </Typography>
            )}
            <Typography variant="body1" color="text.secondary">
              {t("forms.subtitles.schedule-text")}
            </Typography>
          </Box>

          <form ref={formRef} onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {/* Parent Info */}
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

              {locationName.toLowerCase().includes("gezira") && (
                <TextField
                  name="geziraMembership"
                  label={t("forms.labels.gezira-membership")}
                  variant="outlined"
                  fullWidth
                  required
                />
              )}

              <TextField
                name="parentEmail"
                label={t("forms.labels.email")}
                type="email"
                variant="outlined"
                fullWidth
                required
              />

              {/* Child Info */}
              <Typography
                variant="h6"
                sx={{ mt: 2, borderBottom: "1px solid #eee", pb: 1 }}
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

              <TextField
                name="childSchool"
                label={t("forms.labels.school")}
                variant="outlined"
                fullWidth
                required
              />

              {/* Emergency Contact */}
              <Typography
                variant="h6"
                sx={{ mt: 2, borderBottom: "1px solid #eee", pb: 1 }}
              >
                {t("forms.subtitles.emergency-contact")}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <TextField
                  name="emergencyName"
                  label={t("forms.labels.emergency-name")}
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextField
                  name="emergencyPhone"
                  label={t("forms.labels.emergency-phone")}
                  variant="outlined"
                  fullWidth
                  required
                />
              </Box>

              {/* Additional */}
              <TextField
                name="message"
                label={t("forms.labels.additional-notes")}
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                sx={{ mt: 2 }}
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
