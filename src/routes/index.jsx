import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import HomePage from "../pages/HomePage";
import ClassesPage from "../pages/ClassesPage";
import EventsPage from "../pages/EventsPage";
import SchedulesPage from "../pages/SchedulesPage";
import FooterAboutFlip from "../pages/FooterAboutFlip";
import FooterFAQ from "../pages/FooterFAQ";
import FooterPrivacyPolicy from "../pages/FooterPrivacyPolicy";
import FooterSafetyPage from "../pages/FooterSafetyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "classes",
        element: <ClassesPage />,
      },
      {
        path: "events",
        element: <EventsPage />,
      },
      {
        path: "schedules",
        element: <SchedulesPage />,
      },
      {
        path: "about-flip",
        element: <FooterAboutFlip />,
      },
      {
        path: "faq",
        element: <FooterFAQ />,
      },
      {
        path: "privacy-policy",
        element: <FooterPrivacyPolicy />,
      },
      {
        path: "safety",
        element: <FooterSafetyPage />,
      },
    ],
  },
]);

export default router;
