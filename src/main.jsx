import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Concept from "./pages/Concept.jsx";
import Menu from "./pages/Menu.jsx";
import BookingSpace from "./pages/BookingSpace.jsx";
import BookingTable from "./pages/BookingTable.jsx";
import Team from "./pages/Team.jsx";
import Jobs from "./pages/Jobs.jsx";
import Newsletter from "./pages/Newsletter.jsx";

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
        path: "/réservation/espace",
        element: <BookingSpace />,
      },
      {
        path: "/réservation/table",
        element: <BookingTable />,
      },
      {
        path: "/équipe",
        element: <Team />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
