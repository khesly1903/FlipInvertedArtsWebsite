import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 4 : 0}
      sx={{
        backgroundColor: scrolled ? "rgba(0, 0, 0, 0.6)" : "transparent",
        transition:
          "background-color 1s ease, opacity 1s ease, visibility 1s ease",
        boxShadow: scrolled ? undefined : "none",
        visibility: scrolled ? "visible" : "hidden",
        opacity: scrolled ? 1 : 0,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img
              src="/flip_logo.svg"
              alt="Flip Logo"
              style={{
                height: "40px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <LanguageIcon />
            <MenuIcon />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
