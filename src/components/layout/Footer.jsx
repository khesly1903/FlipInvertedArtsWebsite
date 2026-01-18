import {
  Box,
  Container,
  Divider,
  Typography,
  IconButton,
  Button,
  Stack,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YoutubeIcon from "@mui/icons-material/Youtube";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: "auto",
        backgroundColor: "secondary.main",
        color: "secondary.contrastText",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center">
          <Box
            component="img"
            src="/flip_logo.svg"
            alt="Flip Logo"
            sx={{
              height: 60,
              width: "auto",
              mb: 1,
            }}
          />

          <Typography variant="body2" align="center" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} Flip Inverted Arts. All rights
            reserved.
          </Typography>

          <Divider
            sx={{ width: "100%", borderColor: "rgba(255, 255, 255, 0.68)" }}
          />

          <Stack direction="row" spacing={2} alignItems="center">
            <IconButton
              color="inherit"
              href="https://www.instagram.com/flipinvertedarts/"
              target="_blank"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.facebook.com/flipinvertedarts"
              target="_blank"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.youtube.com/channel/UCT1limIsrVsUT-8QmCx_nuQ"
              target="_blank"
              aria-label="Youtube"
            >
              <YoutubeIcon />
            </IconButton>
          </Stack>

          <Button
            variant="outlined"
            color="inherit"
            sx={{
              borderColor: "rgba(255, 255, 255, 0.5)",
              "&:hover": {
                borderColor: "#fff",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
              },
            }}
          >
            Contact Us
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
