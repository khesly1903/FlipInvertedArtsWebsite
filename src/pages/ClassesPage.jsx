import { Typography, Container, Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
import landingImage from "../assets/landing.webp";
import ClassCard from "../components/ClassCard";
import AnimatedInformation from "../components/AnimatedInformation";
import PageLandings from "../components/PageLandings";
import { classes } from "../data/classes";
import ImageCarousel from "../components/ImageCarousel";

import classes_1 from "../assets/classes/classes_1.png";
import classes_2 from "../assets/classes/classes_2.png";
import classes_3 from "../assets/classes/classes_3.png";
import classes_4 from "../assets/classes/classes_4.png";
import classes_5 from "../assets/classes/classes_5.png";
import classes_6 from "../assets/classes/classes_6.png";
import classes_7 from "../assets/classes/classes_7.png";

export default function ClassesPage() {
  return (
    <Box>
      {/* Classes Banner */}
      <PageLandings image={landingImage} logo="/flip_logo.svg" />

      {/* About classes section */}
      <AnimatedInformation
        title="About Classes"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consequatur ea assumenda reprehenderit ipsum tempora fugit harum, quasi distinctio eligendi odio cupiditate commodi quaerat corrupti porro, dicta quod earum voluptatum aliquam excepturi! Assumenda rerum temporibus ab soluta, inventore doloremque sed exercitationem expedita. Voluptate perferendis culpa est doloremque expedita minus nihil."
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
          classes_1,
          classes_2,
          classes_3,
          classes_4,
          classes_5,
          classes_6,
          classes_7,
        ]}
      />
      {/* Kids Classes Section */}
      <AnimatedInformation
        title="Kids Classes"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consequatur ea assumenda reprehenderit ipsum tempora fugit harum, quasi distinctio eligendi odio cupiditate commodi quaerat corrupti porro, dicta quod earum voluptatum aliquam excepturi! Assumenda rerum temporibus ab soluta, inventore doloremque sed exercitationem expedita. Voluptate perferendis culpa est doloremque expedita minus nihil."
      />

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
                    title={cls.title}
                    age={cls.ageRange}
                    detail={cls.description}
                    link={`/classes/${cls.slug}`}
                    competitive={cls.competitive}
                  />
                </motion.div>
              </Grid>
            ))}
        </Grid>
      </Box>

      {/* Adults Classes Section */}
      <AnimatedInformation
        title="Adults Classes"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consequatur ea assumenda reprehenderit ipsum tempora fugit harum, quasi distinctio eligendi odio cupiditate commodi quaerat corrupti porro, dicta quod earum voluptatum aliquam excepturi! Assumenda rerum temporibus ab soluta, inventore doloremque sed exercitationem expedita. Voluptate perferendis culpa est doloremque expedita minus nihil."
      />
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
                    title={cls.title}
                    age={cls.ageRange}
                    detail={cls.description}
                    link={`/classes/${cls.slug}`}
                    competitive={cls.competitive}
                  />
                </motion.div>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
}
