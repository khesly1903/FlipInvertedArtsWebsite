import { Box } from "@mui/material";
import { motion } from "framer-motion";

export default function PageLandings({ image, logo }) {
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
        fetchpriority: "high",
        position: "relative",
      }}
    >
      {logo && (
        <motion.img
          src={logo}
          alt="Page Logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ width: "20%" }}
        />
      )}
    </Box>
  );
}
