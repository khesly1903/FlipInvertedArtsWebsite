import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Masonry from "@mui/lab/Masonry";

const MasonryGrid = ({ images = [] }) => {
  if (images.length === 1) {
    const image = images[0];
    return (
      <Container
        maxWidth="lg"
        sx={{ py: 4, display: "flex", justifyContent: "center" }}
      >
        <Box sx={{ width: "100%", maxWidth: { md: "50%" } }}>
          <img
            src={typeof image === "string" ? image : image.src}
            alt={typeof image === "string" ? "single-img" : image.alt}
            loading="lazy"
            style={{
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
              display: "block",
              width: "100%",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.75)",
            }}
          />
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Masonry columns={{ xs: 2, md: 2 }} spacing={2}>
        {images.map((image, index) => (
          <Box key={index} sx={{ width: "100%" }}>
            <img
              src={typeof image === "string" ? image : image.src}
              alt={
                typeof image === "string" ? `masonry-img-${index}` : image.alt
              }
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: "block",
                width: "100%",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.75)",
              }}
            />
          </Box>
        ))}
      </Masonry>
    </Container>
  );
};

export default MasonryGrid;
