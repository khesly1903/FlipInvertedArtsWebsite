// Mats
import mat_video from "../assets/shop/mats/mat_video.mp4";
import mat_black_1 from "../assets/shop/mats/mat_black_1.webp";
import mat_black_2 from "../assets/shop/mats/mat_black_2.webp";
import mat_black_3 from "../assets/shop/mats/mat_black_3.webp";
import mat_black_4 from "../assets/shop/mats/mat_black_4.webp";
import mat_black_5 from "../assets/shop/mats/mat_black_5.webp";
import mat_black_6 from "../assets/shop/mats/mat_black_6.webp";
import mat_black_7 from "../assets/shop/mats/mat_black_7.webp";
import mat_black_8 from "../assets/shop/mats/mat_black_8.webp";
import mat_black_9 from "../assets/shop/mats/mat_black_9.webp";
import mat_blue_1 from "../assets/shop/mats/mat_blue_1.webp";

// Pants
import pants_adult_1 from "../assets/shop/pants/pants_adult_1.webp";
import pants_adult_2 from "../assets/shop/pants/pants_adult_2.webp";
import pants_adult_3 from "../assets/shop/pants/pants_adult_3.webp";
import pants_adult_4 from "../assets/shop/pants/pants_adult_4.webp";

// Crop Set Shorts
import crop_set_shorts_1 from "../assets/shop/crop_set_shorts/crop_set_shorts_1.webp";
import crop_set_shorts_2 from "../assets/shop/crop_set_shorts/crop_set_shorts_2.webp";
import crop_set_shorts_3 from "../assets/shop/crop_set_shorts/crop_set_short_3.webp";
import crop_set_shorts_4 from "../assets/shop/crop_set_shorts/crop_set_shorts_4.webp";

// Long Sleeves
import long_sleeve_kids_1 from "../assets/shop/long_sleeves_kids/long_sleeve_kids_1.webp";
import long_sleeve_kids_2 from "../assets/shop/long_sleeves_kids/long_sleeve_kids_2.webp";
import long_sleeve_kids_3 from "../assets/shop/long_sleeves_kids/long_sleeve_kids_3.webp";
import long_sleeve_kids_4 from "../assets/shop/long_sleeves_kids/long_sleeve_kids_4.webp";

// Short Sleeves
import short_sleeve_1 from "../assets/shop/short_sleeves/short_sleeve_1.webp";
import short_sleeve_2 from "../assets/shop/short_sleeves/short_sleeve_2.webp";

// Tank Tops
import tank_top_male_1 from "../assets/shop/tank_tops/tank_top_male_1.webp";
import tank_top_male_2 from "../assets/shop/tank_tops/tank_top_male_2.webp";
import tank_top_male_3 from "../assets/shop/tank_tops/tank_top_male_3.webp";
import tank_top_male_4 from "../assets/shop/tank_tops/tank_top_male_4.webp";

export const shopCategories = [
  { id: "long-sleeve", name: "shop.categories.long-sleeve" },
  { id: "short-sleeve", name: "shop.categories.short-sleeve" },
  { id: "tank-tops", name: "shop.categories.tank-tops" },
  { id: "pants", name: "shop.categories.pants" },
  { id: "crop-set-shorts", name: "shop.categories.crop-set-shorts" },
  { id: "crop-set-skort", name: "shop.categories.crop-set-skort" },
  { id: "training-leotards", name: "shop.categories.training-leotards" },
  { id: "jackets", name: "shop.categories.jackets" },
  { id: "mats", name: "shop.categories.mats" },
];

export const shopTags = [
  { id: "all", label: "shop.tags.all" },
  { id: "apparel", label: "shop.tags.apparel" },
  { id: "equipment", label: "shop.tags.equipment" },
  { id: "tops", label: "shop.tags.tops" },
  { id: "bottoms", label: "shop.tags.bottoms" },
  { id: "sets", label: "shop.tags.sets" },
];

export const shopItems = [
  {
    id: "1",
    category: "mats",
    title: "shop.mat.title",
    price: "Ask us for a quote",
    description: "shop.mat.description",
    type: "equipment", // apparel, equipment, accessory etc.
    availability: "available", // available, out-of-stock, preorder
    tags: ["equipment", "mats"],
    slug: "flip-mat",
    images: [
      { src: mat_black_1, alt: "Flip Mat Black 1" },
      { src: mat_black_2, alt: "Flip Mat Black 2" },
      { src: mat_black_3, alt: "Flip Mat Black 3" },
      { src: mat_black_4, alt: "Flip Mat Black 4" },
      { src: mat_black_5, alt: "Flip Mat Black 5" },
      { src: mat_black_6, alt: "Flip Mat Black 6" },
      { src: mat_black_7, alt: "Flip Mat Black 7" },
      { src: mat_black_8, alt: "Flip Mat Black 8" },
      { src: mat_black_9, alt: "Flip Mat Black 9" },
      { src: mat_blue_1, alt: "Flip Mat Blue 1" },
    ],
    video: mat_video,
    variants: [
      {
        id: "mat-black",
        name: "Black",
        colorCode: "#000000",
        images: [
          mat_black_1,
          mat_black_2,
          mat_black_3,
          mat_black_4,
          mat_black_5,
          mat_black_6,
          mat_black_7,
          mat_black_8,
          mat_black_9,
        ],
      },
      {
        id: "mat-blue",
        name: "Blue",
        colorCode: "#1E90FF",
        images: [mat_blue_1],
      },
    ],
    details: [
      "shop.mat.details.1",
      "shop.mat.details.2",
      "shop.mat.details.3",
      "shop.mat.details.4",
    ],
  },
  //{
  //id: "2",
  //category: "long-sleeve",
  //title: "shop.long-sleeve.title",
  //price: "1000 le",
  //description: "shop.long-sleeve.description",
  //type: "apparel",
  //availability: "available",
  //tags: ["apparel", "tops", "long-sleeve"],
  //slug: "long-sleeve-top",
  //images: [
  //{ src: long_sleeve_kids_1, alt: "Long Sleeve Kids 1" },
  //{ src: long_sleeve_kids_2, alt: "Long Sleeve Kids 2" },
  //{ src: long_sleeve_kids_3, alt: "Long Sleeve Kids 3" },
  //{ src: long_sleeve_kids_4, alt: "Long Sleeve Kids 4" },
  //],
  //variants: [],
  //details: [
  //"shop.long-sleeve.details.1",
  //"shop.long-sleeve.details.2",
  //"shop.long-sleeve.details.3",
  //"shop.long-sleeve.details.4",
  //],
  //},
  {
    id: "3",
    category: "short-sleeve",
    title: "shop.short-sleeve.title",
    price: "500 le",
    description: "shop.short-sleeve.description",
    type: "apparel",
    availability: "available",
    tags: ["apparel", "tops", "short-sleeve"],
    slug: "short-sleeve-tee",
    images: [
      { src: short_sleeve_1, alt: "Short Sleeve 1" },
      { src: short_sleeve_2, alt: "Short Sleeve 2" },
    ],
    variants: [],
    details: [
      "shop.short-sleeve.details.1",
      "shop.short-sleeve.details.2",
      "shop.short-sleeve.details.3",
      "shop.short-sleeve.details.4",
    ],
  },
  {
    id: "4",
    category: "tank-tops",
    title: "shop.tank-tops.title",
    price: "350 le",
    description: "shop.tank-tops.description",
    type: "apparel",
    availability: "available",
    tags: ["apparel", "tops", "tank-tops"],
    slug: "training-tank-top",
    images: [
      { src: tank_top_male_1, alt: "Tank Top Male 1" },
      { src: tank_top_male_2, alt: "Tank Top Male 2" },
      { src: tank_top_male_3, alt: "Tank Top Male 3" },
      { src: tank_top_male_4, alt: "Tank Top Male 4" },
    ],
    variants: [],
    details: [
      "shop.tank-tops.details.1",
      "shop.tank-tops.details.2",
      "shop.tank-tops.details.3",
      "shop.tank-tops.details.4",
    ],
  },
  // {
  //   id: "5",
  //   category: "pants",
  //   title: "shop.pants.title",
  //   price: "1200 le",
  //   description: "shop.pants.description",
  //   type: "apparel",
  //   availability: "available",
  //   tags: ["apparel", "bottoms", "pants"],
  //   slug: "gymnastics-pants",
  //   images: [
  //     { src: pants_adult_1, alt: "Pants Adult 1" },
  //     { src: pants_adult_2, alt: "Pants Adult 2" },
  //     { src: pants_adult_3, alt: "Pants Adult 3" },
  //     { src: pants_adult_4, alt: "Pants Adult 4" },
  //   ],
  //   variants: [],
  //   details: [
  //     "shop.pants.details.1",
  //     "shop.pants.details.2",
  //     "shop.pants.details.3",
  //     "shop.pants.details.4",
  //   ],
  // },
  {
    id: "6",
    category: "crop-set-shorts",
    title: "shop.crop-set-shorts.title",
    price: "1250 le",
    description: "shop.crop-set-shorts.description",
    type: "apparel",
    availability: "available",
    tags: ["apparel", "sets", "crop-set-shorts"],
    slug: "crop-set-shorts",
    images: [
      { src: crop_set_shorts_1, alt: "Crop Set Shorts 1" },
      { src: crop_set_shorts_2, alt: "Crop Set Shorts 2" },
      { src: crop_set_shorts_3, alt: "Crop Set Shorts 3" },
      { src: crop_set_shorts_4, alt: "Crop Set Shorts 4" },
    ],
    variants: [],
    details: [
      "shop.crop-set-shorts.details.1",
      "shop.crop-set-shorts.details.2",
      "shop.crop-set-shorts.details.3",
      "shop.crop-set-shorts.details.4",
    ],
  },
  // {
  //   id: "7",
  //   category: "crop-set-skort",
  //   title: "shop.crop-set-skort.title",
  //   price: "1600 le",
  //   description: "shop.crop-set-skort.description",
  //   type: "apparel",
  //   availability: "available",
  //   tags: ["apparel", "sets", "crop-set-skort"],
  //   slug: "crop-set-skort",
  //   images: [{ src: mat_black_1, alt: "Crop Set Skort" }],
  //   variants: [],
  //   details: [
  //     "shop.crop-set-skort.details.1",
  //     "shop.crop-set-skort.details.2",
  //     "shop.crop-set-skort.details.3",
  //     "shop.crop-set-skort.details.4",
  //   ],
  // },
  // {
  //   id: "8",
  //   category: "training-leotards",
  //   title: "shop.training-leotards.title",
  //   price: "1400 le",
  //   description: "shop.training-leotards.description",
  //   type: "apparel",
  //   availability: "available",
  //   tags: ["apparel", "leotards"],
  //   slug: "training-leotard",
  //   images: [{ src: mat_black_1, alt: "Training Leotard" }],
  //   variants: [],
  //   details: [
  //     "shop.training-leotards.details.1",
  //     "shop.training-leotards.details.2",
  //     "shop.training-leotards.details.3",
  //     "shop.training-leotards.details.4",
  //   ],
  // },
  // {
  //   id: "9",
  //   category: "jackets",
  //   title: "shop.jackets.title",
  //   price: "2000 le",
  //   description: "shop.jackets.description",
  //   type: "apparel",
  //   availability: "available",
  //   tags: ["apparel", "jackets"],
  //   slug: "flip-team-jacket",
  //   images: [{ src: mat_black_1, alt: "Jacket" }],
  //   variants: [],
  //   details: [
  //     "shop.jackets.details.1",
  //     "shop.jackets.details.2",
  //     "shop.jackets.details.3",
  //     "shop.jackets.details.4",
  //   ],
  // },
];
