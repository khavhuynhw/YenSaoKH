import React from "react";
import { Row, Col, Card, Button, Typography, Tag, Rate, Space } from "antd";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { useLanguage } from "../contexts/LanguageContext";
import type { Product } from "../types";

const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

const FeaturedProducts: React.FC = () => {
  const { t } = useLanguage();

  const getProducts = (): Product[] => [
    {
      id: "1",
      name: t.products.product1.name,
      price: 299,
      originalPrice: 399,
      image: "",
      description: t.products.product1.description,
      category: t.products.product1.category,
      benefits: t.products.product1.benefits,
      inStock: true,
      rating: 4.9,
      reviewCount: 156,
    },
    {
      id: "2",
      name: t.products.product2.name,
      price: 189,
      originalPrice: 239,
      image: "",
      description: t.products.product2.description,
      category: t.products.product2.category,
      benefits: t.products.product2.benefits,
      inStock: true,
      rating: 4.8,
      reviewCount: 203,
    },
    {
      id: "3",
      name: t.products.product3.name,
      price: 89,
      originalPrice: 109,
      image: "",
      description: t.products.product3.description,
      category: t.products.product3.category,
      benefits: t.products.product3.benefits,
      inStock: true,
      rating: 4.7,
      reviewCount: 89,
    },
    {
      id: "4",
      name: t.products.product4.name,
      price: 599,
      originalPrice: 799,
      image: "",
      description: t.products.product4.description,
      category: t.products.product4.category,
      benefits: t.products.product4.benefits,
      inStock: true,
      rating: 5.0,
      reviewCount: 67,
    },
  ];

  const products = getProducts();

  const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const discountPercentage = product.originalPrice
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) *
            100,
        )
      : 0;

    return (
      <Card
        hoverable
        className="product-card"
        cover={
          <div className="product-image-container">
            <div className="product-image-placeholder">
              <div className="product-icon">🥄</div>
            </div>
            {discountPercentage > 0 && (
              <Tag color="red" className="discount-tag">
                -{discountPercentage}% {t.products.discount}
              </Tag>
            )}
            <div className="product-overlay">
              <Space>
                <Button
                  type="primary"
                  shape="circle"
                  icon={<EyeOutlined />}
                  className="quick-view-btn"
                  title={t.products.quickView}
                />
                <Button
                  type="default"
                  shape="circle"
                  icon={<HeartOutlined />}
                  className="wishlist-btn"
                />
              </Space>
            </div>
          </div>
        }
        actions={[
          <Button
            type="primary"
            icon={<ShoppingCartOutlined />}
            block
            className="add-to-cart-btn"
            key="add-to-cart"
          >
            {t.products.addToCart}
          </Button>,
        ]}
      >
        <Meta
          title={
            <div className="product-title">
              <Title level={4}>{product.name}</Title>
              <div className="product-rating">
                <Rate disabled defaultValue={product.rating} allowHalf />
                <Text type="secondary">
                  ({product.reviewCount} {t.products.reviews})
                </Text>
              </div>
            </div>
          }
          description={
            <div className="product-details">
              <Paragraph className="product-description">
                {product.description}
              </Paragraph>

              <div className="product-benefits">
                {product.benefits.slice(0, 2).map((benefit, index) => (
                  <Tag key={index} color="gold" className="benefit-tag">
                    {benefit}
                  </Tag>
                ))}
              </div>

              <div className="product-pricing">
                <span className="current-price">${product.price}</span>
                {product.originalPrice && (
                  <span className="original-price">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>
          }
        />
      </Card>
    );
  };

  return (
    <section className="featured-products">
      <div className="container">
        <div className="section-header">
          <Title level={2} className="section-title">
            {t.products.title}
          </Title>
          <Paragraph className="section-description">
            {t.products.description}
          </Paragraph>
        </div>

        <Row gutter={[32, 32]}>
          {products.map((product) => (
            <Col xs={24} sm={12} lg={6} key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>

        <div className="view-all-section">
          <Button type="primary" size="large" className="view-all-btn">
            {t.products.viewAll}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
