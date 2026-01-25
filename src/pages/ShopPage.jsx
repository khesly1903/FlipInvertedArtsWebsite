import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
import { useNavigate } from "react-router-dom";
import AnimatedTitle from "../components/AnimatedTitle";
import { useTranslation } from "react-i18next";

const ShopPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
          textAlign: "center",
          gap: 4,
          my: 8,
        }}
      >
        <ConstructionIcon
          sx={{ fontSize: 120, color: "text.secondary", opacity: 0.8 }}
        />

        <Box>
          <AnimatedTitle title={t("shop.comingSoon")} />
        </Box>

        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ maxWidth: "600px" }}
        >
          {t("shop.message")}
        </Typography>

        <Button
          variant="outlined"
          size="large"
          onClick={() => navigate("/")}
          sx={{ mt: 2 }}
        >
          {t("shop.returnHome")}
        </Button>
      </Box>
    </Container>
  );
};

export default ShopPage;
