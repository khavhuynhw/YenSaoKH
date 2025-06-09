import { Row, Col, Typography } from "antd";
import ProductCard from "./ProductCard";

const { Title, Paragraph } = Typography;

const Products = () => {
  const products = [
    {
      name: "Premium Raw Bird's Nest",
      description:
        "Hand-picked cave bird's nest, perfect for traditional preparation",
      price: "$299",
      priceUnit: "/ 50g",
      featured: true,
      badge: "Bestseller",
      placeholder: "Raw Bird's Nest",
    },
    {
      name: "Ready-to-Drink Bird's Nest",
      description: "Convenient bottled bird's nest with rock sugar",
      price: "$89",
      priceUnit: "/ 6 bottles",
      placeholder: "Ready-to-Drink",
    },
    {
      name: "Luxury Gift Set",
      description: "Elegant packaging perfect for special occasions",
      price: "$499",
      priceUnit: "/ set",
      placeholder: "Gift Set",
    },
  ];

  return (
    <section
      id="products"
      style={{
        padding: "96px 0",
        background: "#ffffff",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <Title
            level={2}
            style={{
              fontSize: "2.5rem",
              color: "#1a1a2e",
              marginBottom: "16px",
            }}
          >
            Our Premium Collection
          </Title>
          <Paragraph
            style={{
              fontSize: "1.2rem",
              color: "#666666",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Carefully sourced and processed to preserve maximum nutritional
            value
          </Paragraph>
        </div>

        {/* Products Grid */}
        <Row gutter={[40, 40]}>
          {products.map((product, index) => (
            <Col xs={24} md={12} lg={8} key={index}>
              <ProductCard
                name={product.name}
                description={product.description}
                price={product.price}
                priceUnit={product.priceUnit}
                featured={product.featured}
                badge={product.badge}
                placeholder={product.placeholder}
              />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Products;
