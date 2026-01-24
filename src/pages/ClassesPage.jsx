import { Typography, Container, Box, Grid } from "@mui/material";
import { motion } from "framer-motion";

import landingImage from "../assets/landing.webp";
import ClassCard from "../components/ClassCard";
import AnimatedInformation from "../components/AnimatedInformation";
import PageLandings from "../components/PageLandings";
import { classes } from "../data/classes";
import ImageCarousel from "../components/ImageCarousel";

import class_1_card from "../assets/classes/class_1/class_1_card.png";
import class_2_card from "../assets/classes/class_2/class_2_card.png";
import class_3_card from "../assets/classes/class_3/class_3_card.png";
import class_4_card from "../assets/classes/class_4/class_4_card.png";
import class_5_card from "../assets/classes/class_5/class_5_card.png";
import class_6_card from "../assets/classes/class_6/class_6_card.png";


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
          class_1_card,
          class_2_card,
          class_3_card,
          class_4_card,
          class_5_card,
          class_6_card,
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
