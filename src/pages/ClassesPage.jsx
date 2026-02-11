import { Typography, Container, Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";;
import ClassCard from "../components/ClassCard";
import AnimatedInformation from "../components/AnimatedInformation";
import HalfPageLanding from "../components/HalfPageLanding";
import { classes } from "../data/classes";
import ImageCarousel from "../components/ImageCarousel";

import class_1_1 from "../assets/classes/class_1/class_1_1.webp";
import class_2_1 from "../assets/classes/class_2/class_2_1.webp";
import class_3_1 from "../assets/classes/class_3/class_3_1.webp";
import class_4_1 from "../assets/classes/class_4/class_4_1.webp";
import class_5_1 from "../assets/classes/class_5/class_5_1.webp";
import class_6_1 from "../assets/classes/class_6/class_6_1.webp";
import class_7_1 from "../assets/classes/class_7/class_7_1.webp";
import class_8_1 from "../assets/classes/class_8/class_8_1.webp";
import class_3_landing from "../assets/classes/class_3/class_3_landing.webp";

import classes_landing from "../assets/classes/classes_landing.webp";

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
      <HalfPageLanding
        image={classes_landing}
        logo="/logos/flip_logo_half_landing_white_classes.svg"
      />

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
          class_1_1,
          class_2_1,
          class_3_1,
          class_4_1,
          class_5_1,
          class_6_1,
          class_7_1,
          class_8_1,
          class_3_landing,
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
