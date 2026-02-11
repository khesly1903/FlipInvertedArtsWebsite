import React, { useMemo, useRef, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion, useAnimation, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import HalfPageLanding from "../components/HalfPageLanding";
import { classes } from "../data/classes";

const ClassDetailItem = ({ item, isEven, t }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const textVariants = {
    hidden: { opacity: 0, x: isEven ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: isEven ? 50 : -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <Box ref={ref} sx={{ mb: 8 }}>
      <Grid
        container
        spacing={4}
        alignItems="center"
        direction={isEven ? "row" : "row-reverse"}
      >
        {/* Text Section */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
              {t(item.title)}
            </Typography>
            <Typography
              variant="body1"
              fontSize="1.1rem"
              color="text.secondary"
            >
              {t(item.description)}
            </Typography>
          </motion.div>
        </Grid>

        {/* Image Section */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={controls}
          >
            <Box
              component="img"
              src={item.image}
              alt={item.title}
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: "400px",
                objectFit: "cover",
                borderRadius: 4,
                boxShadow: 3,
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default function ClassDetailPage() {
  const { t } = useTranslation();
  const { slug } = useParams();

  const classItem = useMemo(() => {
    return classes.find((c) => c.slug === slug);
  }, [slug]);

  if (!classItem) {
    return <Navigate to="/classes" replace />;
  }

  // Handle case where detail is not yet an array (legacy data support)
  const details = Array.isArray(classItem.detail) ? classItem.detail : [];

  return (
    <Box>
      <HalfPageLanding
        image={classItem.slugImage.src}
        title={t(classItem.title).toUpperCase()}
      />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {details.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <ClassDetailItem key={index} item={item} isEven={isEven} t={t} />
          );
        })}
      </Container>
    </Box>
  );
}
