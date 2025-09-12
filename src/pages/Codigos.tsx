import Header from "../components/Header";
import CodeCard from "../components/CodeCard";

export default function CodigosPage() {
  const codigos = [
    {
      id: "codigo-civil",
      title: "Código Civil",
      description:
        "Regula las relaciones civiles entre personas físicas y jurídicas, derechos reales y obligaciones.",
      decreto: "Decreto 73-2020",
      actualizado: "Actualizado 2023",
    },
    {
      id: "codigo-penal",
      title: "Código Penal",
      description:
        "Define los delitos y las penas aplicables, así como las reglas de responsabilidad criminal.",
      decreto: "Decreto 130-2017",
      actualizado: "Actualizado 2022",
    },
    {
      id: "codigo-procesal-penal",
      title: "Código Procesal Penal",
      description:
        "Establece el procedimiento para la investigación y juzgamiento de los delitos.",
      decreto: "Decreto 9-2019",
      actualizado: "Actualizado 2023",
    },
    {
      id: "codigo-comercio",
      title: "Código de Comercio",
      description:
        "Regula las actividades mercantiles, contratos comerciales y obligaciones de los comerciantes.",
      decreto: "Decreto 73-2020",
      actualizado: "Actualizado 2023",
    },
    {
      id: "codigo-familia",
      title: "Código de Familia",
      description:
        "Regula las relaciones familiares, matrimonio, divorcio, filiación y alimentos.",
      decreto: "Decreto 76-2020",
      actualizado: "Actualizado 2022",
    },
    {
      id: "codigo-trabajo",
      title: "Código de Trabajo",
      description:
        "Establece los derechos y obligaciones de trabajadores y empleadores en relaciones laborales.",
      decreto: "Decreto 189-1959",
      actualizado: "Actualizado 2023",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="laws-header">
          <div className="main-container">
            <h1>Códigos Legales de Honduras</h1>
            <p>Consulta los principales códigos que rigen el ordenamiento jurídico hondureño</p>
          </div>
        </section>

        <section>
          <div className="main-container">
            <div className="laws-grid">
              {codigos.map((codigo) => (
                <div key={codigo.id} id={codigo.id}>
                  <CodeCard
                    id={codigo.id}
                    title={codigo.title}
                    description={codigo.description}
                    decreto={codigo.decreto}
                    actualizado={codigo.actualizado}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
