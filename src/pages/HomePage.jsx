import { Typography, Container, Box, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import SplitText from "../components/SplitText";

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

import card_diplo from "../assets/schedules/card/card_diplo.webp";
import card_almaza from "../assets/schedules/card/card_almaza.webp";
import card_gezira_club_zamalek from "../assets/schedules/card/card_gezira_club_zamalek.webp";
import class_3_card from "../assets/classes/class_3/class_3_card.webp";
import class_1_3 from "../assets/classes/class_1/class_1_3.webp";
import class_2_3 from "../assets/classes/class_2/class_2_3.webp";
import class_3_1 from "../assets/classes/class_3/class_3_1.webp";
import class_4_1 from "../assets/classes/class_4/class_4_1.webp";
import class_5_4 from "../assets/classes/class_5/class_5_4.webp";
import class_6_2 from "../assets/classes/class_6/class_6_2.webp";
import class_7_2 from "../assets/classes/class_7/class_7_2.webp";

import homepage_carousel1 from "../assets/homepage/homepage_carousel1.webp";
import homepage_carousel2 from "../assets/homepage/homepage_carousel2.webp";
import homepage_carousel3 from "../assets/homepage/homepage_carousel3.webp";
import homepage_carousel4 from "../assets/homepage/homepage_carousel4.webp";
// import homepage_classes from "../assets/homepage/homepage_classes.webp";
// import homepage_events from "../assets/homepage/homepage_events.webp";
// import homepage_schedules from "../assets/homepage/homepage_schedules.webp";

const R2_URL = import.meta.env.VITE_R2_URL;

export default function HomePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          src={`${R2_URL}/video/homepage_video.mp4`}
          preload="auto"
          poster={`${R2_URL}/video/homepage_video_poster.webp`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            color: "white",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
            fontSize: { xs: "2rem", md: "3.75rem" },
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <motion.img
            src="/flip_logo.svg"
            alt="Logo"
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 360, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              width: "min(500px, 80vw)",
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
            spacing={{ xs: 1, md: 4 }}
            justifyContent="space-around"
            alignItems="flex-start" // Ensures items align to top if content varies
            sx={{ width: "100%", m: 0 }}
          >
            {[
              {
                label: t("home.classes"),
                path: "/classes",
                icon: <SchoolIcon sx={{ fontSize: { xs: 35, md: 60 } }} />,
              },
              {
                label: t("home.events"),
                path: "/events",
                icon: <EventIcon sx={{ fontSize: { xs: 35, md: 60 } }} />,
              },
              {
                label: t("home.schedules"),
                path: "/schedules",
                icon: <LocationOnIcon sx={{ fontSize: { xs: 35, md: 60 } }} />,
              },
              {
                label: t("home.shop"),
                path: "/shop",
                icon: <StorefrontIcon sx={{ fontSize: { xs: 35, md: 60 } }} />,
              },
            ].map((item) => (
              <Grid
                item
                xs={3} // Force 4 items per row (12 columns / 4 items = 3 cols each)
                mb={3}
                key={item.label}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  p: "0 !important",
                }} // Remove default grid padding on xs if needed or handle via spacing
              >
                <Box
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
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
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    sx={{ mt: 0.5, textAlign: "center", lineHeight: 1.2 }}
                    fontSize={{ xs: "0.75rem", md: "1.5rem" }}
                  >
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
          card_diplo,
          class_3_card,
          `${R2_URL}/landing/events_landing.webp`,
          class_1_3,
          class_2_3,
          homepage_carousel1,
          card_almaza,
          class_3_1,
          homepage_carousel2,
          class_4_1,
          class_5_4,
          homepage_carousel3,
          class_6_2,
          card_gezira_club_zamalek,
          homepage_carousel4,
          class_7_2,
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
              image: `${R2_URL}/landing/classes_landing.webp`,
              path: "/classes",
            },
            {
              title: t("home.events"),
              description: t("home.events-description"),
              image: `${R2_URL}/landing/events_landing.webp`,
              path: "./events",
            },
            {
              title: t("home.schedules"),
              description: t("home.schedules-description"),
              image: `${R2_URL}/landing/schedules_landing.webp`,
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
