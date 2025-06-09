import { Card, Rate, Typography } from "antd";

const { Paragraph, Text } = Typography;

interface TestimonialCardProps {
  stars: number;
  text: string;
  author: string;
  role: string;
}

const TestimonialCard = ({
  stars,
  text,
  author,
  role,
}: TestimonialCardProps) => {
  return (
    <Card
      hoverable
      style={{
        background: "#faf8f3",
        border: "none",
        borderRadius: "20px",
        height: "100%",
      }}
      bodyStyle={{ padding: "40px" }}
    >
      <Rate
        disabled
        defaultValue={stars}
        style={{
          fontSize: "18px",
          marginBottom: "24px",
          color: "#d4af37",
        }}
      />

      <Paragraph
        style={{
          fontSize: "1.1rem",
          lineHeight: "1.7",
          color: "#2c2c2c",
          marginBottom: "24px",
          fontStyle: "italic",
        }}
      >
        "{text}"
      </Paragraph>

      <div>
        <Text
          strong
          style={{
            color: "#1a1a2e",
            fontSize: "16px",
          }}
        >
          {author}
        </Text>
        <Text
          style={{
            color: "#666666",
            fontSize: "14px",
            display: "block",
            marginTop: "4px",
          }}
        >
          {role}
        </Text>
      </div>
    </Card>
  );
};

export default TestimonialCard;
