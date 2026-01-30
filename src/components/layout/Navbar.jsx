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
  Menu,
  MenuItem,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState, useEffect, forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { schedules } from "../../data/schedules";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Navbar({ hideOnScrollTop = false }) {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const menuItems = [
    {
      title: t("navbar.classes"),
      path: "/classes",
      desc: "Explore our classes",
      subLinks: [
        {
          title: t("navbar.kidsClasses"),
          path: "/classes",
          sectionId: "kids-classes",
        },
        {
          title: t("navbar.adultsClasses"),
          path: "/classes",
          sectionId: "adults-classes",
        },
      ],
    },
    {
      title: t("navbar.events"),
      path: "/events",
      desc: "Upcoming events",
      subLinks: [
        {
          title: t("navbar.currentEvents"),
          path: "/events",
          sectionId: "current-events",
        },
        {
          title: t("navbar.upcomingEvents"),
          path: "/events",
          sectionId: "upcoming-events",
        },
        {
          title: t("navbar.pastEvents"),
          path: "/events",
          sectionId: "past-events",
        },
      ],
    },
    {
      title: t("navbar.schedules"),
      path: "/schedules",
      desc: "Check our timings",
      subLinks: schedules.map((schedule) => ({
        title: t(schedule.location),
        path: `/schedules/${schedule.path}`,
      })),
    },
    {
      title: t("navbar.about"),
      path: "/about-flip",
      desc: "Learn more about us",
      subLinks: [],
    },
    {
      title: t("navbar.faq"),
      path: "/faq",
      desc: "Frequently Asked Questions",
      subLinks: [],
    },
    {
      title: t("navbar.contact-us"),
      path: "/form",
      desc: "Contact Us",
      subLinks: [],
      state: { type: "contact", description: "navbar.contact-us" },
    },
  ];

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

  const handleNavigation = (path, stateOrSectionId) => {
    let state = {};
    if (typeof stateOrSectionId === "string") {
      state = { targetId: stateOrSectionId };
    } else if (
      typeof stateOrSectionId === "object" &&
      stateOrSectionId !== null
    ) {
      state = stateOrSectionId;
    }
    navigate(path, { state });
    setIsMenuOpen(false);
  };

  const handleLanguageMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // document.dir = i18n.dir(lng); // If you want to automatically switch RTL/LTR
    handleLanguageMenuClose();
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: scrolled
            ? "rgba(0, 0, 0, 0.6)"
            : "rgba(0, 0, 0, 0.1)",
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
              <IconButton color="inherit" onClick={handleLanguageMenuOpen}>
                <LanguageIcon sx={{ color: "white" }} />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleLanguageMenuClose}
              >
                <MenuItem onClick={() => changeLanguage("en")}>
                  English
                </MenuItem>
                <MenuItem onClick={() => changeLanguage("ar")}>
                  العربية
                </MenuItem>
              </Menu>

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
            {menuItems.map((item, index) =>
              item.subLinks && item.subLinks.length > 0 ? (
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
                      {t("navbar.viewPage", { page: item.title })} &rarr;
                    </Typography>
                    {item.subLinks.map((subLink, subIndex) => (
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
                        onClick={() =>
                          handleNavigation(subLink.path, subLink.sectionId)
                        }
                      >
                        {subLink.title}
                      </Typography>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ) : (
                <Box
                  key={index}
                  sx={{
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    py: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      px: 2,
                      cursor: "pointer",
                    }}
                    onClick={() => handleNavigation(item.path, item.state)}
                  >
                    <Typography variant="h4" fontWeight="bold">
                      {item.title}
                    </Typography>
                  </Box>
                </Box>
              ),
            )}
          </Box>
        </Container>
      </Dialog>
    </>
  );
}
