import { Typography, Container, Box, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import SplitText from "../components/SplitText";
import landingImage from "../assets/landing.webp";

import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import EventIcon from "@mui/icons-material/Event";
import StorefrontIcon from "@mui/icons-material/Storefront";

export default function HomePage() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          backgroundImage: `url(${landingImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fetchpriority: "high",
          position: "relative",
        }}
      >
        <Box
          sx={{
            color: "white",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
            fontSize: { xs: "2rem", md: "3.75rem" },
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <SplitText
            text="FLIP INVERTED ARTS"
            className=""
            delay={50}
            duration={3}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            tag="h3"
          />
        </Box>

        {/* Navigation Links inside Hero */}
        <Container
          maxWidth="lg"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 2,
            pb: 5,
          }}
        >
          <Grid
            container
            spacing={4}
            justifyContent="space-around"
            sx={{ width: "100%", m: 0 }}
          >
            {[
              {
                label: "Classes",
                path: "/classes",
                icon: <SchoolIcon sx={{ fontSize: 60 }} />,
              },
              {
                label: "Events",
                path: "/events",
                icon: <EventIcon sx={{ fontSize: 60 }} />,
              },
              {
                label: "Locations",
                path: "/locations",
                icon: <LocationOnIcon sx={{ fontSize: 60 }} />,
              },
              {
                label: "Shop",
                path: "/shop",
                icon: <StorefrontIcon sx={{ fontSize: 60 }} />,
              },
              {
                label: "Contact",
                path: "/",
                icon: <AddIcCallIcon sx={{ fontSize: 60 }} />,
              },
            ].map((item) => (
              <Grid
                item
                // responsive grid problem
                xs={4}
                md={2}
                key={item.label}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    textDecoration: "none",
                    width: "100%",
                    transition: "transform 0.3s, background-color 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  {item.icon}
                  <Typography variant="h6" sx={{ mt: 1 }}>
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom textAlign={"center"}>
          Our Mission
        </Typography>
        <Typography variant="body1" gutterBottom textAlign={"center"}>
          Our Mission (instead of Hospitality & Residence): Flip Inverted Arts
          Academy is one of the first academies to bring recreational gymnastics
          for kids and adults to Egypt. Flip’s founder, Julia Alexan, is
          certified by USA Gymnastics and brings in many new concepts on how to
          teach and train gymnastics, different from what is typically found in
          Egypt. At Flip, we believe that you can instill athletics in kids at a
          young age through gymnastics by building their progress in a fun and
          friendly way that leaves them loving the sport, and it will leave a
          long-lasting positive effect on their lifelong concept of gymnastics,
          fitness and sports in general.
        </Typography>
      </Container>
    </Box>
  );
}
