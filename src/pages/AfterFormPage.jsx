import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Button, Container } from "@mui/material";
import { useTranslation } from "react-i18next";




export default function AfterFormPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (!state) {
      navigate("/", { replace: true });
    }
  }, [state, navigate]);

  if (!state) return null;

  // data passed from previous page
  const title = state?.title || "Success";
  const text = state?.text || "Your submission was successful.";
  const backgroundImage = state?.backgroundImage || landingImage;

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for readability
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          fontWeight="bold"
          sx={{
            fontSize: { xs: "2.5rem", md: "4rem" },
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="h5"
          component="p"
          sx={{
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            maxWidth: "800px",
            textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
          }}
        >
          {text}
        </Typography>

        <Button
          variant="contained"
          size="large"
          color="primary"
          onClick={() => navigate("/")}
          sx={{
            mt: 4,
            px: 4,
            py: 1.5,
            fontSize: "1.2rem",
            borderRadius: "50px",
            fontWeight: "bold",
            boxShadow: "0 4px 14px 0 rgba(0,0,0,0.39)",
          }}
        >
          {t("buttons.back-home", "Back to Home")}
        </Button>
      </Container>
    </Box>
  );
}
