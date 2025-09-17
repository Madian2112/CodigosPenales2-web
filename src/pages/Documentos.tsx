import Header from "../components/Header";
import DocumentCard from "../components/DocumentCard";
import Footer from "../components/Footer";

export default function DocumentosPage() {
  const documentos = [
    {
      id: "documento-constitucion-republica",
      title: "Constitución de la República",
      description: "Texto completo de la Constitución de Honduras con todas sus reformas incorporadas.",
      decreto: "Decreto 136-1982",
      actualizado: "Última reforma: 2021",
    },
    {
      id: "documento-reglamento-contratacion",
      title: "Reglamento de la Ley de Contratación del Estado",
      description: "Establece los procedimientos detallados para la contratación pública.",
      decreto: "Acuerdo 15-2021",
      actualizado: "Vigente",
    },
    {
      id: "documento-ley-general-ambiente",
      title: "Ley General del Ambiente",
      description: "Establece las normas para la protección, conservación y mejoramiento del ambiente.",
      decreto: "Decreto 104-2021",
      actualizado: "Vigente",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="laws-header">
          <div className="main-container">
            <h1>Documentos Legales de Honduras</h1>
            <p>Accede a decretos, reglamentos y otros documentos legales de Honduras</p>
          </div>
        </section>

        <section>
          <div className="main-container">
            <div className="laws-grid">
              {documentos.map((documento) => (
                <div key={documento.id} id={documento.id}>
                  <DocumentCard
                    id={documento.id}
                    title={documento.title}
                    description={documento.description}
                    decreto={documento.decreto}
                    actualizado={documento.actualizado}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
