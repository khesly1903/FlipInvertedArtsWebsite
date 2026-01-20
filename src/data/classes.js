import classes_1 from "../assets/classes/classes_1.png";
import classes_2 from "../assets/classes/classes_2.png";
import classes_3 from "../assets/classes/classes_3.png";
import classes_4 from "../assets/classes/classes_4.png";
import classes_5 from "../assets/classes/classes_5.png";
import classes_6 from "../assets/classes/classes_6.png";
import classes_7 from "../assets/classes/classes_7.png";

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
 */

/** @type {Class[]} */
export const classes = [
  {
    id: '1',
    competitive:"competitive",
    type:'kids',
    slug: 'class1',
    title: 'Gymnastics Level 1',
    description:
      'Learn front and back rolls, basic jumps and build strength for handstands and cartwheels.',
    ageRange: 'Ages: 3.5 - 4.5',
    image: {
      src: classes_1,
      alt: 'Kids practicing yoga',
    },
    detail: {}
  },
  {
    id: '2', 
    competitive:"non-competitive",
    type:'kids',
    slug: 'class2',
    title: 'Gymnastics Level 2',
    description:
      'Strengthen handstand holds, cartwheels and learn front and back walkovers.',
    ageRange: 'Ages: 5 - 7',
    image: {
      src: classes_2,
      alt: 'Gymnastics Level 1',
    },
    detail: {}
  },
  {
    id: '3',
    competitive:"competitive",
    type:'kids',
    slug: 'class3',
    title: 'Gymnastics Level 3',
    description:
      'With increased strength and flexibilty, your child will learn front and back handsprings and round-offs.',
    ageRange: 'Ages: 8 - 10',
    image: {
      src: classes_3,
      alt: 'Gymnastics Level 3',
    },
    detail: {}
  },
  // {
  //   id: '4',
  //   competitive:"non-competitive",
  //   type:'adults',
  //   slug: 'class4',
  //   title: 'Flexibility Flow',
  //   description:
  //     'Increase your range of motion in forward and backward bending and spinal twists to progress towards splits, lotus and backbends.',
  //   ageRange: 'Ages: 14 - Adult',
  //   image: {
  //     src: classes_4,
  //     alt: 'Flexibility Flow',
  //   },
  //   detail: {}
  // },
  {
    id: '5',
    competitive:"competitive",
    type:'adults',
    slug: 'class5',
    title: 'Handstands',
    description:
      'Start your handstand journey learning the basics of hand balancing, other inversions and handstands.',
    ageRange: 'Ages: All Ages',
    image: {
      src: classes_5,
      alt: 'Handstands',
    },
    detail: {}
  },
  {
    id: '6',
    competitive:"competitive",
    type:'adults',
    slug: 'class6',
    title: 'Adult Gymnastics & Parkour',
    description:
      'Learn the basics of handstands, flips, climbing, jumping and vaulting with style.',
    ageRange: 'Ages: 14+',
    image: {
      src: classes_6,
      alt: 'Adult Gymnastics & Parkour',
    },
    detail: {}
  },
  {
    id: '7',
    competitive:"competitive",
    type:'adults',
    slug: 'class7',
    title: 'Personal Training',
    description:
      'Personalize your workout and train in anything we offer. Send us your goals and we will accomodate.',
    ageRange: 'Ages: All Ages',
    image: {
      src: classes_7,
      alt: 'Personal Training',
    },
    detail: {}
  }
];