import { Typography, Container, Grid, Box } from "@mui/material";
import LocationCard from "../components/LocationCard";
import landingImage from "../assets/landing.webp";
import PageLandings from "../components/PageLandings";
import AnimatedInformation from "../components/AnimatedInformation";

export default function SchedulesPage() {
  const locations = [
    {
      title: "Location 1",
      image: "./placeholder.png",
    },
    {
      title: "Location 2",
      image: "./placeholder.png",
    },
    {
      title: "Location 3",
      image: "./placeholder.png",
    },
    {
      title: "Location 4",
      image: "./placeholder.png",
    },
    {
      title: "Location 5",
      image: "./placeholder.png",
    },
    {
      title: "Location 6",
      image: "./placeholder.png",
    },
  ];
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
          {locations.map((location) => (
            <Grid item size={{ xs: 12, md: 6, lg: 4 }} key={location.title}>
              <LocationCard
                locationTitle={location.title}
                image={location.image}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
