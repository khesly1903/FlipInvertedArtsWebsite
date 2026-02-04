import { Typography, Container, Grid, Box } from "@mui/material";
import LocationCard from "../components/LocationCard";
import landingImage from "../assets/landing.webp";
import HalfPageLanding from "../components/HalfPageLanding";
import AnimatedInformation from "../components/AnimatedInformation";
import { schedules } from "../data/schedules";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";

import schedules_landing from "../assets/schedules/schedules_landing.webp";

export default function SchedulesPage() {
  const { t } = useTranslation();
  return (
    <Box>
      <SEO
        title="Schedules | Flip Inverted Arts"
        description="Check our class schedules and locations across Cairo. Find a gym near you!"
      />
      {/* Locations Banner */}
      <HalfPageLanding
        image={schedules_landing}
        logo="/logos/flip_logo_half_landing_white_schedule.svg"
      />

      <AnimatedInformation
        title={t("schedules.schedules-title")}
        text={t("schedules.schedules-text")}
      />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          {schedules.map((schedule) => (
            <Grid
              item
              size={{ xs: 12, md: 6, lg: 4 }}
              key={schedule.id}
              component={Link}
              to={`/schedules/${schedule.path}`}
              sx={{ textDecoration: "none" }}
            >
              <LocationCard
                locationTitle={t(schedule.location)}
                image={schedule.image}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
