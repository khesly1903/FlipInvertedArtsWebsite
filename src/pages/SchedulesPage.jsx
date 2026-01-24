import { Typography, Container, Grid, Box } from "@mui/material";
import LocationCard from "../components/LocationCard";
import landingImage from "../assets/landing.webp";
import PageLandings from "../components/PageLandings";
import AnimatedInformation from "../components/AnimatedInformation";
import { schedules } from "../data/schedules";
import { Link } from "react-router-dom";

export default function SchedulesPage() {
  return (
    <Box>
      {/* Locations Banner */}
      <PageLandings image={landingImage} logo="/flip_logo.svg" />
      <AnimatedInformation
        title="Schdules by Location"
        text="You can choose the option that best suits you from the locations below. Not every location may have every activity (maybe a some warning like that)."
      />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
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
                locationTitle={schedule.location}
                image={schedule.image}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
