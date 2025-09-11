interface BenefitCardProps {
  icon: string
  title: string
  description: string
}

export default function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="benefit-card">
      <div className="benefit-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
