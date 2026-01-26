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

export default function ClassCard({
  image,
  title,
  age,
  detail,
  link,
  competitive,
}) {
  const theme = useTheme();

  return (
    <Card
      component={RouterLink}
      to={link}
      sx={{
        width: "100%",
        maxWidth: 500,
        height: 500,
        borderRadius: 4,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        textDecoration: "none",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: 6,
        },
      }}
    >
      <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        {/* Background Image */}
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />

        {/* Dark Gradient Overlay for Readability */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.8) 100%)",
          }}
        />

        {/* Content Container */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            p: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            color: "white",
            boxSizing: "border-box",
          }}
        >
          {/* Top Section: Title and Chips */}
          <Box>
            <Typography
              variant="h4"
              component="div"
              sx={{
                fontWeight: "bold",
                color: "white",
                mb: 2,
                textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                fontSize: "3rem",
              }}
            >
              {title.toUpperCase()}
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 1,
                flexWrap: "wrap",
              }}
            >
              {age && (
                <Chip
                  label={age}
                  size="small"
                  sx={{
                    fontWeight: "medium",
                    bgcolor: "rgba(255, 255, 255, 0.2)",
                    color: "white",
                    backdropFilter: "blur(4px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                />
              )}
              {competitive && (
                <Chip
                  label={competitive}
                  size="small"
                  sx={{
                    fontWeight: "medium",
                    bgcolor: "rgba(255, 255, 255, 0.2)",
                    color: "white",
                    backdropFilter: "blur(4px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                />
              )}
            </Box>
          </Box>

          {/* Bottom Section: Detail */}
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
              display: "-webkit-box",
              WebkitLineClamp: 3, // Limit text to 3 lines
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              fontSize: "1.25rem",
            }}
          >
            {detail}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
