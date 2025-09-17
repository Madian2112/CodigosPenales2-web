import { useParams } from "react-router-dom";
import { useState, useMemo } from "react";
import Header from "../components/Header";
import { allLeyes } from "../core";
import Footer from "../components/Footer";

export default function LeyArticuloPage() {
  const { codigoId } = useParams<{ codigoId: string }>();
  const [searchTerm, setSearchTerm] = useState("");
  const codigo = codigoId ? allLeyes[codigoId] : null;

  const filteredEstructura = useMemo(() => {
    if (!codigo) return [];
    if (!searchTerm) {
      return codigo.estructura;
    }

    const lowercasedFilter = searchTerm.toLowerCase();

    return codigo.estructura
      .map((parte) => {
        const filteredSecciones = parte.secciones
          .map((seccion) => {
            const filteredArticulos = seccion.articulos.filter(
              (articulo) =>
                articulo.numero.toLowerCase().includes(lowercasedFilter) ||
                articulo.texto.toLowerCase().includes(lowercasedFilter)
            );
            return { ...seccion, articulos: filteredArticulos };
          })
          .filter((seccion) => seccion.articulos.length > 0);

        return { ...parte, secciones: filteredSecciones };
      })
      .filter((parte) => parte.secciones.length > 0);
  }, [searchTerm, codigo]);

  if (!codigo) {
    return (
      <>
        <Header />
        <main className="main-container" style={{ textAlign: 'center', padding: '40px 0' }}>
          <h1>Código no encontrado</h1>
          <p>El código que buscas no existe o no está disponible.</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="main-container">
        <div className="codigo-articulo-container">
          <h1 className="codigo-titulo">{codigo.titulo}</h1>

          <div className="search-articles-container">
            <input
              type="text"
              placeholder="Buscar por número o texto del artículo..."
              className="search-articles-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {filteredEstructura.length > 0 ? (
            filteredEstructura.map((parte, index) => (
              <div key={index}>
                {parte.secciones.map((seccion, secIndex) => (
                  <div key={secIndex} className="seccion-container">
                    <h3 className="seccion-titulo">{seccion.tituloSeccion}</h3>
                    <div className="articulos-grid">
                      {seccion.articulos.map((articulo, artIndex) => (
                        <div key={artIndex} className="articulo-card">
                          <div className="articulo-header">
                            <strong>{articulo.numero}</strong>
                          </div>
                          <div className="articulo-body">
                            <p>{articulo.texto}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p className="no-results-text">No se encontraron artículos que coincidan con la búsqueda.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
