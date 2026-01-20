import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Chip,
  Box,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

export default function ClassCard({ image, title, age, detail, link }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 345,
        height: 700,
        borderRadius: 4,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden", // Ensure border radius clips content
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: 6,
        },
      }}
    >
      {/* Top Image Section */}
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          height: 400,
          objectFit: "cover",
          border: "8px solid white", // White border around the image
          boxSizing: "border-box", // Ensure border is included in dimensions
          borderRadius: 4, // Match card border radius
        }}
      />

      {/* Bottom White Area Section */}
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          bgcolor: "background.paper", // White background
          p: 3,
        }}
      >
        {/* Title */}
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: "bold",
            color: "text.primary",
            width: "100%",
          }}
        >
          {title}
        </Typography>

        {/* Age Chip */}
        {age && (
          <Box sx={{ width: "100%" }}>
            <Chip
              label={age}
              size="small"
              sx={{
                fontWeight: "medium",
                backgroundColor: theme.palette.grey[200],
                color: "text.primary",
                border: "none",
              }}
            />
          </Box>
        )}

        {/* Detail Text */}
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", flexGrow: 1 }}
        >
          {detail}
        </Typography>

        {/* Action Button */}
        <Button
          size="medium"
          variant="contained"
          component={RouterLink}
          to={link}
          fullWidth
          sx={{
            textTransform: "none",
            borderRadius: 50,
            mt: 1,
            bgcolor: "primary.main",
            color: "white",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          More Info
        </Button>
      </CardContent>
    </Card>
  );
}
