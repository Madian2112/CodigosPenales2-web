interface LawCardProps {
  title: string
  description: string
  date: string
  category: string
}

export default function LawCard({ title, description, date, category }: LawCardProps) {
  return (
    <div className="law-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="law-meta">
        <span>{category}</span>
        <span className="law-date">{date}</span>
      </div>
    </div>
  )
}
