import React, { useRef, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { motion, useAnimation, useInView } from "framer-motion";

const AnimatedTitle = ({ title, fontSize }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ scale: 1, opacity: 1 });
    }
  }, [isInView, controls]);

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 4,
        width: "100%",
      }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      >
        <Typography
          variant="h3"
          component="h2"
          fontSize={fontSize || "2.5rem"}
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          {title}
        </Typography>
      </motion.div>
    </Box>
  );
};

export default AnimatedTitle;
