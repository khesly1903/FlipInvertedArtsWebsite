import { useState } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";

export default function HalfPageLanding({ image, title, logo }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Box
      sx={{
        height: "70vh",
        width: "100%",
        position: "relative",
        bgcolor: "black", // Fallback/Loading background
        overflow: "hidden",
      }}
    >
      {/* Background Image with Fade In - using native img for better LCP */}
      <Box
        component={motion.img}
        src={image}
        alt={title || "Cover Image"}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        onLoad={() => setIsLoaded(true)}
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
        }}
      />

      {/* Loading Spinner */}
      {!isLoaded && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          <CircularProgress sx={{ color: "white" }} />
        </Box>
      )}

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
            animate={
              isLoaded
                ? { rotateX: 360, opacity: 1 }
                : { rotateX: 90, opacity: 0 }
            }
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
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
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
