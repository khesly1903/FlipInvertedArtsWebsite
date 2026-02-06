
import event1 from '../assets/events/event_1.webp';
import event2 from '../assets/events/event_2.webp';
import event3 from '../assets/events/event_3.webp';
import event4 from '../assets/events/event_4.webp';
import event5 from '../assets/events/event_5.webp';
import event6 from '../assets/events/event_6.webp';
import event7 from '../assets/events/event_7.webp';
import event10 from '../assets/events/event_10.webp';
import event12 from '../assets/events/event_12.webp';

/**
 * @typedef {'unavailable' | 'available' | 'upcoming'} Availability
 */

/**
 * @typedef {Object} Event  
 * @property {string} id
 * @property {string} title
 * @property {string} text
 * @property {Availability} availability
 * @property {{ src: string, alt: string }} image
 */

/** @type {Event[]} */
export const events = [
    // CURRENT EVENT CONFIG IS IN THE BELOW
    {
        id: "1",
        title: "Event 1",
        text: "Event 1 Text",
        availability: "unavailable",
        image: { src: event1, alt: "Event 1" },
    },
    {
        id: "2",
        title: "Event 2",
        text: "Event 2 Text",
        availability: "unavailable",
        image: { src: event2, alt: "Event 2" },
    },
    {
        id: "3",
        title: "Event 3",
        text: "Event 3 Text",
        availability: "unavailable",
        image: { src: event3, alt: "Event 3" },
    },
    {
        id: "4",
        title: "Event 4",
        text: "Event 4 Text",
        availability: "upcoming",
        image: { src: event4, alt: "Event 4" },
    },
    {
        id: "5",
        title: "Event 5",
        text: "Event 5 Text",
        availability: "unavailable",
        image: { src: event5, alt: "Event 5" },
    },
    {
        id: "6",
        title: "Event 6",
        text: "Event 6 Text",
        availability: "unavailable",
        image: { src: event6, alt: "Event 6" },
    },
    {
        id: "7",
        title: "Event 7",
        text: "Event 7 Text",
        availability: "unavailable",
        image: { src: event7, alt: "Event 7" },
    },
    {
        id: "8",
        title: "Event 8",
        text: "Event 8 Text",
        availability: "unavailable",
        image: { src: event10, alt: "Event 8" },
    },
    {
        id: "9",
        title: "Event 9",
        text: "Event 9 Text",
        availability: "upcoming",
        image: { src: event12, alt: "Event 9" },
    },
    {
        id: "9",
        title: "Event 9",
        text: "Event 9 Text",
        availability: "unavailable",
        image: { src: event12, alt: "Event 9" },
    },
    {
        id: "9",
        title: "Event 9",
        text: "Event 9 Text",
        availability: "available",
        description: "events.current-event-description",
        image: { src: event12, alt: "Event 9" },
        price: "2850 LE",
    },

];

// FOR THE CURRENT EVENT
// WE NEED DESCRIPTION FOR ONLY CURRENT ONE
// IT IS FOR THE REGISTRATION FORM
// description text is in the events.js file
// you can see in the events -> current-event-description