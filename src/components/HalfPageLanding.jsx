import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function HalfPageLanding({ image, title1, title2, logo }) {
  return (
    <Box
      sx={{
        height: "70vh",
        width: "100%",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
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
        <>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              color: "white",
              mb: 2,
              textAlign: "center",
              textShadow: "1px 1px 1px rgba(0,0,0,0.5)",
              fontWeight: "bold",
            }}
          >
            {title1}
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: "white",
              textAlign: "center",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              fontWeight: "bold",
            }}
          >
            {title2}
          </Typography>
        </>
      )}
    </Box>
  );
}
