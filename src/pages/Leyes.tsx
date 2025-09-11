import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Header from "../components/Header"
import LawCard from "../components/LawCard"

export default function LeyesPage() {
  const location = useLocation()

  const leyes = [
    {
      id: "ley-proteccion-datos",
      title: "Ley de Protección de Datos Personales",
      description:
        "Esta ley tiene por objeto la protección de los datos personales, garantizando el derecho fundamental de las personas a la protección de sus datos personales, así como el acceso a los mismos.",
      date: "2020",
      category: "Protección de Datos",
    },
    {
      id: "ley-transparencia",
      title: "Ley de Transparencia y Acceso a la Información Pública",
      description:
        "Garantiza el derecho de acceso a la información pública, promueve la transparencia de la función pública, la rendición de cuentas del Estado.",
      date: "2006",
      category: "Transparencia",
    },
    {
      id: "ley-turismo",
      title: "Ley de Incentivos a la Industria Turística",
      description:
        "Tiene por objeto el fomento, promoción y desarrollo de la industria turística nacional, mediante el otorgamiento de incentivos y facilidades.",
      date: "2019",
      category: "Turismo",
    },
    {
      id: "ley-contratacion",
      title: "Ley de Contratación del Estado",
      description:
        "Regula los procedimientos de contratación para la adquisición o arrendamiento de bienes, contratación de obras y servicios.",
      date: "2001",
      category: "Contratación Pública",
    },
    {
      id: "ley-propiedad-industrial",
      title: "Ley de Propiedad Industrial",
      description:
        "Tiene por objeto la protección de la propiedad industrial mediante un sistema de patentes de invención, modelos de utilidad, diseños industriales.",
      date: "2012",
      category: "Propiedad Industrial",
    },
    {
      id: "ley-consumidor",
      title: "Ley de Protección al Consumidor",
      description:
        "Tiene por objeto proteger los derechos e intereses legítimos del consumidor, promover y proteger eficazmente sus derechos.",
      date: "2008",
      category: "Protección al Consumidor",
    },
  ]

  // Para leer parámetros de búsqueda
  const searchParams = new URLSearchParams(location.search)
  const searchTerm = searchParams.get("search") || ""

  // Scroll al hash en la URL
  useEffect(() => {
    const hash = location.hash.substring(1)
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" })
          element.classList.add("highlighted")
          setTimeout(() => element.classList.remove("highlighted"), 2000)
        }
      }, 100)
    }
  }, [location.hash])

  // Filtrar las leyes
  const filteredLeyes = searchTerm
    ? leyes.filter(
        (ley) =>
          ley.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          ley.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : leyes

  return (
    <>
      <Header />

      <main>
        <section className="laws-header">
          <div className="main-container">
            <h1>Leyes de Honduras</h1>
            <p>Consulta todas las leyes vigentes en territorio hondureño</p>
            {searchTerm && (
              <p className="search-results">
                Mostrando resultados para: "{searchTerm}" ({filteredLeyes.length} encontradas)
              </p>
            )}
          </div>
        </section>

        <section>
          <div className="main-container">
            <div className="laws-grid">
              {filteredLeyes.map((ley) => (
                <div key={ley.id} id={ley.id}>
                  <LawCard title={ley.title} description={ley.description} date={ley.date} category={ley.category} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
