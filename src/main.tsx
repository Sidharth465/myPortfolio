import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import NotFound from "@pages/NotFound/NotFound.tsx";
import { HelmetProvider } from "react-helmet-async";



createRoot(document.getElementById("root")!).render(
  <StrictMode >
    <HelmetProvider>
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<App />}/>
      <Route  path="/*" element={<NotFound />}/>
    </Routes>
    </BrowserRouter>
    </HelmetProvider>

  </StrictMode>
);
