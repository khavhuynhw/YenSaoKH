import { Row, Col, Typography } from "antd";
import BenefitCard from "./BenefitCard";

const { Title, Paragraph } = Typography;

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
    <section id="benefits" className="py-24" style={{ background: "#faf8f3" }}>
      <div className="max-w-6xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Title
            level={2}
            style={{
              fontSize: "2.5rem",
              color: "#1a1a2e",
              marginBottom: "16px",
            }}
          >
            Health Benefits
          </Title>
          <Paragraph
            style={{
              fontSize: "1.2rem",
              color: "#666666",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Scientifically proven benefits backed by centuries of traditional
            use
          </Paragraph>
        </div>

        {/* Benefits Grid */}
        <Row gutter={[32, 32]}>
          {benefits.map((benefit, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <BenefitCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Benefits;
