import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  TextField,
  Button,
  Box,
  Typography,
  Snackbar,
  Alert,
  CircularProgress,
  TextareaAutosize,
  MenuItem,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();
  const { state } = useLocation();
  const type = state?.type;
  const image = state?.image;
  const description = state?.description;

  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSnackbar({
        open: true,
        message: "Configuration Error: EmailJS keys are missing in .env file.",
        severity: "error",
      });
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setSnackbar({
            open: true,
            message: "Message sent successfully!",
            severity: "success",
          });
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setSnackbar({
            open: true,
            message: "Failed to send message. Please try again later.",
            severity: "error",
          });
        },
      )
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        p: 4,
      }}
    >
      {description && (
        <Box sx={{ mb: 3, width: "100%" }}>
          <Typography variant="body1">{t(description)}</Typography>
        </Box>
      )}
      {image && (
        <Box sx={{ mb: 3, width: "100%" }}>
          <img
            src={image}
            alt="Event"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              display: "block",
            }}
          />
        </Box>
      )}

      <form ref={form} onSubmit={sendEmail}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {type === "events" ? (
            <>
              <TextField
                name="child_name"
                label="Child's Full Name"
                variant="outlined"
                fullWidth
                required
              />

              <TextField
                name="child_birthday"
                label="Child's Birthday"
                variant="outlined"
                fullWidth
                required
                placeholder="DD/MM/YYYY"
                inputProps={{ maxLength: 10 }}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, ""); // Remove non-digits
                  if (value.length > 2)
                    value = value.slice(0, 2) + "/" + value.slice(2);
                  if (value.length > 5)
                    value = value.slice(0, 5) + "/" + value.slice(5);
                  e.target.value = value;
                }}
              />

              <TextField
                name="parent_name"
                label="Your Full Name"
                variant="outlined"
                fullWidth
                required
              />

              <TextField
                name="parent_phone"
                label="Your Phone Number"
                variant="outlined"
                fullWidth
                required
              />

              <TextField
                name="parent_email"
                label="Your Email"
                variant="outlined"
                fullWidth
                required
              />

              <TextField
                name="flip_branch"
                label="Flip Branch"
                variant="outlined"
                fullWidth
                required
                select
                defaultValue=""
              >
                <MenuItem value="Gezira Club October">
                  Gezira Club October
                </MenuItem>
                <MenuItem value="Gazira Club Zamalek">
                  Gazira Club Zamalek
                </MenuItem>
                <MenuItem value="Zamalek Studio">Zamalek Studio</MenuItem>
                <MenuItem value="Maadi">Maadi</MenuItem>
                <MenuItem value="Sheikh Zayed">Sheikh Zayed</MenuItem>
                <MenuItem value="New Cairo">New Cairo</MenuItem>
                <MenuItem value="Almaza Bay">Almaza Bay</MenuItem>
                <MenuItem value="Diplo">Diplo</MenuItem>
              </TextField>

              <TextField
                name="child_favorite_color"
                label="Child's Favorite Color"
                variant="outlined"
                fullWidth
                required
              />

              <TextField
                name="child_favorite_second_color"
                label="Child's Second Favorite Color"
                variant="outlined"
                fullWidth
              />

              <TextField
                name="guests"
                label="Names of the Guests"
                variant="outlined"
                fullWidth
                helperText="Please separate names with a comma"
              />
            </>
          ) : (
            <>
              <TextField
                name="parent_name"
                label="Your Full Name"
                variant="outlined"
                fullWidth
                required
              />

              <TextField
                name="child_name"
                label="Child's Full Name"
                variant="outlined"
                fullWidth
                required
              />

              <TextField
                name="child_birthday"
                label="Child's Birthday"
                variant="outlined"
                fullWidth
                required
                placeholder="DD/MM/YYYY"
                inputProps={{ maxLength: 10 }}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, ""); // Remove non-digits
                  if (value.length > 2)
                    value = value.slice(0, 2) + "/" + value.slice(2);
                  if (value.length > 5)
                    value = value.slice(0, 5) + "/" + value.slice(5);
                  e.target.value = value;
                }}
              />

              <TextField
                name="child_school"
                label="Child's School"
                variant="outlined"
                fullWidth
                required
              />

              <TextField
                name="parent_phone"
                label="Your Phone Number"
                variant="outlined"
                fullWidth
                required
              />

              <TextField
                name="parent_email"
                label="Your Email"
                variant="outlined"
                fullWidth
                required
              />

              <TextField
                name="emergancy_name"
                label="Secondary or Emergancy Contact Name"
                variant="outlined"
                fullWidth
                required
              />

              <TextField
                name="emergancy_phone"
                label="Secondary or Emergancy Contact Phone"
                variant="outlined"
                fullWidth
                required
              />

              <TextField
                name="message"
                label="If you have a message for us"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
            </>
          )}
          <Button
            type="submit"
            variant="outlined"
            size="large"
            disabled={loading}
            fullWidth
            endIcon={loading ? <CircularProgress size={20} /> : <SendIcon />}
            sx={{
              py: 1.5,
              fontWeight: "bold",
              color: "black",
              borderColor: "black",
              "&:hover": {
                borderColor: "black",
                backgroundColor: "rgba(0, 0, 0, 0.05)",
              },
            }}
          >
            {loading
              ? "Sending..."
              : type === "events"
                ? "Complete Registration"
                : "Send form"}
          </Button>
        </Box>
      </form>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
