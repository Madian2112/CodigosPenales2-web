import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./App"
import LeyesPage from "./pages/Leyes"
import CodigosPage from "./pages/Codigos";
import CodigoArticuloPage from "./pages/CodigoArticuloPage";
// import "./globals.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leyes" element={<LeyesPage />} />
        <Route path="/codigos" element={<CodigosPage />} />
        <Route path="/codigos/:codigoId" element={<CodigoArticuloPage />} />
        {/* Agrega más rutas aquí si las necesitas */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
