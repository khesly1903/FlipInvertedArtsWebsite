import React, { useRef, useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Snackbar,
  Alert,
  CircularProgress,
  TextareaAutosize,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";

export default function ContactForm() {
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
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ textAlign: "center", mb: 3, fontWeight: "bold" }}
      >
        Send us a message
      </Typography>

      <form ref={form} onSubmit={sendEmail}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
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
            name="membership_number"
            label="Gezira Membership #"
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
            {loading ? "Sending..." : "Send form"}
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
