import { Container, Typography, Box, Grid } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import landing from "../assets/landing.webp";
import HalfPageLanding from "../components/HalfPageLanding";

const faqData1 = [
  {
    id: 1,
    question: "What if I can’t do the splits?",
    answer:
      "No problem!  That’s what we’re here for is to learn how to safely get just 1 cm closer, and keep progressing from there.",
  },
  {
    id: 2,
    question: "I’m not flexible at all. Can I still join?",
    answer:
      "Of course!!  The point of the course is to increase your flexibility no matter what level you’re currently at.  So let’s work on it together!",
  },
  {
    id: 3,
    question: "Am I too old to become more flexible?",
    answer:
      "When it comes to flexibility, your only physical limits are your bones and joints.  The muscles are what we work with to lengthen and extend to give you more room to move about your joints.  So, as long as your muscles are in normal condition, then we will be able to increase your flexibility and therefore mobility as well.  Stick to the course, follow the techniques, and you’ll get the progress you’re looking for no matter what age you are.  You can get there with dedication even if you’re over 70 years old.",
  },
  {
    id: 4,
    question: "What if I have an injury?",
    answer:
      "If it’s a recent injury, we don’t recommend a flexibility program unless specifically prescribed to you by your doctor.  If it’s an old injury, this is the best program for you! Old injuries left unattended build scar tissues in the muscles that you need to release through direct intervention.",
  },
  {
    id: 5,
    question: "What if I have an injury?",
    answer:
      "If it’s a recent injury, we don’t recommend a flexibility program unless specifically prescribed to you by your doctor.  If it’s an old injury, this is the best program for you! Old injuries left unattended build scar tissues in the muscles that you need to release through direct intervention.",
  },
  {
    id: 6,
    question: "What if I have an injury?",
    answer:
      "If it’s a recent injury, we don’t recommend a flexibility program unless specifically prescribed to you by your doctor.  If it’s an old injury, this is the best program for you! Old injuries left unattended build scar tissues in the muscles that you need to release through direct intervention.",
  },
  {
    id: 7,
    question:
      "What if I have a disc like a bulging or herniated disc in my spine?",
    answer:
      "For most cases that are not severe, this can be quite easily fixed with directed flexibility & strength. We can cover this in your personalized plan when you register for a package.",
  },
  {
    id: 8,
    question: "How does flexibility help professional athletes?",
    answer:
      "Flexibility is a very important element to playing your sport well.  First to increase or maintain the range the motion you need for your most efficient backstroke, for example, for a swimmer; or, to hit a great forehand/backhand for a squash or tennis player; or to avoid pulling a hamstring for a soccer player kicking the ball a long distance.  And secondly, to decrease your recovery time so you can hit the court again the next day feeling fresh!  Julia has worked with Professional Men’s Women’s Squash players seated in the top 20 in the world, tennis athletes, gymnasts and professional soccer players on implementing a flexibility program to prevent injuries, increase their mobility specific to their sport, and recovering from their injuries.",
  },
];

const faqData2 = [
  {
    id: 1,
    question: "Can my child still join gymnastics with no prior training?",
    answer:
      "Yes, of course! We offer a recreational program that accomodates everyone at the current training level. Registration is ongoing so you can join anytime!",
  },
];

const faqData3 = [
  {
    id: 1,
    question: "What if my internet connection drops?",
    answer:
      "Well, for online classes, it's your responsibility to make sure you have a strong and stable internet connection before you start. There are no make up classes or refunds for online classes.",
  },
];

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
  return (
    <Box>
      <HalfPageLanding
        image={landing}
        title1="So many Questions!"
        title2="FAQ"
      />
      <Container maxWidth="lg" sx={{ py: 8 }}>

        <Grid container spacing={2}>
          <Typography width="100%" variant="h4" gutterBottom textAlign="center">
            Flexibility Flow
          </Typography>
          {faqData1.map((item) => (
            <Grid item xs={12} md={6} key={item.id}>
              <FAQuestion title={item.question} text={item.answer} />
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={2}>
          <Typography width="100%" variant="h4" gutterBottom textAlign="center">
            Kids Gymnastics
          </Typography>
          {faqData2.map((item) => (
            <Grid item xs={12} md={6} key={item.id}>
              <FAQuestion title={item.question} text={item.answer} />
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={2}>
          <Typography width="100%" variant="h4" gutterBottom textAlign="center">
            General Questions
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
