import React, { useState } from "react";
import {
  Card,
  Typography,
  Button,
  Rate,
  Tag,
  Space,
  Modal,
  Divider,
  Row,
  Col,
} from "antd";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  HeartFilled,
  EyeOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

interface Product {
  id: number;
  name: string;
  englishName: string;
  image: string;
  rating: number;
  reviewCount: number;
  discount?: string;
  originalPrice: number;
  salePrice: number;
  category: string;
  isNew: boolean;
  isBestSeller: boolean;
  features: string[];
  benefits: string[];
  certifications: string[];
  description: string;
}

interface ProductCardProps {
  product: Product;
  viewMode: "grid" | "list";
}

const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Handle add to cart logic
    console.log(`Added ${quantity} x ${product.name} to cart`);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalVisible(true);
  };

  const gridCard = (
    <Card
      hoverable
      style={{
        borderRadius: "16px",
        border: "none",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
        overflow: "hidden",
        background: "#FFFFFF",
        transition: "all 0.3s ease",
        height: "500px",
        position: "relative",
      }}
      bodyStyle={{ padding: "0" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.08)";
      }}
    >
      {/* Badges */}
      <div
        style={{ position: "absolute", top: "12px", left: "12px", zIndex: 2 }}
      >
        {product.discount && (
          <Tag
            color="error"
            style={{
              borderRadius: "8px",
              fontSize: "12px",
              fontWeight: "600",
              marginBottom: "4px",
              display: "block",
              width: "fit-content",
            }}
          >
            Giảm {product.discount}
          </Tag>
        )}
        {product.isNew && (
          <Tag
            color="success"
            style={{
              borderRadius: "8px",
              fontSize: "12px",
              fontWeight: "600",
              marginBottom: "4px",
              display: "block",
              width: "fit-content",
            }}
          >
            Mới
          </Tag>
        )}
        {product.isBestSeller && (
          <Tag
            color="warning"
            style={{
              borderRadius: "8px",
              fontSize: "12px",
              fontWeight: "600",
              display: "block",
              width: "fit-content",
            }}
          >
            Bán chạy
          </Tag>
        )}
      </div>

      {/* Action Buttons */}
      <div
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <Button
          type="text"
          shape="circle"
          icon={isWishlisted ? <HeartFilled /> : <HeartOutlined />}
          onClick={(e) => {
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            color: isWishlisted ? "#ff4d4f" : "#666",
            border: "none",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        />
        <Button
          type="text"
          shape="circle"
          icon={<EyeOutlined />}
          onClick={handleQuickView}
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            color: "#666",
            border: "none",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>

      {/* Product Image */}
      <div
        style={{ height: "200px", overflow: "hidden", position: "relative" }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease",
          }}
        />

        {/* Quick Add to Cart */}
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            left: "12px",
            right: "12px",
            opacity: 0,
            transform: "translateY(20px)",
            transition: "all 0.3s ease",
          }}
          className="quick-add-button"
        >
          <Button
            type="primary"
            icon={<ShoppingCartOutlined />}
            onClick={handleAddToCart}
            style={{
              width: "100%",
              backgroundColor: "#A0522D",
              borderColor: "#A0522D",
              borderRadius: "8px",
              fontWeight: "600",
            }}
          >
            Thêm vào giỏ
          </Button>
        </div>
      </div>

      {/* Product Content */}
      <div style={{ padding: "16px" }}>
        <Text
          type="secondary"
          style={{ fontSize: "12px", textTransform: "uppercase" }}
        >
          {product.category}
        </Text>

        <Title
          level={5}
          style={{
            marginTop: "4px",
            marginBottom: "8px",
            fontSize: "14px",
            fontWeight: "600",
            lineHeight: "1.3",
            height: "36px",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            color: "#8B4513",
          }}
        >
          {product.name}
        </Title>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "12px",
          }}
        >
          <Rate disabled value={product.rating} style={{ fontSize: "12px" }} />
          <Text type="secondary" style={{ fontSize: "12px" }}>
            ({product.reviewCount})
          </Text>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Text
              strong
              style={{
                fontSize: "16px",
                color: "#E53E3E",
                fontWeight: "600",
              }}
            >
              {formatPrice(product.salePrice)}
            </Text>
            {product.originalPrice > product.salePrice && (
              <Text
                style={{
                  color: "#999",
                  fontSize: "12px",
                  textDecoration: "line-through",
                }}
              >
                {formatPrice(product.originalPrice)}
              </Text>
            )}
          </div>
        </div>

        <Button
          onClick={handleQuickView}
          style={{
            width: "100%",
            height: "36px",
            backgroundColor: "transparent",
            border: "1px solid #A0522D",
            borderRadius: "8px",
            color: "#A0522D",
            fontWeight: "600",
            fontSize: "14px",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#A0522D";
            e.currentTarget.style.color = "#FFFFFF";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#A0522D";
          }}
        >
          Chi tiết
        </Button>
      </div>

      <style jsx>{`
        .ant-card:hover .quick-add-button {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </Card>
  );

  const listCard = (
    <Card
      hoverable
      style={{
        borderRadius: "16px",
        border: "none",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
        overflow: "hidden",
        background: "#FFFFFF",
        transition: "all 0.3s ease",
      }}
      bodyStyle={{ padding: "24px" }}
    >
      <Row gutter={[24, 16]} align="middle">
        <Col xs={24} sm={8} md={6}>
          <div style={{ position: "relative" }}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />

            {/* Badges */}
            <div style={{ position: "absolute", top: "8px", left: "8px" }}>
              {product.discount && (
                <Tag
                  color="error"
                  style={{
                    borderRadius: "6px",
                    fontSize: "11px",
                    marginBottom: "4px",
                    display: "block",
                    width: "fit-content",
                  }}
                >
                  Giảm {product.discount}
                </Tag>
              )}
              {product.isNew && (
                <Tag
                  color="success"
                  style={{
                    borderRadius: "6px",
                    fontSize: "11px",
                    marginBottom: "4px",
                    display: "block",
                    width: "fit-content",
                  }}
                >
                  Mới
                </Tag>
              )}
              {product.isBestSeller && (
                <Tag
                  color="warning"
                  style={{
                    borderRadius: "6px",
                    fontSize: "11px",
                    display: "block",
                    width: "fit-content",
                  }}
                >
                  Bán chạy
                </Tag>
              )}
            </div>
          </div>
        </Col>

        <Col xs={24} sm={16} md={12}>
          <Text
            type="secondary"
            style={{ fontSize: "12px", textTransform: "uppercase" }}
          >
            {product.category}
          </Text>

          <Title
            level={4}
            style={{ marginTop: "4px", marginBottom: "8px", color: "#8B4513" }}
          >
            {product.name}
          </Title>

          <Text
            type="secondary"
            style={{ fontSize: "14px", marginBottom: "12px", display: "block" }}
          >
            {product.englishName}
          </Text>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "12px",
            }}
          >
            <Rate
              disabled
              value={product.rating}
              style={{ fontSize: "14px" }}
            />
            <Text type="secondary" style={{ fontSize: "14px" }}>
              ({product.reviewCount} đánh giá)
            </Text>
          </div>

          <Paragraph
            style={{
              color: "#666",
              fontSize: "14px",
              marginBottom: "16px",
              lineHeight: "1.5",
            }}
            ellipsis={{ rows: 2 }}
          >
            {product.description}
          </Paragraph>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
              marginBottom: "12px",
            }}
          >
            {product.features.slice(0, 3).map((feature, index) => (
              <Tag
                key={index}
                style={{
                  borderRadius: "12px",
                  fontSize: "11px",
                  border: "1px solid #A0522D",
                  color: "#A0522D",
                  background: "transparent",
                }}
              >
                {feature}
              </Tag>
            ))}
          </div>
        </Col>

        <Col xs={24} sm={24} md={6}>
          <div style={{ textAlign: "center" }}>
            <div style={{ marginBottom: "16px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  marginBottom: "4px",
                }}
              >
                <Text
                  strong
                  style={{
                    fontSize: "20px",
                    color: "#E53E3E",
                    fontWeight: "600",
                  }}
                >
                  {formatPrice(product.salePrice)}
                </Text>
              </div>
              {product.originalPrice > product.salePrice && (
                <Text
                  style={{
                    color: "#999",
                    fontSize: "14px",
                    textDecoration: "line-through",
                  }}
                >
                  {formatPrice(product.originalPrice)}
                </Text>
              )}
            </div>

            <Space direction="vertical" style={{ width: "100%" }} size={8}>
              <Button
                type="primary"
                icon={<ShoppingCartOutlined />}
                onClick={handleAddToCart}
                style={{
                  width: "100%",
                  height: "40px",
                  backgroundColor: "#A0522D",
                  borderColor: "#A0522D",
                  borderRadius: "8px",
                  fontWeight: "600",
                }}
              >
                Thêm vào giỏ
              </Button>

              <Button
                onClick={handleQuickView}
                style={{
                  width: "100%",
                  height: "36px",
                  backgroundColor: "transparent",
                  border: "1px solid #A0522D",
                  borderRadius: "8px",
                  color: "#A0522D",
                  fontWeight: "600",
                }}
              >
                Xem chi tiết
              </Button>
            </Space>

            <Button
              type="text"
              icon={isWishlisted ? <HeartFilled /> : <HeartOutlined />}
              onClick={(e) => {
                e.stopPropagation();
                setIsWishlisted(!isWishlisted);
              }}
              style={{
                marginTop: "8px",
                color: isWishlisted ? "#ff4d4f" : "#666",
              }}
            >
              {isWishlisted ? "Đã yêu thích" : "Yêu thích"}
            </Button>
          </div>
        </Col>
      </Row>
    </Card>
  );

  return (
    <>
      {viewMode === "grid" ? gridCard : listCard}

      {/* Quick View Modal */}
      <Modal
        title={null}
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        width={800}
        centered
        style={{ borderRadius: "16px" }}
      >
        <Row gutter={[32, 24]}>
          <Col xs={24} md={12}>
            <div style={{ position: "relative" }}>
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />

              {/* Badges */}
              <div style={{ position: "absolute", top: "12px", left: "12px" }}>
                {product.discount && (
                  <Tag
                    color="error"
                    style={{
                      borderRadius: "8px",
                      fontSize: "12px",
                      marginBottom: "4px",
                      display: "block",
                      width: "fit-content",
                    }}
                  >
                    Giảm {product.discount}
                  </Tag>
                )}
                {product.isNew && (
                  <Tag
                    color="success"
                    style={{
                      borderRadius: "8px",
                      fontSize: "12px",
                      marginBottom: "4px",
                      display: "block",
                      width: "fit-content",
                    }}
                  >
                    Mới
                  </Tag>
                )}
                {product.isBestSeller && (
                  <Tag
                    color="warning"
                    style={{
                      borderRadius: "8px",
                      fontSize: "12px",
                      display: "block",
                      width: "fit-content",
                    }}
                  >
                    Bán chạy
                  </Tag>
                )}
              </div>
            </div>
          </Col>

          <Col xs={24} md={12}>
            <div>
              <Text
                type="secondary"
                style={{ fontSize: "14px", textTransform: "uppercase" }}
              >
                {product.category}
              </Text>

              <Title
                level={3}
                style={{
                  marginTop: "8px",
                  marginBottom: "8px",
                  color: "#8B4513",
                }}
              >
                {product.name}
              </Title>

              <Text
                type="secondary"
                style={{
                  fontSize: "16px",
                  marginBottom: "16px",
                  display: "block",
                }}
              >
                {product.englishName}
              </Text>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "16px",
                }}
              >
                <Rate
                  disabled
                  value={product.rating}
                  style={{ fontSize: "16px" }}
                />
                <Text type="secondary" style={{ fontSize: "14px" }}>
                  ({product.reviewCount} đánh giá)
                </Text>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "8px",
                  }}
                >
                  <Text
                    strong
                    style={{
                      fontSize: "24px",
                      color: "#E53E3E",
                      fontWeight: "600",
                    }}
                  >
                    {formatPrice(product.salePrice)}
                  </Text>
                  {product.originalPrice > product.salePrice && (
                    <Text
                      style={{
                        color: "#999",
                        fontSize: "16px",
                        textDecoration: "line-through",
                      }}
                    >
                      {formatPrice(product.originalPrice)}
                    </Text>
                  )}
                </div>
              </div>

              <Paragraph
                style={{
                  color: "#666",
                  fontSize: "14px",
                  marginBottom: "20px",
                }}
              >
                {product.description}
              </Paragraph>

              <Divider />

              <div style={{ marginBottom: "20px" }}>
                <Title
                  level={5}
                  style={{ color: "#8B4513", marginBottom: "12px" }}
                >
                  Tính năng nổi bật
                </Title>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {product.features.map((feature, index) => (
                    <Tag
                      key={index}
                      style={{
                        borderRadius: "12px",
                        fontSize: "12px",
                        border: "1px solid #A0522D",
                        color: "#A0522D",
                        background: "transparent",
                      }}
                    >
                      <CheckCircleOutlined style={{ marginRight: "4px" }} />
                      {feature}
                    </Tag>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <Title
                  level={5}
                  style={{ color: "#8B4513", marginBottom: "12px" }}
                >
                  Lợi ích
                </Title>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {product.benefits.map((benefit, index) => (
                    <Tag
                      key={index}
                      color="green"
                      style={{ borderRadius: "12px", fontSize: "12px" }}
                    >
                      {benefit}
                    </Tag>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: "24px" }}>
                <Title
                  level={5}
                  style={{ color: "#8B4513", marginBottom: "12px" }}
                >
                  Chứng nhận
                </Title>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {product.certifications.map((cert, index) => (
                    <Tag
                      key={index}
                      color="blue"
                      style={{ borderRadius: "12px", fontSize: "12px" }}
                    >
                      {cert}
                    </Tag>
                  ))}
                </div>
              </div>

              <Space style={{ width: "100%" }} size={12}>
                <Button
                  type="primary"
                  icon={<ShoppingCartOutlined />}
                  onClick={handleAddToCart}
                  style={{
                    flex: 1,
                    height: "44px",
                    backgroundColor: "#A0522D",
                    borderColor: "#A0522D",
                    borderRadius: "8px",
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  Thêm vào giỏ hàng
                </Button>

                <Button
                  type="text"
                  icon={isWishlisted ? <HeartFilled /> : <HeartOutlined />}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsWishlisted(!isWishlisted);
                  }}
                  style={{
                    height: "44px",
                    width: "44px",
                    borderRadius: "8px",
                    border: "1px solid #e8e8e8",
                    color: isWishlisted ? "#ff4d4f" : "#666",
                  }}
                />
              </Space>
            </div>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default ProductCard;
