import { Typography, Container, Box, Grid } from "@mui/material";
import landingImage from "../assets/landing.webp";
import ClassCard from "../components/ClassCard";
import AnimatedInformation from "../components/AnimatedInformation";
import PageLandings from "../components/PageLandings";
import { classes } from "../data/classes";

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
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={"100%"}
      >
        <img src="/idk.png" alt="idk" />
      </Box>

      {/* Kids Classes Section */}
      <AnimatedInformation
        title="Kids Classes"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consequatur ea assumenda reprehenderit ipsum tempora fugit harum, quasi distinctio eligendi odio cupiditate commodi quaerat corrupti porro, dicta quod earum voluptatum aliquam excepturi! Assumenda rerum temporibus ab soluta, inventore doloremque sed exercitationem expedita. Voluptate perferendis culpa est doloremque expedita minus nihil."
      />

      <Box sx={{ mb: 8 }}>
        <Grid container spacing={4} justifyContent="center">
          {classes
            .filter((c) => c.type === "kids")
            .map((cls) => (
              <Grid
                item
                key={cls.id}
                xs={12}
                sm={6}
                md={4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <ClassCard
                  image={cls.image.src}
                  title={cls.title}
                  age={cls.ageRange}
                  detail={cls.description}
                  link={`/classes/${cls.slug}`}
                />
              </Grid>
            ))}
        </Grid>
      </Box>

      {/* Adults Classes Section */}
      <AnimatedInformation
        title="Adults Classes"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consequatur ea assumenda reprehenderit ipsum tempora fugit harum, quasi distinctio eligendi odio cupiditate commodi quaerat corrupti porro, dicta quod earum voluptatum aliquam excepturi! Assumenda rerum temporibus ab soluta, inventore doloremque sed exercitationem expedita. Voluptate perferendis culpa est doloremque expedita minus nihil."
      />
      <Box sx={{ mb: 8 }}>
        <Grid container spacing={4} justifyContent="center">
          {classes
            .filter((c) => c.type === "adults")
            .map((cls) => (
              <Grid
                item
                key={cls.id}
                xs={12}
                sm={6}
                md={4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <ClassCard
                  image={cls.image.src}
                  title={cls.title}
                  age={cls.ageRange}
                  detail={cls.description}
                  link={`/classes/${cls.slug}`}
                />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
}
