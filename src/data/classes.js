import class_1_landing from "../assets/classes/class_1/class_1_landing.png";
import class_1_card from "../assets/classes/class_1/class_1_card.png";
import class_1_1 from "../assets/classes/class_1/class_1_1.png";
import class_1_2 from "../assets/classes/class_1/class_1_2.png";
import class_1_3 from "../assets/classes/class_1/class_1_3.png";
import class_1_4 from "../assets/classes/class_1/class_1_4.png";

import class_2_landing from "../assets/classes/class_2/class_2_landing.png";
import class_2_card from "../assets/classes/class_2/class_2_card.png";
import class_2_1 from "../assets/classes/class_2/class_2_1.png";
import class_2_2 from "../assets/classes/class_2/class_2_2.png";
import class_2_3 from "../assets/classes/class_2/class_2_3.png";
import class_2_4 from "../assets/classes/class_2/class_2_4.png";

import class_3_landing from "../assets/classes/class_3/class_3_landing.png";
import class_3_card from "../assets/classes/class_3/class_3_card.png";
import class_3_1 from "../assets/classes/class_3/class_3_1.png";
import class_3_2 from "../assets/classes/class_3/class_3_2.png";
import class_3_3 from "../assets/classes/class_3/class_3_3.png";
import class_3_4 from "../assets/classes/class_3/class_3_4.png";

import class_4_landing from "../assets/classes/class_4/class_4_landing.png";
import class_4_card from "../assets/classes/class_4/class_4_card.png";
import class_4_1 from "../assets/classes/class_4/class_4_1.png";
import class_4_2 from "../assets/classes/class_4/class_4_2.png";
import class_4_3 from "../assets/classes/class_4/class_4_3.png";
import class_4_4 from "../assets/classes/class_4/class_4_4.png";

import class_5_landing from "../assets/classes/class_5/class_5_landing.png";
import class_5_card from "../assets/classes/class_5/class_5_card.png";


import class_6_landing from "../assets/classes/class_6/class_6_landing.png";
import class_6_card from "../assets/classes/class_6/class_6_card.png";
import class_6_1 from "../assets/classes/class_6/class_6_1.png";
import class_6_2 from "../assets/classes/class_6/class_6_2.png";
import class_6_3 from "../assets/classes/class_6/class_6_3.png";
import class_6_4 from "../assets/classes/class_6/class_6_4.png";
import class_6_5 from "../assets/classes/class_6/class_6_5.png";
import class_6_6 from "../assets/classes/class_6/class_6_6.png";


/**
 * @typedef {'beginner' | 'intermediate' | 'advanced'} Level
 */

/**
 * @typedef {Object} Class
 * @property {string} id
 * @property {string} slug
 * @property {string} title
 * @property {string} shortDescription
 * @property {string} description
 * @property {string} ageRange
 * @property {string} duration
 * @property {Level} level
 * @property {{ src: string, alt: string }} image
 * @property {{ images: string[] }} detail
 * @property {{ src: string, alt: string }} slugImage
 */

/** @type {Class[]} */
export const classes = [
  {
    id: '1',
    competitive:"competitive",
    type:'kids',
    slug: 'gymnastics-level-1',
    title: 'Gymnastics Level 1',
    description:
      'Learn front and back rolls, basic jumps and build strength for handstands and cartwheels.',
    ageRange: 'Ages: 3.5 - 4.5',
    image: {
      src: class_1_card,
      alt: 'Kids practicing yoga',
    },
    slugImage: {
      src: class_1_landing,
      alt: 'Kids practicing yoga',
    },
    detail: [
      {
      id: '1',
      title: "Learn Forward Rolls",
      description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae at exercitationem quam quos ullam delectus deleniti voluptatibus totam voluptatum.",
      image: class_1_1
      },
      {
      id: '1',
      title: "Build Strength & Balance",
      description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae at exercitationem quam quos ullam delectus deleniti voluptatibus totam voluptatum.",
      image: class_1_2
      },
      {
      id: '1',
      title: "Basic Gymnastics Shapes",
      description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae at exercitationem quam quos ullam delectus deleniti voluptatibus totam voluptatum.",
      image: class_1_3
      },
      {
      id: '1',
      title: "Beginning Handstands",
      description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae at exercitationem quam quos ullam delectus deleniti voluptatibus totam voluptatum.",
      image: class_1_4
      },
      
    ]
  },
  {
    id: '2', 
    competitive:"non-competitive",
    type:'kids',
    slug: 'gymnastics-level-2',
    title: 'Gymnastics Level 2',
    description:
      'Strengthen handstand holds, cartwheels and learn front and back walkovers.',
    ageRange: 'Ages: 5 - 7',
    image: {
      src: class_2_card,
      alt: 'Gymnastics Level 1',
    },
     slugImage: {
      src: class_2_landing,
      alt: 'Kids practicing yoga',
    },
    detail: [
      {
      id: '1',
      title: "Learn Forward Rolls",
      description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae at exercitationem quam quos ullam delectus deleniti voluptatibus totam voluptatum.",
      image: class_2_1
      },
      {
      id: '2',
      title: "Build Strength & Balance",
      description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae at exercitationem quam quos ullam delectus deleniti voluptatibus totam voluptatum.",
      image: class_2_2
      },
      {
      id: '3',
      title: "Basic Gymnastics Shapes",
      description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae at exercitationem quam quos ullam delectus deleniti voluptatibus totam voluptatum.",
      image: class_2_3
      },
      {
      id: '4',
      title: "Beginning Handstands",
      description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae at exercitationem quam quos ullam delectus deleniti voluptatibus totam voluptatum.",
      image: class_2_4
      },
    ]
  },
  {
    id: '3',
    competitive:"competitive",
    type:'kids',
    slug: 'gymnastics-level-3',
    title: 'Gymnastics Level 3',
    description:
      'With increased strength and flexibilty, your child will learn front and back handsprings and round-offs.',
    ageRange: 'Ages: 8 - 10',
    image: {
      src: class_3_card,
      alt: 'Gymnastics Level 3',
    },
     slugImage: {
      src: class_3_landing,
      alt: 'Kids practicing yoga',
    },
    detail: [
      {
      id: '1',
      title: "Learn Forward Rolls",
      description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae at exercitationem quam quos ullam delectus deleniti voluptatibus totam voluptatum.",
      image: class_3_1
      },
      {
      id: '2',
      title: "Build Strength & Balance",
      description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae at exercitationem quam quos ullam delectus deleniti voluptatibus totam voluptatum.",
      image: class_3_2
      },
      {
      id: '3',
      title: "Basic Gymnastics Shapes",
      description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae at exercitationem quam quos ullam delectus deleniti voluptatibus totam voluptatum.",
      image: class_3_3
      },
      {
      id: '4',
      title: "Beginning Handstands",
      description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae at exercitationem quam quos ullam delectus deleniti voluptatibus totam voluptatum.",
      image: class_3_4
      },
    ]
  },
  {
    id: '4',
    competitive:"competitive",
    type:'adults',
    slug: 'handstands',
    title: 'Handstands',
    description:
      'Start your handstand journey learning the basics of hand balancing, other inversions and handstands.',
    ageRange: 'Ages: All Ages',
    image: {
      src: class_4_card,
      alt: 'Handstands',
    },
     slugImage: {
      src: class_4_landing,
      alt: 'Kids practicing yoga',
    },
    detail: [
      {
      id: '1',
      title: "Learn Forward Rolls",
      description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae at exercitationem quam quos ullam delectus deleniti voluptatibus totam voluptatum.",
      image: class_4_1
      },
      {
      id: '2',
      title: "Build Strength & Balance",
      description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae at exercitationem quam quos ullam delectus deleniti voluptatibus totam voluptatum.",
      image: class_4_2
      },
      {
      id: '3',
      title: "Basic Gymnastics Shapes",
      description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae at exercitationem quam quos ullam delectus deleniti voluptatibus totam voluptatum.",
      image: class_4_3
      },
      {
      id: '4',
      title: "Beginning Handstands",
      description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae at exercitationem quam quos ullam delectus deleniti voluptatibus totam voluptatum.",
      image: class_4_4
      },
    ]
  },
  {
    id: '5',
    competitive:"competitive",
    type:'adults',
    slug: 'adult-gymnastics-parkour',
    title: 'Adult Gymnastics & Parkour',
    description:
      'Learn the basics of handstands, flips, climbing, jumping and vaulting with style.',
    ageRange: 'Ages: 14+',
    image: {
      src: class_5_card,
      alt: 'Adult Gymnastics & Parkour',
    }, 
    slugImage: {
      src: class_5_landing,
      alt: 'Kids practicing yoga',
    },
    detail: [
     
    ]
  },
  {
    id: '6',
    competitive:"competitive",
    type:'adults',
    slug: 'personal-training',
    title: 'Personal Training',
    description:
      'Personalize your workout and train in anything we offer. Send us your goals and we will accomodate.',
    ageRange: 'Ages: All Ages',
    image: {
      src: class_6_card,
      alt: 'Personal Training',
    },
    slugImage: {
      src: class_6_landing,
      alt: 'Kids practicing yoga',
    },
    detail: [
      {
      id: '1',
      title: "Learn Forward Rolls",
      description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae at exercitationem quam quos ullam delectus deleniti voluptatibus totam voluptatum.",
      image: class_6_1
      },
      {
      id: '2',
      title: "Build Strength & Balance",
      description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae at exercitationem quam quos ullam delectus deleniti voluptatibus totam voluptatum.",
      image: class_6_2
      },
      {
      id: '3',
      title: "Basic Gymnastics Shapes",
      description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae at exercitationem quam quos ullam delectus deleniti voluptatibus totam voluptatum.",
      image: class_6_3
      },
      {
      id: '4',
      title: "Beginning Handstands",
      description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae at exercitationem quam quos ullam delectus deleniti voluptatibus totam voluptatum.",
      image: class_6_4
      },
      {
      id: '5',
      title: "Beginning Handstands",
      description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae at exercitationem quam quos ullam delectus deleniti voluptatibus totam voluptatum.",
      image: class_6_5
      },
      {
      id: '6',
      title: "Beginning Handstands",
      description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae at exercitationem quam quos ullam delectus deleniti voluptatibus totam voluptatum.",
      image: class_6_6
      },
    ]
  }
];