import { Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => {
  return (
    <Card
      hoverable
      style={{
        background: "#ffffff",
        border: "none",
        borderRadius: "20px",
        textAlign: "center",
        height: "100%",
      }}
      bodyStyle={{ padding: "40px" }}
    >
      <div
        style={{
          fontSize: "3rem",
          marginBottom: "24px",
          display: "block",
        }}
      >
        {icon}
      </div>

      <Title
        level={3}
        style={{
          fontSize: "1.3rem",
          color: "#1a1a2e",
          marginBottom: "16px",
        }}
      >
        {title}
      </Title>

      <Paragraph
        style={{
          color: "#666666",
          lineHeight: "1.6",
          marginBottom: 0,
        }}
      >
        {description}
      </Paragraph>
    </Card>
  );
};

export default BenefitCard;
