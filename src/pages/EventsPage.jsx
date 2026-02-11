import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Divider,
  Grid,
  Button,
  Paper,
} from "@mui/material";
import HalfPageLanding from "../components/HalfPageLanding";
import AnimatedInformation from "../components/AnimatedInformation";
import MasonryGrid from "../components/Masonry";
import { events } from "../data/events";
import landingImage from "../assets/landing.webp";
import AnimatedTitle from "../components/AnimatedTitle";
import eventSummerVideo from "../assets/events/event_summer.mp4";
import eventSpringVideo from "../assets/events/event_spring.mp4";
import eventWinterVideo from "../assets/events/winter_coming_soon.webp";
import eventLanding from "../assets/events/events_landing.webp";

import { useTranslation } from "react-i18next";

const EventsPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { state } = useLocation();
  const availableEvents = events.filter((e) => e.availability === "available");
  const upcomingEvents = events.filter((e) => e.availability === "upcoming");
  const unavailableEvents = events.filter(
    (e) => e.availability === "unavailable",
  );

  useEffect(() => {
    if (state && state.targetId) {
      const element = document.getElementById(state.targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [state]);

  return (
    <Box>
      <HalfPageLanding
        image={eventLanding}
        logo="/logos/flip_logo_half_landing_white_events.svg"
      />

      <AnimatedInformation
        title={t("events.events-title")}
        text={t("events.events-text")}
      />

      <Divider />
      <Box id="current-events" sx={{ scrollMarginTop: "50px" }}>
        <AnimatedTitle title={t("events.current-event")} />
      </Box>
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        {/* Available Events */}
        {availableEvents.length > 0 && (
          <Box sx={{ mb: 8 }}>
            <MasonryGrid
              images={availableEvents.map((e) => e.image)}
              onImageClick={() => navigate("/register-event")}
            />
          </Box>
        )}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            mt: 4,
            mb: 10,
            mx: "auto",
            maxWidth: "500px",
            borderRadius: 6,
            background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 3,
            border: "1px solid rgba(0,0,0,0.08)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          }}
        >
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                textTransform: "uppercase",
                letterSpacing: 3,
                fontWeight: 700,
                fontSize: "0.85rem",
                mb: 1,
                fontStyle: "italic",
              }}
            >
              Before March 7th
            </Typography>
            <Typography
              variant="h2"
              component="div"
              sx={{
                fontWeight: 900,
                color: "primary.main",
                fontSize: { xs: "3rem", md: "4rem" },
                lineHeight: 1,
                letterSpacing: -2,
              }}
            >
              {availableEvents[0].price}
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/register-event")}
              sx={{
                px: { xs: 4, md: 6 },
                py: { xs: 1.5, md: 2 },
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                borderRadius: "50px",
                textTransform: "none",
                fontWeight: 800,
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                  background: "primary.dark",
                },
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              }}
            >
              Register Now
            </Button>
          </Box>
        </Paper>

        <Divider />
        <AnimatedTitle title={t("events.annual-event")} fontSize="1.9rem" />
        <Container maxWidth="lg" sx={{ my: 10 }}>
          {/* spring summer winter  */}
          {/* Spring Section: Video Left / Text Right */}
          <Box sx={{ mb: 4 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: 4,
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  width: "100%",
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 3,
                }}
              >
                <video
                  src={eventSpringVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <AnimatedTitle
                  title={t("events.annual.spring.title")}
                  fontSize="1.9rem"
                />
                <Typography
                  variant="body1"
                  sx={{ mt: 2, fontSize: "1.1rem", color: "text.secondary" }}
                >
                  {t("events.annual.spring.description")}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Summer Section: Text Left / Video Right */}
          <Box sx={{ mb: 10 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column-reverse", md: "row" },
                alignItems: "center",
                gap: 4,
              }}
            >
              <Box sx={{ flex: 1 }}>
                <AnimatedTitle
                  title={t("events.annual.summer.title")}
                  fontSize="1.9rem"
                />
                <Typography
                  variant="body1"
                  sx={{ mt: 2, fontSize: "1.1rem", color: "text.secondary" }}
                >
                  {t("events.annual.summer.description")}
                </Typography>
              </Box>
              <Box
                sx={{
                  flex: 1,
                  width: "100%",
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 3,
                }}
              >
                <video
                  src={eventSummerVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
            </Box>
          </Box>

          {/* Winter Section: Video Left / Text Right */}
          <Box sx={{ mb: 10 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: 4,
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  width: "100%",
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 3,
                }}
              >
                {/* <video
                  src={eventSummerVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                /> */}
                <img
                  src={eventWinterVideo}
                  style={{
                    width: "100%",
                    height: "20rem",
                    objectFit: "cover",
                    display: "block",
                  }}
                  alt="Winter"
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <AnimatedTitle
                  title={t("events.annual.winter.title")}
                  fontSize="1.9rem"
                />
                <Typography
                  variant="body1"
                  sx={{ mt: 2, fontSize: "1.1rem", color: "text.secondary" }}
                >
                  {t("events.annual.winter.description")}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>

        <Divider />
        {/* Unavailable Events */}
        {unavailableEvents.length > 0 && (
          <Box sx={{ mb: 8 }}>
            <Box id="past-events" sx={{ scrollMarginTop: "50px" }}>
              <AnimatedTitle title={t("events.past-event")} />
            </Box>
            <MasonryGrid images={unavailableEvents.map((e) => e.image)} />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default EventsPage;
