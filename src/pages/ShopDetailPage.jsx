import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  IconButton,
  Stack,
  Divider,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { shopItems } from "../data/shop";

const ShopDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Find the product based on the slug
  const product = shopItems.find((item) => item.slug === slug);

  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <Container sx={{ mt: 10, textAlign: "center" }}>
        <Typography variant="h5">{t("shop.productNotFound")}</Typography>
        <Button onClick={() => navigate("/shop")} sx={{ mt: 2 }}>
          {t("shop.backToShop")}
        </Button>
      </Container>
    );
  }

  const handleNextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1,
    );
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1,
    );
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 8, pt: 8 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/shop")}
        sx={{ mb: 4, color: "text.primary" }}
      >
        {t("shop.backToShop")}
      </Button>

      <Grid container spacing={6}>
        {/* Left Side - Image Gallery */}
        <Grid item size={{ xs: 12, md: 7 }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              paddingTop: "75%", // 4:3 Aspect Ratio
              bgcolor: "#f5f5f5",
              borderRadius: 4,
              overflow: "hidden",
              mb: 2,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedImageIndex}
                src={product.images[selectedImageIndex].src}
                alt={product.images[selectedImageIndex].alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain", // Keep aspect ratio
                }}
              />
            </AnimatePresence>

            {/* Image Navigation Arrows */}
            {product.images.length > 1 && (
              <>
                <IconButton
                  onClick={handlePrevImage}
                  sx={{
                    position: "absolute",
                    left: 16,
                    top: "50%",
                    transform: "translateY(-50%)",
                    bgcolor: "rgba(255,255,255,0.8)",
                    "&:hover": { bgcolor: "white" },
                  }}
                >
                  <ArrowBackIosNewIcon />
                </IconButton>
                <IconButton
                  onClick={handleNextImage}
                  sx={{
                    position: "absolute",
                    right: 16,
                    top: "50%",
                    transform: "translateY(-50%)",
                    bgcolor: "rgba(255,255,255,0.8)",
                    "&:hover": { bgcolor: "white" },
                  }}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </>
            )}
          </Box>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <Stack
              direction="row"
              spacing={2}
              sx={{ overflowX: "auto", pb: 1 }}
            >
              {product.images.map((img, index) => (
                <Box
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  sx={{
                    width: 80,
                    height: 80,
                    flexShrink: 0,
                    cursor: "pointer",
                    borderRadius: 2,
                    border:
                      selectedImageIndex === index
                        ? "2px solid black"
                        : "2px solid transparent",
                    overflow: "hidden",
                    opacity: selectedImageIndex === index ? 1 : 0.6,
                    transition: "all 0.2s",
                    "&:hover": { opacity: 1 },
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              ))}
            </Stack>
          )}
        </Grid>

        {/* Right Side - Product Details */}
        <Grid item size={{ xs: 12, md: 5 }}>
          <Box sx={{ position: "sticky", top: 100 }}>
            {/* Tag Removed */}

            <Typography
              variant="h3"
              component="h1"
              fontWeight="bold"
              gutterBottom
            >
              {t(product.title)}
            </Typography>

            <Typography
              variant="h4"
              color="primary"
              fontWeight="bold"
              sx={{ mb: 3 }}
            >
              {product.price}
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              {t(product.description)}
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" gutterBottom fontWeight="bold">
              {t("shop.detailsLabel")}
            </Typography>

            <Stack spacing={1}>
              {product.details.map((detailKey, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "start", gap: 1 }}
                >
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "bold", minWidth: "20px" }}
                  >
                    •
                  </Typography>
                  <Typography variant="body1">{t(detailKey)}</Typography>
                </Box>
              ))}
            </Stack>

            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                size="large"
                fullWidth
                href={`https://wa.me/201210754286?text=I'm interested in ${t(
                  product.title,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: "#25D366",
                  "&:hover": {
                    bgcolor: "#128C7E",
                  },
                }}
              >
                {t("shop.orderViaWhatsapp")}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShopDetailPage;
