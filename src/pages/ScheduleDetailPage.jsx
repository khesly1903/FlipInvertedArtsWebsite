import React, { useMemo } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Paper,
  Grid,
  Button,
  Divider,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import HalfPageLanding from "../components/HalfPageLanding";
import MasonryGrid from "../components/Masonry";
import { schedules } from "../data/schedules";
import { useTranslation } from "react-i18next";
import AnimatedInformation from "../components/AnimatedInformation";

export default function ScheduleDetailPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { slug } = useParams();

  const schedule = useMemo(() => {
    return schedules.find((s) => s.path === slug);
  }, [slug]);

  if (!schedule) {
    return <Navigate to="/schedules" replace />;
  }

  return (
    <Box>
      {/* 1. Header with Location Name */}
      <HalfPageLanding
        image={schedule.details.landingImage}
        title={t(schedule.location).toUpperCase()}
      />

      <Container maxWidth="lg" sx={{ py: 6, mb: 8 }}>
        {/* 2. Masonry Gallery */}
        <Box sx={{ mb: 8 }}>
          <AnimatedInformation
            title={t(schedule.location)}
            text={t(schedule.details.description)}
          />
          <Grid container spacing={2} justifyContent="center">
            {schedule.details.images.map((img, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  component="img"
                  src={img}
                  alt={`Gallery ${index}`}
                  sx={{
                    width: "100%",
                    maxWidth: "30rem",
                    aspectRatio: "1/1",
                    objectFit: "cover",
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* 3. Map & Contact Section */}
        <Grid container spacing={4} justifyContent="center">
          {/* Map Section */}
          <Grid item size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={3}
              sx={{
                width: "100%",
                aspectRatio: "1/1",
                overflow: "hidden",
                borderRadius: 6,
              }}
            >
              <Box
                component="iframe"
                src={schedule.details.mapLocation}
                width="100%"
                height="100%"
                sx={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${schedule.location} Map`}
              />
            </Paper>
          </Grid>

          {/* Register and Contact Section */}
          <Grid item size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                width: "100%",
                aspectRatio: "1/1",
                borderRadius: 6,
                background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: "1.5rem", md: "2rem" },
                    lineHeight: 1.2,
                    letterSpacing: -0.5,
                  }}
                >
                  {t("schedules.common.interested")}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  onClick={() =>
                    navigate("/register-schedule/" + slug, {
                      state: {
                        locationName: t(schedule.location),
                      },
                    })
                  }
                  rel="noopener noreferrer"
                  sx={{
                    px: { xs: 4, md: 4 },
                    py: { xs: 1.5, md: 1.5 },
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    borderRadius: "50px",
                    textTransform: "none",
                    fontWeight: 800,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                      background: "primary.dark",
                    },
                    transition:
                      "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  }}
                >
                  {t("schedules.common.register-now")}
                </Button>
                <Divider sx={{ width: "100%", my: 2 }} />

                <Box sx={{ textAlign: "center", mt: 1 }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "bold", mb: 2 }}
                  >
                    {t("schedules.common.contact-us")}
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 3, px: 2 }}
                  >
                    {t("schedules.common.contact-us-text")}
                  </Typography>

                  <IconButton
                    component="a"
                    href={`${schedule.details.contact}?text=I'm interested in ${t(schedule.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      bgcolor: "#25D366",
                      color: "white",
                      width: 64,
                      height: 64,
                      boxShadow: "0 4px 10px rgba(37, 211, 102, 0.3)",
                      "&:hover": {
                        bgcolor: "#128C7E",
                        transform: "scale(1.05)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <WhatsAppIcon sx={{ fontSize: 32 }} />
                  </IconButton>
                  <Typography
                    variant="caption"
                    display="block"
                    sx={{
                      mt: 1,
                      fontWeight: "medium",
                      color: "text.secondary",
                    }}
                  >
                    {t("schedules.common.chat-on-whatsapp")}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
