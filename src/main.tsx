import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import HomePage from "./App";
import LeyesPage from "./pages/Leyes";
import CodigosPage from "./pages/Codigos";
import CodigoArticuloPage from "./pages/CodigoArticuloPage";
import LeyArticuloPage from "./pages/LeyArticuloPage";
import DocumentosPage from "./pages/Documentos";
import DocumentoArticuloPage from "./pages/DocumentoArticuloPage";

// Creamos un componente raíz para incluir la restauración del scroll y el Outlet
const Root = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

// Definimos las rutas usando el nuevo formato de objetos
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/leyes", element: <LeyesPage /> },
      { path: "/leyes/:codigoId", element: <LeyArticuloPage /> },
      { path: "/codigos", element: <CodigosPage /> },
      { path: "/codigos/:codigoId", element: <CodigoArticuloPage /> },
      { path: "/documentos", element: <DocumentosPage /> },
      { path: "/documentos/:codigoId", element: <DocumentoArticuloPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
