interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => {
  return (
    <div className="bg-white p-10 rounded-2xl text-center card-hover">
      <div className="text-5xl mb-6 block">{icon}</div>
      <h3 className="text-xl font-bold text-primary-dark mb-4">{title}</h3>
      <p className="text-text-light leading-relaxed">{description}</p>
    </div>
  );
};

export default BenefitCard;
