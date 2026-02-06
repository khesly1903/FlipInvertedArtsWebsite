import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Rating,
} from "@mui/material";

import { useTranslation } from "react-i18next";

export default function ReviewCard({ image, name, text }) {
  const { t } = useTranslation();

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
        borderRadius: 2,
        boxShadow: 3,
        p: 2,
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 6,
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          flexGrow: 1, // Take up available space
        }}
      >
        {/* Header: Avatar and Name */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar src={image} alt={t(name)} sx={{ width: 56, height: 56 }} />
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            {t(name)}
          </Typography>
        </Box>

        {/* Review Text */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontStyle: "italic", flexGrow: 1 }} // Grow to push stars down
        >
          "{t(text)}"
        </Typography>

        {/* 5 Star Rating */}
        <Box sx={{ display: "flex", alignItems: "center", mt: "auto" }}>
          <Rating name="read-only" value={5} readOnly />
        </Box>
      </CardContent>
    </Card>
  );
}
