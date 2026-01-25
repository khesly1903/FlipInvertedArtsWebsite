import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Container, Divider } from "@mui/material";
import HalfPageLanding from "../components/HalfPageLanding";
import AnimatedInformation from "../components/AnimatedInformation";
import MasonryGrid from "../components/Masonry";
import { events } from "../data/events";
import landingImage from "../assets/landing.webp";
import AnimatedTitle from "../components/AnimatedTitle";
import eventSummerVideo from "../assets/events/event_summer.mp4";

const EventsPage = () => {
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
      <HalfPageLanding image={landingImage} logo="/flip_logo.svg" />

      <AnimatedInformation
        title="Events"
        text="Join us for our upcoming workshops, performances, and special events. Whether you are looking to learn a new skill or enjoy a show, we have something for everyone."
      />

      <Divider />
      <Box id="current-events" sx={{ scrollMarginTop: "50px" }}>
        <AnimatedTitle title="Current Events" />
      </Box>
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        {/* Available Events */}
        {availableEvents.length > 0 && (
          <Box sx={{ mb: 8 }}>
            <MasonryGrid images={availableEvents.map((e) => e.image)} />
          </Box>
        )}

        <Divider />
        <AnimatedTitle title="Our Annual Events" fontSize="3rem"/>
        <Container maxWidth="lg" sx={{ my: 10 }}>
          {/* Section 1: Video Left / Text Right */}
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
              <Box sx={{ flex: 1 }}>
                <AnimatedTitle title="Summer Show" fontSize="2rem" />
                <Typography
                  variant="body1"
                  sx={{ mt: 2, fontSize: "1.1rem", color: "text.secondary" }}
                >
                  Dive into the energy of our summer events. Experience the
                  thrill, the community, and the unforgettable moments that make
                  our summer sessions unique. Join us for a season of growth and
                  fun.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Section 2: Text Left / Video Right */}
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
                <AnimatedTitle title="Winter Meet Games" />
                <Typography
                  variant="body1"
                  sx={{ mt: 2, fontSize: "1.1rem", color: "text.secondary" }}
                >
                  Whether you are a beginner or looking to refine your advanced
                  techniques, our workshops are designed to push your limits.
                  Watch as our students demonstrate focus, strength, and agility
                  in every move.
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

          {/* Section 3: Video Left / Text Right */}
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
              <Box sx={{ flex: 1 }}>
                <AnimatedTitle title="Spring Shows" />
                <Typography
                  variant="body1"
                  sx={{ mt: 2, fontSize: "1.1rem", color: "text.secondary" }}
                >
                  It's not just about the training; it's about the people. Our
                  events bring together a diverse community of enthusiasts.
                  Share laughs, challenges, and successes with friends old and
                  new at our next gathering.
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
              <AnimatedTitle title="What did you miss" />
            </Box>
            <MasonryGrid images={unavailableEvents.map((e) => e.image)} />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default EventsPage;
