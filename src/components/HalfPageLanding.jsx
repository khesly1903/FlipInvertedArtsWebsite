import { Box, Typography } from "@mui/material";

export default function HalfPageLanding({ image, title1, title2 }) {
  return (
    <Box
      sx={{
        height: "50vh",
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
    </Box>
  );
}
