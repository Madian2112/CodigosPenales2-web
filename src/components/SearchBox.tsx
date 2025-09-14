import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { allLeyes } from "../core";
import { allCodigos } from "../core";
import { allDocumentos } from "../core";
import type { Articulo } from "../core/interfaces";

interface SearchResult {
  leyes: Articulo[];
  codigos: Articulo[];
  documentos: Articulo[];
}

export default function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<SearchResult>({ leyes: [], codigos: [], documentos: [] });
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const allItems = [
    ...Object.values(allLeyes).map(item => ({ ...item, type: 'leyes' })),
    ...Object.values(allCodigos).map(item => ({ ...item, type: 'codigos' })),
    ...Object.values(allDocumentos).map(item => ({ ...item, type: 'documentos' })),
  ];

  useEffect(() => {
    if (searchTerm.length > 0) {
      const lowercasedTerm = searchTerm.toLowerCase();
      const filtered = allItems.filter(item =>
        item.titulo.toLowerCase().includes(lowercasedTerm)
      );
      
      const grouped: SearchResult = {
        leyes: filtered.filter(item => item.type === 'leyes'),
        codigos: filtered.filter(item => item.type === 'codigos'),
        documentos: filtered.filter(item => item.type === 'documentos'),
      };

      setSuggestions(grouped);
      setShowSuggestions(true);
    } else {
      setSuggestions({ leyes: [], codigos: [], documentos: [] });
      setShowSuggestions(false);
    }
  }, [searchTerm]);
  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSuggestionClick = (id: string, type: string) => {
    setShowSuggestions(false);
    setSearchTerm("");
    navigate(`/${type}/${id}`);
  };

  const renderSuggestions = () => {
    const hasResults = suggestions.leyes.length > 0 || suggestions.codigos.length > 0 || suggestions.documentos.length > 0;

    if (!hasResults) {
      return null;
    }

    return (
      <div className="search-suggestions">
        {suggestions.leyes.length > 0 && (
          <div className="suggestion-group">
            <h4 className="suggestion-header">Leyes</h4>
            {suggestions.leyes.map((item) => (
              <div key={item.id} className="suggestion-item" onClick={() => handleSuggestionClick(item.id, 'leyes')}>
                <div className="suggestion-title">{item.titulo}</div>
              </div>
            ))}
          </div>
        )}
        {suggestions.codigos.length > 0 && (
          <div className="suggestion-group">
            <h4 className="suggestion-header">Códigos</h4>
            {suggestions.codigos.map((item) => (
              <div key={item.id} className="suggestion-item" onClick={() => handleSuggestionClick(item.id, 'codigos')}>
                <div className="suggestion-title">{item.titulo}</div>
              </div>
            ))}
          </div>
        )}
        {suggestions.documentos.length > 0 && (
          <div className="suggestion-group">
            <h4 className="suggestion-header">Documentos</h4>
            {suggestions.documentos.map((item) => (
              <div key={item.id} className="suggestion-item" onClick={() => handleSuggestionClick(item.id, 'documentos')}>
                <div className="suggestion-title">{item.titulo}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="search-section">
      <div className="search-container" ref={searchRef}>
        <input
          type="text"
          className="search-input"
          placeholder="Busca leyes, códigos, documentos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-btn">
          Buscar
        </button>
        {showSuggestions && renderSuggestions()}
      </div>
    </div>
  );
}
