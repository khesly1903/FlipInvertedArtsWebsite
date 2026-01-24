import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import HomePage from "../pages/HomePage";
import ClassesPage from "../pages/ClassesPage";
import ClassDetailPage from "../pages/ClassDetailPage";
import EventsPage from "../pages/EventsPage";
import SchedulesPage from "../pages/SchedulesPage";
import ScheduleDetailPage from "../pages/ScheduleDetailPage";
import FooterAboutFlip from "../pages/FooterAboutFlip";
import FooterFAQ from "../pages/FooterFAQ";
import FooterPrivacyPolicy from "../pages/FooterPrivacyPolicy";
import FooterSafetyPage from "../pages/FooterSafetyPage";
import TestFormPage from "../pages/TestFormPage";
import ShopPage from "../pages/ShopPage";

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
        children: [
          {
            index: true,
            element: <ClassesPage />,
          },
          {
            path: ":slug",
            element: <ClassDetailPage />,
          },
        ],
      },
      {
        path: "events",
        element: <EventsPage />,
      },
      {
        path: "schedules",
        children: [
          {
            index: true,
            element: <SchedulesPage />,
          },
          {
            path: ":slug",
            element: <ScheduleDetailPage />,
          },
        ],
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
      {
        path: "form",
        element: <TestFormPage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
    ],
  },
]);

export default router;
