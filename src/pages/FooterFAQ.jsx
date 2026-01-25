import { useTranslation } from "react-i18next";
import { Container, Typography, Box, Grid } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import landing from "../assets/landing.webp";
import HalfPageLanding from "../components/HalfPageLanding";
import { useMemo } from "react";

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
      {
        id: 6,
        question: t("footer-pages.faq.flexibility-flow.q6.question"),
        answer: t("footer-pages.faq.flexibility-flow.q6.answer"),
      },
    ],
    [t],
  );

  const faqData2 = useMemo(
    () => [
      {
        id: 1,
        question: t("footer-pages.faq.kids-gymnastics.q1.question"),
        answer: t("footer-pages.faq.kids-gymnastics.q1.answer"),
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
        image={landing}
        title1={t("footer-pages.faq.subtitle")}
        title2={t("footer-pages.faq.title").toUpperCase()}
      />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={2}>
          <Typography width="100%" variant="h4" gutterBottom textAlign="center">
            {t("footer-pages.faq.flexibility-flow.title")}
          </Typography>
          {faqData1.map((item) => (
            <Grid item xs={12} md={6} key={item.id}>
              <FAQuestion title={item.question} text={item.answer} />
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={2}>
          <Typography width="100%" variant="h4" gutterBottom textAlign="center">
            {t("footer-pages.faq.kids-gymnastics.title")}
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
