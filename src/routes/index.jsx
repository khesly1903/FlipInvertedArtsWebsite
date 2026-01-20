import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import HomePage from "../pages/HomePage";
import ClassesPage from "../pages/ClassesPage";
import EventsPage from "../pages/EventsPage";
import SchedulesPage from "../pages/SchedulesPage";

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
    ],
  },
]);

export default router;
