import { Box, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";

export default function HomePageCard({ title, description, image, path }) {
  return (
    <Paper
      component={Link}
      to={path}
      elevation={3}
      sx={{
        display: "block",
        textDecoration: "none",
        position: "relative",
        height: "550px", // Maintains the vertical rectangle look
        overflow: "hidden",
        borderRadius: 2,
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
          "& .card-image": {
            transform: "scale(1.1)",
          },
        },
      }}
    >
      {/* Background Image */}
      <Box
        className="card-image"
        component="img"
        src={image}
        alt={title}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />

      {/* Title Overlay - Top */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          p: 3,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
          zIndex: 2,
        }}
      >
        <Typography
          variant="h4"
          component="h3"
          sx={{
            color: "white",
            fontWeight: "bold",
            textShadow: "0 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          {title}
        </Typography>
      </Box>

      {/* Description Overlay - Bottom */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          p: 3,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)",
          zIndex: 2,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "rgba(255,255,255,0.9)",
            textShadow: "0 1px 2px rgba(0,0,0,0.5)",
            lineHeight: 1.6,
          }}
        >
          {description}
        </Typography>
      </Box>
    </Paper>
  );
}
