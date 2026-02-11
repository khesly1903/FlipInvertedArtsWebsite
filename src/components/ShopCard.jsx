import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

const ShopCard = ({ image, title, price, description, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: 4,
          boxShadow: 3,
          overflow: "hidden",
        }}
      >
        <CardActionArea onClick={onClick} sx={{ flexGrow: 1 }}>
          <Box sx={{ position: "relative", paddingTop: "100%" }}>
            <CardMedia
              component="img"
              image={image}
              alt={title}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <CardContent sx={{ flexGrow: 1, p: 3 }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              fontWeight="bold"
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 2,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                minHeight: "40px",
              }}
            >
              {description}
            </Typography>
            <Typography variant="h6" color="primary" fontWeight="bold">
              {price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </motion.div>
  );
};

export default ShopCard;
