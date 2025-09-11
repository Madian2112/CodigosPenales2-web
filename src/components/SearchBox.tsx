import React, { useState, useEffect, useRef } from "react"

interface Law {
  id: string
  title: string
  description: string
  date: string
  category: string
}

const laws: Law[] = [
  {
    id: "ley-proteccion-datos",
    title: "Ley de Protección de Datos Personales",
    description:
      "Esta ley tiene por objeto la protección de los datos personales, garantizando el derecho fundamental de las personas a la protección de sus datos personales.",
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

export default function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("")
  const [suggestions, setSuggestions] = useState<Law[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = laws.filter(
        (law) =>
          law.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          law.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setSuggestions(filtered)
      setShowSuggestions(true)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [searchTerm])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSuggestionClick = (lawId: string) => {
    setShowSuggestions(false)
    setSearchTerm("")
    window.location.href = `/leyes#${lawId}`
  }

  const handleSearch = () => {
    if (searchTerm.trim()) {
      window.location.href = `/leyes?search=${encodeURIComponent(searchTerm)}`
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="search-section">
      <div className="search-container" ref={searchRef}>
        <input
          type="text"
          className="search-input"
          placeholder="Busca leyes, decretos, reglamentos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="search-btn" onClick={handleSearch}>
          Buscar
        </button>

        {showSuggestions && suggestions.length > 0 && (
          <div className="search-suggestions">
            {suggestions.map((law) => (
              <div key={law.id} className="suggestion-item" onClick={() => handleSuggestionClick(law.id)}>
                <div className="suggestion-title">{law.title}</div>
                <div className="suggestion-description">{law.description}</div>
                <div className="suggestion-meta">
                  {law.category} • {law.date}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
