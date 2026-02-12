import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function HalfPageLanding({ image, title, logo }) {
  return (
    <Box
      sx={{
        height: "70vh",
        width: "100%",
        position: "relative",
        bgcolor: "black", // Dark background for better contrast while loading
        overflow: "hidden",
      }}
    >
      {/* Background Image - Immediate Render */}
      <Box
        component="img"
        src={image}
        alt={title || "Cover Image"}
        fetchPriority="high"
        loading="eager"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0,
          opacity: 0.8, // Slight overlay effect
        }}
      />

      {/* Content Overlay */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {logo ? (
          <motion.img
            src={logo}
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
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                color: "white",
                textAlign: "center",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                fontWeight: "bold",
                px: 2,
              }}
            >
              {title}
            </Typography>
          </motion.div>
        )}
      </Box>
    </Box>
  );
}
