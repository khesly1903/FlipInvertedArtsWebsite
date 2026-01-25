import { Typography, Container, Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useTranslation } from "react-i18next";

import landingImage from "../assets/landing.webp";
import ClassCard from "../components/ClassCard";
import AnimatedInformation from "../components/AnimatedInformation";
import HalfPageLanding from "../components/HalfPageLanding";
import { classes } from "../data/classes";
import ImageCarousel from "../components/ImageCarousel";

import class_1_card from "../assets/classes/class_1/class_1_card.png";
import class_2_card from "../assets/classes/class_2/class_2_card.png";
import class_3_card from "../assets/classes/class_3/class_3_card.png";

export default function ClassesPage() {
  const { state } = useLocation();
  const { t } = useTranslation();

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
      {/* Classes Banner */}
      <HalfPageLanding image={landingImage} logo="/flip_logo.svg" />

      {/* About classes section */}
      <AnimatedInformation
        title={t("classes.classes-title")}
        text={t("classes.classes-text")}
      />

      {/* idk.png */}
      {/* <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={"100%"}
      >
        <img src="/idk.png" alt="idk" />
      </Box> */}

      <ImageCarousel
        images={[
          class_1_card,
          class_2_card,
          class_3_card,
          // class_4_card,
          // class_5_card,
          // class_6_card,
        ]}
      />
      {/* Kids Classes Section */}
      <Box id="kids-classes">
        <AnimatedInformation
          title={t("classes.about-kids-classes")}
          text={t("classes.about-kids-classes-text")}
        />
      </Box>

      <Box sx={{ mb: 8, px: 2 }}>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          maxWidth={"xl"}
          sx={{ mx: "auto" }}
        >
          {classes
            .filter((c) => c.type === "kids")
            .map((cls, index) => (
              <Grid
                item
                key={cls.id}
                size={{ xs: 12, md: 4 }}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <ClassCard
                    image={cls.image.src}
                    title={t(cls.title)}
                    age={t(cls.ageRange)}
                    detail={t(cls.description)}
                    link={`/classes/${cls.slug}`}
                    competitive={t(cls.competitive)}
                  />
                </motion.div>
              </Grid>
            ))}
        </Grid>
      </Box>

      {/* Adults Classes Section */}
      <Box id="adults-classes">
        <AnimatedInformation
          title={t("classes.about-adults-classes")}
          text={t("classes.about-adults-classes-text")}
        />
      </Box>
      <Box sx={{ mb: 8, px: 2 }}>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          maxWidth={"xl"}
          sx={{ mx: "auto" }}
        >
          {classes
            .filter((c) => c.type === "adults")
            .map((cls, index) => (
              <Grid
                item
                key={cls.id}
                size={{ xs: 12, md: 4 }}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <ClassCard
                    image={cls.image.src}
                    title={t(cls.title)}
                    age={t(cls.ageRange)}
                    detail={t(cls.description)}
                    link={`/classes/${cls.slug}`}
                    competitive={t(cls.competitive)}
                  />
                </motion.div>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
}
