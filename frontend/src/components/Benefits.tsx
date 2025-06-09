import BenefitCard from "./BenefitCard";

const Benefits = () => {
  const benefits = [
    {
      icon: "✨",
      title: "Skin Beauty",
      description:
        "Rich in collagen and amino acids that promote skin elasticity and radiance",
    },
    {
      icon: "💪",
      title: "Immune Support",
      description:
        "Boosts immune system with natural glycoproteins and antioxidants",
    },
    {
      icon: "🧠",
      title: "Mental Clarity",
      description: "Enhances cognitive function and supports brain health",
    },
    {
      icon: "⚡",
      title: "Energy Boost",
      description: "Natural energy enhancement without caffeine or stimulants",
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-accent-cream">
      <div className="max-w-6xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Health Benefits</h2>
          <p className="section-subtitle">
            Scientifically proven benefits backed by centuries of traditional
            use
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
