import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import HalfPageLanding from "../components/HalfPageLanding";
import AnimatedInformation from "../components/AnimatedInformation";
import MasonryGrid from "../components/Masonry";
import { events } from "../data/events";
import landingImage from "../assets/landing.webp";
import AnimatedTitle from "../components/AnimatedTitle";

const EventsPage = () => {
  const availableEvents = events.filter((e) => e.availability === "available");
  const upcomingEvents = events.filter((e) => e.availability === "upcoming");
  const unavailableEvents = events.filter(
    (e) => e.availability === "unavailable",
  );

  return (
    <Box>
      <HalfPageLanding image={landingImage} title1="FLIP" title2="EVENTS" />

      <AnimatedInformation
        title="Events"
        text="Join us for our upcoming workshops, performances, and special events. Whether you are looking to learn a new skill or enjoy a show, we have something for everyone."
      />

      <Divider />
      <AnimatedTitle title="Current Events" />
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
            <AnimatedTitle title="What is coming" />
            <MasonryGrid images={upcomingEvents.map((e) => e.image)} />
          </Box>
        )}

        <Divider />
        {/* Unavailable Events */}
        {unavailableEvents.length > 0 && (
          <Box sx={{ mb: 8 }}>
            <AnimatedTitle title="What did you miss" />
            <MasonryGrid images={unavailableEvents.map((e) => e.image)} />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default EventsPage;
