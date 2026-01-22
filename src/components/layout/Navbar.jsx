import {
  AppBar,
  Toolbar,
  Box,
  Container,
  IconButton,
  Dialog,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Slide,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState, useEffect, forwardRef } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const menuItems = [
  {
    title: "Classes",
    path: "/classes",
    desc: "Explore our classes",
    subLinks: [
      { title: "Classes 1", path: "/classes/1" },
      { title: "Classes 2", path: "/classes/2" },
      { title: "Classes 3", path: "/classes/3" },
    ],
  },
  {
    title: "Events",
    path: "/events",
    desc: "Upcoming events",
    subLinks: [
      { title: "Event 1", path: "/events/1" },
      { title: "Event 2", path: "/events/2" },
    ],
  },
  {
    title: "Schedules",
    path: "/schedules",
    desc: "Check our timings",
    subLinks: [
      { title: "Schedule 1", path: "/schedules/1" },
      { title: "Schedule 2", path: "/schedules/2" },
    ],
  },
  {
    title: "About Flip",
    path: "/about-flip",
    desc: "Learn more about us",
    subLinks: [
      { title: "Our Story", path: "/about-flip/story" },
      { title: "Team", path: "/about-flip/team" },
    ],
  },
  {
    title: "FAQ",
    path: "/faq",
    desc: "Frequently Asked Questions",
    subLinks: [
      { title: "General", path: "/faq/general" },
      { title: "Payment", path: "/faq/payment" },
    ],
  },
];

export default function Navbar({ hideOnScrollTop = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: scrolled ? "rgba(0, 0, 0, 0.6)" : "transparent",
          transition:
            "background-color 1s ease, opacity 1s ease, visibility 1s ease",
          boxShadow: scrolled ? undefined : "none",
          visibility: hideOnScrollTop && !scrolled ? "hidden" : "visible",
          opacity: hideOnScrollTop && !scrolled ? 0 : 1,
          zIndex: 1301,
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
                zIndex: 1302,
              }}
              onClick={() => setIsMenuOpen(false)}
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
            <Box sx={{ display: "flex", gap: 2, zIndex: 1302 }}>
              <IconButton color="inherit">
                <LanguageIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton
                color="inherit"
                onClick={handleMenuToggle}
                sx={{
                  transition: "transform 0.3s ease",
                  transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)",
                }}
              >
                {isMenuOpen ? (
                  <CloseIcon sx={{ color: "white" }} />
                ) : (
                  <MenuIcon sx={{ color: "white" }} />
                )}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Dialog
        fullScreen
        open={isMenuOpen}
        onClose={handleMenuToggle}
        TransitionComponent={Transition}
        PaperProps={{
          sx: {
            backgroundColor: "#000",
            color: "white",
            paddingTop: "80px",
          },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ mt: 4 }}>
            {menuItems.map((item, index) => (
              <Accordion
                key={index}
                sx={{
                  backgroundColor: "transparent",
                  color: "white",
                  boxShadow: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  "&:before": {
                    display: "none",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <Typography variant="h4" fontWeight="bold">
                    {item.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      paddingLeft: "1rem",
                      cursor: "pointer",
                      "&:hover": { color: "#ccc", paddingLeft: "1.5rem" },
                      transition: "padding 0.3s ease",
                      fontWeight: "bold",
                      opacity: 0.8,
                    }}
                    onClick={() => handleNavigation(item.path)}
                  >
                    View {item.title} Page &rarr;
                  </Typography>
                  {item.subLinks &&
                    item.subLinks.map((subLink, subIndex) => (
                      <Typography
                        key={subIndex}
                        variant="body1"
                        sx={{
                          cursor: "pointer",
                          paddingLeft: "2rem",
                          "&:hover": { color: "#ccc", paddingLeft: "2.5rem" },
                          transition: "padding 0.3s ease",
                          fontSize: "1.2rem",
                        }}
                        onClick={() => handleNavigation(subLink.path)}
                      >
                        {subLink.title}
                      </Typography>
                    ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Dialog>
    </>
  );
}
