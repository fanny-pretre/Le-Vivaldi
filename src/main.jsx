import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Concept from "./pages/Concept.jsx";
import Menu from "./pages/Menu.jsx";
import Booking from "./pages/Booking.jsx";
import Team from "./pages/Team.jsx";

import App from "./App.jsx";

import "./styles/index.scss";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/concept",
        element: <Concept />,
      },
      {
        path: "/carte",
        element: <Menu />,
      },
      {
        path: "/réservation",
        element: <Booking />,
      },
      {
        path: "/équipe",
        element: <Team />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
