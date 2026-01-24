import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Container, Divider } from "@mui/material";
import HalfPageLanding from "../components/HalfPageLanding";
import AnimatedInformation from "../components/AnimatedInformation";
import MasonryGrid from "../components/Masonry";
import { events } from "../data/events";
import landingImage from "../assets/landing.webp";
import AnimatedTitle from "../components/AnimatedTitle";

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
        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <Box sx={{ mb: 8 }}>
            <Box id="upcoming-events" sx={{ scrollMarginTop: "50px" }}>
              <AnimatedTitle title="What is coming" />
            </Box>
            <MasonryGrid images={upcomingEvents.map((e) => e.image)} />
          </Box>
        )}

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
