// schedule cards
import card_zamalek_studio from "../assets/schedules/card/card_zamalek_studio.webp";
import card_maadi from "../assets/schedules/card/card_maadi.webp";
import card_new_cairo from "../assets/schedules/card/card_new_cairo.webp";
import card_gezira_club_zamalek from "../assets/schedules/card/card_gezira_club_zamalek.webp";
import card_diplo from "../assets/schedules/card/card_diplo.webp";
import card_almaza from "../assets/schedules/card/card_almaza.webp";
import card_october from "../assets/schedules/card/card_october.webp";
import card_zayed from "../assets/schedules/card/card_zayed.webp";

// schedule landging
import landing_skeikh_zayed from "../assets/schedules/landing/landing_skeikh_zayed.webp";
import landing_gezira_club_october from "../assets/schedules/landing/landing_gezira_club_october.webp";
import landing_gezira_club_zamalek from "../assets/schedules/landing/landing_gezira_club_zamalek.webp";
import landing_new_cairo from "../assets/schedules/landing/landing_new_cairo.webp";
import landing_diplo from "../assets/schedules/landing/landing_diplo.webp";
import landing_almaza from "../assets/schedules/landing/landing_almaza.webp";
import landing_maadi from "../assets/schedules/landing/landing_maadi.webp";
import landing_zamalek_studio from "../assets/schedules/landing/landing_zamalek_studio.webp";

// current schedule images
import october_1 from "../assets/schedules/october_1.webp";
// import october_2 from "../assets/schedules/6oct_2.webp";
// import october_3 from "../assets/schedules/6oct_3.webp";

import zamalek_club_1 from "../assets/schedules/zamalek_club_1.webp";
// import zamalek_club_2 from "../assets/schedules/zamalek_club_2.webp";
// import zamalek_club_3 from "../assets/schedules/zamalek_club_3.webp";

import zamalek_studio_1 from "../assets/schedules/zamalek_studio_1.webp";
// import zamalek_studio_2 from "../assets/schedules/zamalek_studio_2.webp";
// import zamalek_studio_3 from "../assets/schedules/zamalek_studio_3.webp";

import maadi_1 from "../assets/schedules/maadi_1.webp";
import maadi_2 from "../assets/schedules/maadi_2.webp";
import maadi_3 from "../assets/schedules/maadi_3.webp";

import zayed_1 from "../assets/schedules/zayed_1.webp";
// import zayed_2 from "../assets/schedules/zayed_2.webp";
// import zayed_3 from "../assets/schedules/zayed_3.webp";

import new_cairo_1 from "../assets/schedules/new_cairo_1.webp";
// import new_cairo_2 from "../assets/schedules/new_cairo_2.webp";
// import new_cairo_3 from "../assets/schedules/new_cairo_3.webp";

// import almaza_1 from "../assets/schedules/almaza_1.webp";
// import almaza_2 from "../assets/schedules/almaza_2.webp";
// import almaza_3 from "../assets/schedules/almaza_3.webp";

// import diplo_1 from "../assets/schedules/diplo_1.webp";
// import diplo_2 from "../assets/schedules/diplo_2.webp";
// import diplo_3 from "../assets/schedules/diplo_3.webp";

export const schedules = [
  {
    id: "1",
    location: "schedules.gezira-club-october.title",
    image: card_october,
    path: "gezira-club-october",
    details: {
      description: "schedules.gezira-club-october.description",
      formDescription: "schedules.gezira-club-october.form-description",
      landingImage: landing_gezira_club_october,
      images: [
        october_1,
        // october_2,
        // october_3,
      ],
      mapLocation:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.2023679415843!2d31.032923900000004!3d30.0023451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585150080ab1d3%3A0xa560f4ffcaf9ed3c!2sGezira%20Sporting%20Club%206%20October!5e0!3m2!1str!2seg!4v1770743841815!5m2!1str!2seg",
      contact: "https://wa.me/201210754286",
    },
  },
  {
    id: "2",
    location: "schedules.gezira-club-zamalek.title",
    image: card_gezira_club_zamalek,
    path: "gezira-club-zamalek",
    details: {
      description: "schedules.gezira-club-zamalek.description",
      formDescription: "schedules.gezira-club-zamalek.form-description",
      landingImage: landing_gezira_club_zamalek,
      images: [
        zamalek_club_1,
        // zamalek_club_2,
        // zamalek_club_3,
      ],
      mapLocation:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.4324367997915!2d31.223583099999995!3d30.053136700000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840de9bd3d3df%3A0x8446580f30d1902f!2sGezira%20Sporting%20Club!5e0!3m2!1str!2seg!4v1770743685680!5m2!1str!2seg",
      contact: "https://wa.me/201210754286",
    },
  },
  {
    id: "3",
    location: "schedules.zamalek-studio.title",
    image: card_zamalek_studio,
    path: "zamalek",
    details: {
      description: "schedules.zamalek-studio.description",
      formDescription: "schedules.zamalek-studio.form-description",
      landingImage: landing_zamalek_studio,
      images: [
        zamalek_studio_1,
        // zamalek_studio_2,
        // zamalek_studio_3,
      ],
      mapLocation:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.4324367997915!2d31.223583099999995!3d30.053136700000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840de9bd3d3df%3A0x8446580f30d1902f!2sGezira%20Sporting%20Club!5e0!3m2!1str!2seg!4v1770743685680!5m2!1str!2seg",
      contact: "https://wa.me/201210754286",
    },
  },
  {
    id: "4",
    location: "schedules.maadi.title",
    image: card_maadi,
    path: "maadi",
    details: {
      description: "schedules.maadi.description",
      formDescription: "schedules.maadi.form-description",
      landingImage: landing_maadi,
      images: [maadi_2, maadi_3, maadi_1],
      mapLocation:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.736334479096!2d31.2709341!3d29.958261800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458380c4dcb4b71%3A0x158071c9865714ff!2sSteel%20Fitness%20Club%20Egypt!5e0!3m2!1str!2seg!4v1770743876471!5m2!1str!2seg",
      contact: "https://wa.me/201210754286",
    },
  },

  {
    id: "5",
    location: "schedules.sheikh-zayed.title",
    image: card_zayed,
    path: "sheikh-zayed",
    details: {
      description: "schedules.sheikh-zayed.description",
      formDescription: "schedules.sheikh-zayed.form-description",
      landingImage: landing_skeikh_zayed,
      images: [
        zayed_1,
        // zayed_2,
        // zayed_3,
      ],
      mapLocation:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.099976899289!2d30.947381300000004!3d30.062668599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145859abe2f55b17%3A0x4c3a00b53bc6f794!2sBeverly%20Hills%20Club%20House!5e0!3m2!1str!2seg!4v1770743932955!5m2!1str!2seg",
      contact: "https://wa.me/201210754286",
    },
  },
  {
    id: "6",
    location: "schedules.new-cairo.title",
    image: card_new_cairo, // Fallback as no image provided
    path: "new-cairo",
    details: {
      description: "schedules.new-cairo.description",
      formDescription: "schedules.new-cairo.form-description",
      landingImage: landing_new_cairo,
      images: [
        new_cairo_1,
        // new_cairo_2,
        // new_cairo_3,
      ],
      mapLocation:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.1967305371827!2d31.401613600000005!3d30.002507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d23bc964e71%3A0x9fde5af72d172bc7!2sAerial%20Grace%20New%20Cairo!5e0!3m2!1str!2seg!4v1770743965349!5m2!1str!2seg",
      contact: "https://wa.me/201210754286",
    },
  },
  {
    id: "7",
    location: "schedules.almaza-bay.title",
    image: card_almaza, // Fallback as no image provided
    path: "almaza-bay",
    details: {
      description: "schedules.almaza-bay.description",
      formDescription: "schedules.almaza-bay.form-description",
      landingImage: landing_almaza,
      images: [
        "/coming_soon.webp",
        // almaza_1,
        // almaza_2,
        // almaza_3
      ],
      mapLocation:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.906598916634!2d27.561495999999998!3d31.195603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1461ddd010cc6cc1%3A0x34524a614503298d!2sWhite%20%26%20Blue%20-%20Almaza%20Bay!5e0!3m2!1str!2seg!4v1770743993961!5m2!1str!2seg",
      contact: "https://wa.me/201210754286",
    },
  },
  {
    id: "8",
    location: "schedules.diplo.title",
    image: card_diplo, // Fallback as no image provided
    path: "diplo",
    details: {
      description: "schedules.diplo.description",
      formDescription: "schedules.diplo.form-description",
      landingImage: landing_diplo,
      images: [
        "/coming_soon.webp",
        // diplo_1,
        // diplo_2,
        // diplo_3,
      ],
      mapLocation:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.646965811265!2d28.7778838!3d30.95242300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145ffb86017ecd8f%3A0x21502b1cc02078bc!2sDiplo%203%20Sidi%20Abdel%20Rahman!5e0!3m2!1str!2seg!4v1770744058720!5m2!1str!2seg",
      contact: "https://wa.me/201210754286",
    },
  },
];
