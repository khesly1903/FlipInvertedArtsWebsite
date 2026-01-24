import React, { useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Paper,
  Grid,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import HalfPageLanding from "../components/HalfPageLanding";
import MasonryGrid from "../components/Masonry";
import { schedules } from "../data/schedules";

import landing from "../assets/landing.webp";

export default function ScheduleDetailPage() {
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
        image={landing}
        title1="SCHEDULE:"
        title2={schedule.location.toUpperCase()}
      />

      <Container maxWidth="lg" sx={{ py: 6, mb:8 }}>
        {/* 2. Masonry Gallery */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", mb: 4 }}
          >
            Gallery
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {schedule.details.images.map((img, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  component="img"
                  src={img}
                  alt={`Gallery ${index}`}
                  sx={{
                    width: "100%",
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
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          {/* Map Section */}
          <Box sx={{ flex: 1, minHeight: "400px" }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              Find Us
            </Typography>
            <Paper
              elevation={3}
              sx={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                borderRadius: 2,
              }}
            >
              <Box
                component="iframe"
                src={schedule.details.mapLocation}
                width="100%"
                height="100%"
                sx={{ border: 0, minHeight: "400px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${schedule.location} Map`}
              />
            </Paper>
          </Box>

          {/* Contact Section */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 3 }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{ mb: 3, maxWidth: "80%" }}
            >
              Have questions about {schedule.location} classes? Reach out to us
              directly!
            </Typography>
            <IconButton
              component="a"
              href={schedule.details.contact}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                bgcolor: "#25D366",
                color: "white",
                width: 80,
                height: 80,
                "&:hover": { bgcolor: "#128C7E" },
              }}
            >
              <WhatsAppIcon sx={{ fontSize: 40 }} />
            </IconButton>
            <Typography
              variant="subtitle1"
              sx={{ mt: 2, fontWeight: "medium" }}
            >
              Chat on WhatsApp
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
