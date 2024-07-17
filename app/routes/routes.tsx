import { createBrowserRouter } from "react-router-dom";

import HomePage from "@/app/pages/HomePage";
import RootLayout from "@/app/components/layouts/RootLayout";
import NotFoundPage from "@/app/pages/NotFoundPage";
import SchedulePage from "@/app/pages/SchedulePage";
import StationPage from "@/app/pages/StationPage";
import SchedulePageById from "@/app/pages/ScheduleById";
import AddReviewsPage from "@/app/pages/AddReviewsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/station",
        element: <StationPage />,
      },
      {
        path: "/schedule",
        element: <SchedulePage />,
      },
      {
        path: "/schedules/:id",
        element: <SchedulePageById />,
      },
      {
        path: "/add-reviews",
        element: <AddReviewsPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);