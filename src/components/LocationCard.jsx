import { Box, Typography, Paper } from "@mui/material";

export default function LocationsCard({ locationTitle, image }) {
  return (
    <Box>
      <Paper
        elevation={3}
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
          aspectRatio: "1 / 1",
          cursor: "pointer",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
            "& .location-image": {
              transform: "scale(1.1)",
            },
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            p: 3,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
            zIndex: 2,
          }}
        >
          <Typography
            variant="h3"
            component="h"
            sx={{
              color: "white",
              fontWeight: "bold",
              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            {locationTitle.toUpperCase()}
          </Typography>
        </Box>
        <Box
          className="location-image"
          component="img"
          src={image}
          alt={locationTitle}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </Paper>
    </Box>
  );
}
