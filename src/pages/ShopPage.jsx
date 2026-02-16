import React, { useState } from "react";
import { Box, Container, Grid, Button, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import ShopCard from "../components/ShopCard";
import { shopItems, shopTags } from "../data/shop";


import HalfPageLanding from "../components/HalfPageLanding";
import shopLanding from "../assets/shop/landing_shop.webp";

import { useNavigate } from "react-router-dom";

const ShopPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeTag, setActiveTag] = useState("all");

  const filteredItems =
    activeTag === "all"
      ? shopItems
      : shopItems.filter((item) => item.tags && item.tags.includes(activeTag));

  return (
    <>
      <HalfPageLanding
        image={shopLanding}
        // logo="/logos/flip_logo_half_landing_white_shop.svg"
        logo="./flip_logo.svg"
        title={t("home.shop")}
      />
      <Container maxWidth="xl" sx={{ mt: 8, mb: 8 }}>
        {/* Filter Buttons */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          flexWrap="wrap"
          useFlexGap
          sx={{ mb: 6 }}
        >
          {shopTags.map((tag) => (
            <Button
              key={tag.id}
              variant={activeTag === tag.id ? "contained" : "outlined"}
              onClick={() => setActiveTag(tag.id)}
              sx={{
                borderRadius: "20px",
                textTransform: "capitalize",
                boxShadow: activeTag === tag.id ? 2 : 0,
              }}
            >
              {t(tag.label)}
            </Button>
          ))}
        </Stack>

        <Grid container spacing={4} justifyContent="center">
          {filteredItems.map((item) => (
            <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
              <ShopCard
                image={item.images[0].src}
                title={t(item.title)}
                price={item.price}
                description={t(item.description)}
                onClick={() => navigate(`/shop/${item.slug}`)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ShopPage;
