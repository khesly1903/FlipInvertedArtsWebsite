import { Box } from "@mui/material";
import { motion } from "framer-motion";

export default function ImageCarousel({ images = [] }) {
  if (!images || images.length === 0) return null;

  const duplicatedImages = [...images, ...images];

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <motion.div   
        style={{ display: "flex", width: "max-content" }}
        animate={{ x: "-50%" }}
        initial={{ x: 0 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: images.length * 2, // for each image, 2sec
        }}
      >
        {duplicatedImages.map((img, index) => (
          <Box
            key={index}
            component="img"
            src={img}
            alt={`Carousel image ${index}`}
            sx={{
              width: { xs: "50vw", sm: "33.33vw", md: "25vw", lg: "20vw" },
              height: { xs: "50vw", sm: "33.33vw", md: "25vw", lg: "20vw" },
              objectFit: "cover",
              flexShrink: 0,
              p: 1,
              borderRadius: 4,
            }}
          />
        ))}
      </motion.div>
    </Box>
  );
}
