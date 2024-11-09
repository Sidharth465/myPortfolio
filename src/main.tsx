import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/index.tsx";
import ContactUs from "./pages/contact-us/index.tsx";
import Experience from "./pages/Experience/index.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
