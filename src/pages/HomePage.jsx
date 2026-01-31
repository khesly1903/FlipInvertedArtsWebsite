import { Typography, Container, Box, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import SplitText from "../components/SplitText";
import landingImage from "../assets/landing.webp";
import { useTranslation } from "react-i18next";

import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import EventIcon from "@mui/icons-material/Event";
import StorefrontIcon from "@mui/icons-material/Storefront";

import ReviewCard from "../components/ReviewCard";
import HomePageCard from "../components/HomePageCard";
import { reviews } from "../data/review";
import AnimatedInformation from "../components/AnimatedInformation";
import ImageCarousel from "../components/ImageCarousel";
import SEO from "../components/SEO";

export default function HomePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Box>
      <SEO
        title="Flip Inverted Arts | Gymnastics & Arts in Cairo"
        description="Join Flip Inverted Arts for top-tier gymnastics, dance, and arts classes in Cairo. Schedule your class today!"
      />
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
          <motion.img
            src="/flip_logo.svg"
            alt="Logo"
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 360, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              width: "500px",
              height: "auto",
              filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))",
            }}
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
                label: t("home.classes"),
                path: "/classes",
                icon: <SchoolIcon sx={{ fontSize: 60 }} />,
              },
              {
                label: t("home.events"),
                path: "/events",
                icon: <EventIcon sx={{ fontSize: 60 }} />,
              },
              {
                label: t("home.schedules"),
                path: "/schedules",
                icon: <LocationOnIcon sx={{ fontSize: 60 }} />,
              },
              {
                label: t("home.shop"),
                path: "/shop",
                icon: <StorefrontIcon sx={{ fontSize: 60 }} />,
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
                  <Typography variant="h6" fontWeight={600} sx={{ mt: 1 }}>
                    {item.label.toUpperCase()}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Main Content */}

      <AnimatedInformation
        title={t("home.home-title")}
        text={t("home.home-text")}
      />

      <ImageCarousel
        images={[
          "/location_maadi.jpeg",
          "/location_zamalek.jpeg",
          "/locations_card_gezira_club_october.jpeg",
          "locations_landing_gezira_club_zamalek.jpeg",
        ]}
      />
      {/* Highlights Section */}
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Typography
          variant="h4"
          fontWeight={600}
          gutterBottom
          textAlign={"center"}
        >
          {t("home.what-we-offer")}
        </Typography>

        <Grid container spacing={4}>
          {[
            {
              title: t("home.classes"),
              description: t("home.classes-description"),
              image: "./placeholder.png",
              path: "/classes",
            },
            {
              title: t("home.events"),
              description: t("home.events-description"),
              image: "./placeholder.png",
              path: "./events",
            },
            {
              title: t("home.schedules"),
              description: t("home.schedules-description"),
              image: "./placeholder.png",
              path: "./schedules",
            },
          ].map((item, index) => (
            <Grid item size={{ xs: 12, md: 4 }} key={item.title}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <HomePageCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  path={item.path}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Contact CTA Section */}
      <Box sx={{ py: 8, bgcolor: "grey.100" }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h4" fontWeight={600} gutterBottom sx={{ mb: 2 }}>
            {t("home.contact-section.title")}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mb: 4, maxWidth: "600px", mx: "auto", lineHeight: 1.6 }}
          >
            {t("home.contact-section.text")}
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/contact")}
            sx={{
              borderRadius: 50,
              px: 6,
              py: 1.5,
              fontSize: "1.1rem",
              fontWeight: 700,
              textTransform: "none",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
              },
              transition: "all 0.3s ease",
            }}
          >
            {t("home.contact-section.button")}
          </Button>
        </Container>
      </Box>

      {/* Reviews Section */}
      <Box sx={{ py: 8, overflow: "hidden" }}>
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            gutterBottom
            textAlign="center"
            sx={{ mb: 4 }}
            fontWeight={600}
          >
            {t("home.reviews")}
          </Typography>
        </Container>
        <Box sx={{ display: "flex", overflow: "hidden", width: "100%", py: 4 }}>
          <motion.div
            style={{ display: "flex", width: "max-content" }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40,
            }}
          >
            {[...reviews, ...reviews].map((review, index) => (
              <Box
                key={`${review.id}-${index}`}
                sx={{
                  width: { xs: 300, md: 400 },
                  flexShrink: 0,
                  mx: 1,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ReviewCard
                  image={review.image}
                  name={review.name}
                  text={review.text}
                />
              </Box>
            ))}
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}
