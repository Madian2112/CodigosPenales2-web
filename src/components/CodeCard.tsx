import { Link } from "react-router-dom";

interface CodeCardProps {
  id: string;
  title: string;
  description: string;
  decreto: string;
  actualizado: string;
}

export default function CodeCard({ id, title, description, decreto, actualizado }: CodeCardProps) {
  return (
    <div className="law-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="law-meta">
        <span>{decreto}</span>
        <span className="law-date">{actualizado}</span>
      </div>
      <div className="card-buttons-container">
        <Link to={`/codigos/${id}`} className="btn btn-primary" onClick={() => console.log(`/codigos/${id}`)}>
          Ver Artículos
        </Link>
        <a href={`/pdfs/${id}.pdf`} download className="btn btn-secondary">
          Descargar PDF
        </a>
      </div>
    </div>
  );
}
