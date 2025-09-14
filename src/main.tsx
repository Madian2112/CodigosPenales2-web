import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./App"
import LeyesPage from "./pages/Leyes"
import CodigosPage from "./pages/Codigos";
import CodigoArticuloPage from "./pages/CodigoArticuloPage";
import LeyArticuloPage from "./pages/LeyArticuloPage";
import DocumentosPage from "./pages/Documentos";
import DocumentoArticuloPage from "./pages/DocumentoArticuloPage"
// import "./globals.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leyes" element={<LeyesPage />} />
        <Route path="/leyes/:codigoId" element={<LeyArticuloPage />} />
        <Route path="/codigos" element={<CodigosPage />} />
        <Route path="/codigos/:codigoId" element={<CodigoArticuloPage />} />
        <Route path="/documentos" element={<DocumentosPage />} />
        <Route path="/documentos/:codigoId" element={<DocumentoArticuloPage />} />
        {/* Agrega más rutas aquí si las necesitas */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
