import Header from "./components/Header"
import BenefitCard from "./components/BenefitCard"
import SearchBox from "./components/SearchBox"
import Layout from "./layout"

export default function HomePage() {
  return (
    <Layout>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="main-container">
            <h1>Toda la Legislación Hondureña en un solo lugar</h1>
            <p>Accede de manera rápida, centralizada y confiable a leyes, decretos y reglamentos</p>

            {/* Search Section */}
            <SearchBox />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits">
          <div className="main-container">
            <h2>Beneficios de la Plataforma</h2>
            <div className="benefits-grid">
              <BenefitCard
                icon="🔒"
                title="Acceso Centralizado"
                description="Encuentra toda la legislación hondureña en un solo lugar, organizada y actualizada constantemente."
              />
              <BenefitCard
                icon="⚡"
                title="Búsqueda Rápida"
                description="Sistema de búsqueda avanzado que te permite encontrar cualquier ley o decreto en segundos."
              />
              <BenefitCard
                icon="👥"
                title="Para Todos"
                description="Diseñado para abogados, estudiantes, funcionarios públicos y ciudadanos en general."
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
