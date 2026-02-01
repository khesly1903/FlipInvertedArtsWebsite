
import lyceeZamalek1 from '../assets/schedules/lycee_zamalek_1.png';
import maadi1 from '../assets/schedules/maadi_1.png';
import maadi2 from '../assets/schedules/maadi_2.png';
import maadi3 from '../assets/schedules/maadi_3.png';
import newCairo1 from '../assets/schedules/new_cairo_1.png';
import sheikhZayed1 from '../assets/schedules/skeikh_zayed_1.png';
import zamalekClub1 from '../assets/schedules/zamalek_club_1.png';
import zamalekStudio1 from '../assets/schedules/zamalek_studio_1.png';

import location_october from "../assets/schedules/location_october.jpeg";
import location_zayed from "../assets/schedules/location_zayed.jpeg";
import landing_gezira_club_october from "../assets/schedules/landing_gezira_club_october.jpeg";

import card_new_cairo from "../assets/schedules/card_new_cairo.jpeg";
import landing_new_cairo from "../assets/schedules/landing_new_cairo.jpeg";

import card_gezira_club_zamalek from "../assets/schedules/card_gezira_club_zamalek.jpeg";
import landing_gezira_club_zamalek from "../assets/schedules/landing_gezira_club_zamalek.jpeg";

import card_diplo from "../assets/schedules/card_diplo.jpeg";
import landing_diplo from "../assets/schedules/landing_diplo.jpeg";

import landing_zamalek_studio from "../assets/schedules/landing_zamalek_studio.jpeg";

import card_almaza from "../assets/schedules/card_almaza.jpeg";

export const schedules = [
    {
        id: "1",
        location: "schedules.gezira-club-october.title",
        image: location_october,
        path: "gezira-club-october",
        details: {
            description: "schedules.gezira-club-october.description",
            formDescription:"schedules.gezira-club-october.form-description",
            landingImage: landing_gezira_club_october,
            images: [
               zamalekStudio1,
                 zamalekClub1
            ],
            mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55230.14327299351!2d31.31298096645511!3d30.088892700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e21541f531d%3A0x7d77567781035540!2sHeliopolis%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1706020000000!5m2!1sen!2seg",
            contact: "https://wa.me/1234567890"
        },
    },
     {
        id: "2",
        location: "schedules.gezira-club-zamalek.title",
        image: card_gezira_club_zamalek,
        path: "gezira-club-zamalek",
        details: {
             description: "schedules.gezira-club-zamalek.description",
             formDescription:"schedules.gezira-club-zamalek.form-description",
             landingImage: landing_gezira_club_zamalek,
            images: [
                 zamalekStudio1,
                 zamalekClub1
            ],
            mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55230.14327299351!2d31.31298096645511!3d30.088892700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e21541f531d%3A0x7d77567781035540!2sHeliopolis%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1706020000000!5m2!1sen!2seg",
            contact: "https://wa.me/1234567890"
        },
    },
    {
        id: "3",
        location: "schedules.zamalek-studio.title",
        image: "/location_zamalek.jpeg",
        path: "zamalek",
        details: {
             description: "schedules.zamalek-studio.description",
             formDescription:"schedules.zamalek-studio.form-description",
             landingImage: landing_zamalek_studio,
            images: [
                zamalekStudio1,
                zamalekClub1,
                lyceeZamalek1
            ],
            mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55230.14327299351!2d31.31298096645511!3d30.088892700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e21541f531d%3A0x7d77567781035540!2sHeliopolis%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1706020000000!5m2!1sen!2seg",
            contact: "https://wa.me/1234567890"
        },
    },
    {
        id: "4",
        location: "schedules.maadi.title",
        image: "/location_maadi.jpeg",
        path: "maadi",
        details: {
             description: "schedules.maadi.description",
             formDescription:"schedules.maadi.form-description",
             landingImage: "/locations_landing_gezira_club_zamalek.jpeg",
            images: [
                maadi1,
                maadi2,
                maadi3
            ],
            mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55230.14327299351!2d31.31298096645511!3d30.088892700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e21541f531d%3A0x7d77567781035540!2sHeliopolis%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1706020000000!5m2!1sen!2seg",
            contact: "https://wa.me/1234567890"
        },
    },
    
    {
        id: "5",
        location: "schedules.sheikh-zayed.title",
        image: location_zayed,
        path: "sheikh-zayed",
        details: {
             description: "schedules.sheikh-zayed.description",
             formDescription:"schedules.sheikh-zayed.form-description",
             landingImage: "/locations_landing_gezira_club_zamalek.jpeg",
            images: [
                sheikhZayed1,
                sheikhZayed1, // Placeholder duplication
            ],
            mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55230.14327299351!2d31.31298096645511!3d30.088892700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e21541f531d%3A0x7d77567781035540!2sHeliopolis%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1706020000000!5m2!1sen!2seg",
            contact: "https://wa.me/1234567890"
        },
    },
    {
        id: "6",
        location: "schedules.new-cairo.title",
        image: card_new_cairo, // Fallback as no image provided
        path: "new-cairo",
        details: {
             description: "schedules.new-cairo.description",
             formDescription:"schedules.new-cairo.form-description",
             landingImage: landing_new_cairo,
            images: [
                 newCairo1,
                 maadi1
            ],
            mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55230.14327299351!2d31.31298096645511!3d30.088892700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e21541f531d%3A0x7d77567781035540!2sHeliopolis%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1706020000000!5m2!1sen!2seg",
            contact: "https://wa.me/1234567890"
        },
    },
     {
        id: "7",
        location: "schedules.almaza-bay.title",
        image: card_almaza, // Fallback as no image provided
        path: "almaza-bay",
        details: {
             description: "schedules.almaza-bay.description",
             formDescription:"schedules.almaza-bay.form-description",
             landingImage: "/locations_landing_gezira_club_zamalek.jpeg",
            images: [
                 newCairo1,
                 maadi1
            ],
            mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55230.14327299351!2d31.31298096645511!3d30.088892700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e21541f531d%3A0x7d77567781035540!2sHeliopolis%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1706020000000!5m2!1sen!2seg",
            contact: "https://wa.me/1234567890"
        },
    }, 
    {
        id: "8",
        location: "schedules.diplo.title",
        image: card_diplo, // Fallback as no image provided
        path: "diplo",
        details: {
             description: "schedules.diplo.description",
             formDescription:"schedules.diplo.form-description",
             landingImage: landing_diplo,
            images: [
                 newCairo1,
                 maadi1
            ],
            mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55230.14327299351!2d31.31298096645511!3d30.088892700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e21541f531d%3A0x7d77567781035540!2sHeliopolis%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1706020000000!5m2!1sen!2seg",
            contact: "https://wa.me/1234567890"
        },
    },

    
];