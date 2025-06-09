import { Card, Button, Typography, Badge } from "antd";

const { Title, Paragraph, Text } = Typography;

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  priceUnit: string;
  featured?: boolean;
  badge?: string;
  placeholder: string;
}

const ProductCard = ({
  name,
  description,
  price,
  priceUnit,
  featured = false,
  badge,
  placeholder,
}: ProductCardProps) => {
  return (
    <Badge.Ribbon
      text={badge}
      color="#d4af37"
      style={{ display: badge ? "block" : "none" }}
    >
      <Card
        hoverable
        className="h-full"
        style={{
          background: featured
            ? "linear-gradient(135deg, #16213e 0%, #0f3460 100%)"
            : "#ffffff",
          color: featured ? "#ffffff" : "#2c2c2c",
          border: "none",
          borderRadius: "20px",
          overflow: "hidden",
        }}
        cover={
          <div
            className="h-64 flex items-center justify-center font-semibold text-lg"
            style={{
              background: featured ? "rgba(255, 255, 255, 0.1)" : "#faf8f3",
              color: featured ? "#ffffff" : "#666666",
            }}
          >
            <div className="p-8 text-center">{placeholder}</div>
          </div>
        }
        bodyStyle={{ padding: "32px" }}
      >
        <Title
          level={3}
          style={{
            color: featured ? "#ffffff" : "#2c2c2c",
            marginBottom: "12px",
            fontSize: "1.3rem",
          }}
        >
          {name}
        </Title>

        <Paragraph
          style={{
            color: featured ? "rgba(255, 255, 255, 0.8)" : "#666666",
            marginBottom: "24px",
            lineHeight: "1.6",
          }}
        >
          {description}
        </Paragraph>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-6">
          <Text
            strong
            style={{
              fontSize: "1.8rem",
              color: "#d4af37",
            }}
          >
            {price}
          </Text>
          <Text
            style={{
              color: featured ? "rgba(255, 255, 255, 0.7)" : "#666666",
            }}
          >
            {priceUnit}
          </Text>
        </div>

        {/* Add to Cart Button */}
        <Button
          type={featured ? "default" : "primary"}
          size="large"
          block
          style={{
            height: "48px",
            fontSize: "16px",
            fontWeight: 600,
            background: featured
              ? "#ffffff"
              : "linear-gradient(135deg, #d4af37 0%, #f4e4a6 100%)",
            color: featured ? "#16213e" : "#ffffff",
            border: "none",
            borderRadius: "25px",
          }}
        >
          Add to Cart
        </Button>
      </Card>
    </Badge.Ribbon>
  );
};

export default ProductCard;
