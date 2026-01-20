import React, { useEffect } from "react";
import { Typography, Container, Box, Grid } from "@mui/material";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedInformation({ title, text }) {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const leftVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Container maxWidth="xl" sx={{ py: 8, overflow: "hidden" }}>
      <Grid container spacing={4} ref={ref} alignItems="center">
        <Grid item size={{ xs: 12, md: 3 }}>
          <motion.div
            variants={leftVariant}
            initial="hidden"
            animate={controls}
          >
            <Typography variant="h3" gutterBottom>
              {title}
            </Typography>
          </motion.div>
        </Grid>

        <Grid item size={{ xs: 12, md: 9 }}>
          <motion.div
            variants={rightVariant}
            initial="hidden"
            animate={controls}
          >
            <Box>
              <Typography variant="body1" gutterBottom>
                {text}
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
}
