import { useTranslation } from "react-i18next";
import { Container, Typography, Box, Grid } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HalfPageLanding from "../components/HalfPageLanding";
import { useMemo } from "react";
// import landing_faq from "../assets/footer/landing_faq.webp";

const R2_URL = import.meta.env.VITE_R2_URL;

function FAQuestion({ title, text }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        mb: 4,
      }}
    >
      <Box sx={{ mr: 2, color: "primary.main", mt: 0.5 }}>
        <HelpOutlineIcon sx={{ fontSize: 40 }} />
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {text}
        </Typography>
      </Box>
    </Box>
  );
}

export default function FooterFAQ() {
  const { t } = useTranslation();

  const faqData1 = useMemo(
    () => [
      {
        id: 1,
        question: t("footer-pages.faq.kids-gymnastics.q1.question"),
        answer: t("footer-pages.faq.kids-gymnastics.q1.answer"),
      },
      {
        id: 2,
        question: t("footer-pages.faq.kids-gymnastics.q2.question"),
        answer: t("footer-pages.faq.kids-gymnastics.q2.answer"),
      },
      {
        id: 3,
        question: t("footer-pages.faq.kids-gymnastics.q3.question"),
        answer: t("footer-pages.faq.kids-gymnastics.q3.answer"),
      },
    ],
    [t],
  );

  const faqData2 = useMemo(
    () => [
      {
        id: 1,
        question: t("footer-pages.faq.flexibility-flow.q1.question"),
        answer: t("footer-pages.faq.flexibility-flow.q1.answer"),
      },
      {
        id: 2,
        question: t("footer-pages.faq.flexibility-flow.q2.question"),
        answer: t("footer-pages.faq.flexibility-flow.q2.answer"),
      },
      {
        id: 3,
        question: t("footer-pages.faq.flexibility-flow.q3.question"),
        answer: t("footer-pages.faq.flexibility-flow.q3.answer"),
      },
      {
        id: 4,
        question: t("footer-pages.faq.flexibility-flow.q4.question"),
        answer: t("footer-pages.faq.flexibility-flow.q4.answer"),
      },
      {
        id: 5,
        question: t("footer-pages.faq.flexibility-flow.q5.question"),
        answer: t("footer-pages.faq.flexibility-flow.q5.answer"),
      },
    ],
    [t],
  );

  const faqData3 = useMemo(
    () => [
      {
        id: 1,
        question: t("footer-pages.faq.general-questions.q1.question"),
        answer: t("footer-pages.faq.general-questions.q1.answer"),
      },
    ],
    [t],
  );

  return (
    <Box>
      <HalfPageLanding
        image={`${R2_URL}/landing/landing_faq.webp`}
        logo="/logos/flip_logo_half_landing_white_faq.svg"
      />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={2}>
          <Typography
            width="100%"
            variant="h4"
            fontWeight="bold"
            gutterBottom
            textAlign="center"
          >
            {t("footer-pages.faq.kids-gymnastics.title")}
          </Typography>
          {faqData1.map((item) => (
            <Grid item xs={12} md={6} key={item.id}>
              <FAQuestion title={item.question} text={item.answer} />
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={2}>
          <Typography width="100%" variant="h4" gutterBottom textAlign="center">
            {t("footer-pages.faq.flexibility-flow.title")}
          </Typography>
          {faqData2.map((item) => (
            <Grid item xs={12} md={6} key={item.id}>
              <FAQuestion title={item.question} text={item.answer} />
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={2}>
          <Typography width="100%" variant="h4" gutterBottom textAlign="center">
            {t("footer-pages.faq.general-questions.title")}
          </Typography>
          {faqData3.map((item) => (
            <Grid item xs={12} md={6} key={item.id}>
              <FAQuestion title={item.question} text={item.answer} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
