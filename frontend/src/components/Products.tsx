import React from "react";
import { Typography, Carousel, Card, Button, Rate } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import AnimationWrapper from "./AnimationWrapper";

const { Title, Paragraph, Text } = Typography;

const Products = () => {
  const carouselRef = React.useRef<any>(null);

  const products = [
    {
      id: 1,
      name: "Set yến chưng tươi hộp vương",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
      rating: 4,
      discount: "15%",
      originalPrice: "800.000 đ",
      salePrice: "680.000 đ",
      details: [
        "Thành phần: 6 hũ yến chưng tươi 80ml...",
        "Hàm lượng yến mỗi hũ: Chiếm 60% mỗ...",
        "Hướng dẫn sử dụng: Bật nắp sử dụng...",
      ],
    },
    {
      id: 2,
      name: "Set hộp ngăn kéo 10 hũ yến chưng sẵn",
      image:
        "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=200&fit=crop",
      rating: 4,
      discount: "9%",
      originalPrice: "1.220.000 đ",
      salePrice: "1.180.000 đ",
      details: [
        "Thành phần: 10 hũ yến chưng sẵn mix vị",
        "Hạn sử dụng: 12 tháng",
        "Hướng dẫn sử dụng: Bật nắp sử dụng...",
      ],
    },
    {
      id: 3,
      name: "Set quà tặng yến chưng tươi hộp vali",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop",
      rating: 4,
      discount: "12%",
      originalPrice: "2.050.000 đ",
      salePrice: "1.150.000 đ",
      details: [
        "Tùy chọn: Set 10 hũ 80ml / Set 8 hũ...",
        "Thành phần: Yến sào thiên nhiên...",
        "Hàm lượng yến mỗi hũ: Chiếm 60% mỗ...",
      ],
    },
    {
      id: 4,
      name: "Yến chưng sẵn Nhân sâm",
      image:
        "https://images.unsplash.com/photo-1560472355-536de3962603?w=300&h=200&fit=crop",
      rating: 4,
      discount: "10%",
      originalPrice: "550.000 đ",
      salePrice: "72.000 đ",
      details: [
        "Quy cách đóng gói: Đóng trong hũ thủy...",
        "Hạn sử dụng: 12 tháng",
        "Hướng dẫn sử dụng: Bật nắp sử dụng...",
      ],
    },
    {
      id: 5,
      name: "Set yến chưng cao cấp hộp gỗ",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
      rating: 5,
      discount: "8%",
      originalPrice: "3.200.000 đ",
      salePrice: "2.950.000 đ",
      details: [
        "Thành phần: 12 hũ yến chưng cao cấp",
        "Hàm lượng yến mỗi hũ: Chiếm 70% mỗi hũ",
        "Hướng dẫn sử dụng: Bảo quản nơi khô ráo",
      ],
    },
    {
      id: 6,
      name: "Combo yến sào gia đình 6 tháng",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
      rating: 4,
      discount: "20%",
      originalPrice: "4.800.000 đ",
      salePrice: "3.840.000 đ",
      details: [
        "Thành phần: Combo đầy đủ cho gia đình",
        "Hạn sử dụng: 18 tháng",
        "Hướng dẫn sử dụng: Theo hướng dẫn kèm theo",
      ],
    },
  ];

  const CustomArrow = ({
    direction,
    onClick,
  }: {
    direction: "left" | "right";
    onClick?: () => void;
  }) => (
    <Button
      type="text"
      icon={direction === "left" ? <LeftOutlined /> : <RightOutlined />}
      onClick={onClick}
      style={{
        position: "absolute",
        top: "50%",
        [direction]: "-60px",
        transform: "translateY(-50%)",
        zIndex: 10,
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        background: "rgba(255, 255, 255, 0.95)",
        border: "1px solid #e8e8e8",
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.12)",
        fontSize: "20px",
        color: "#8B4513",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );

  return (
    <section
      id="products"
      style={{
        padding: "80px 0",
        background: "#F5F0E8",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 20px",
          position: "relative",
        }}
      >
        {/* Section Header */}
        <AnimationWrapper animation="slideUp" delay={0.2}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <Title
              level={2}
              style={{
                fontSize: "2.5rem",
                color: "#8B4513",
                marginBottom: "16px",
                fontWeight: "700",
              }}
            >
              Bộ Sưu Tập Cao Cấp
            </Title>
            <Paragraph
              style={{
                fontSize: "18px",
                color: "#666666",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              Được tuyển chọn kỹ lưỡng từ những sản phẩm yến sào chất lượng cao
              nhất
            </Paragraph>
          </div>
        </AnimationWrapper>

        {/* Products Carousel */}
        <div style={{ position: "relative", margin: "0 80px" }}>
          <CustomArrow
            direction="left"
            onClick={() => carouselRef.current?.prev()}
          />
          <CustomArrow
            direction="right"
            onClick={() => carouselRef.current?.next()}
          />

          <Carousel
            ref={carouselRef}
            autoplay
            autoplaySpeed={4000}
            dots={true}
            slidesToShow={4}
            slidesToScroll={1}
            infinite={true}
            responsive={[
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
            style={{
              padding: "0 10px",
            }}
          >
            {products.map((product) => (
              <div key={product.id} style={{ padding: "0 10px" }}>
                <Card
                  hoverable
                  style={{
                    borderRadius: "20px",
                    border: "none",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                    overflow: "hidden",
                    background: "#FFFFFF",
                    transition: "all 0.3s ease",
                    height: "520px",
                    position: "relative",
                  }}
                  bodyStyle={{ padding: "0" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 40px rgba(0, 0, 0, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 20px rgba(0, 0, 0, 0.08)";
                  }}
                >
                  {/* Discount Badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      background: "#E53E3E",
                      color: "#FFFFFF",
                      padding: "6px 12px",
                      fontSize: "12px",
                      fontWeight: "600",
                      borderRadius: "0 0 12px 0",
                      zIndex: 3,
                    }}
                  >
                    Giảm {product.discount}
                  </div>

                  {/* Product Image */}
                  <div
                    style={{
                      height: "200px",
                      background: "#FFFFFF",
                      margin: "16px 16px 0 16px",
                      borderRadius: "0",
                      overflow: "hidden",
                      position: "relative",
                    }}
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
                  </div>

                  {/* Cart Icon */}
                  <div
                    style={{
                      position: "absolute",
                      top: "180px",
                      left: "24px",
                      width: "36px",
                      height: "36px",
                      background: "#A0522D",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      zIndex: 2,
                    }}
                  >
                    <ShoppingCartOutlined
                      style={{
                        color: "#FFFFFF",
                        fontSize: "14px",
                      }}
                    />
                  </div>

                  {/* Product Content */}
                  <div style={{ padding: "20px 16px 16px 16px" }}>
                    {/* Product Title */}
                    <Title
                      level={4}
                      style={{
                        color: "#8B4513",
                        marginBottom: "12px",
                        fontSize: "15px",
                        fontWeight: "600",
                        lineHeight: "1.3",
                        height: "40px",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {product.name}
                    </Title>

                    {/* Rating */}
                    <div style={{ marginBottom: "16px" }}>
                      <Rate
                        disabled
                        defaultValue={product.rating}
                        style={{ fontSize: "14px", color: "#FFD700" }}
                      />
                    </div>

                    {/* Product Details */}
                    <div style={{ marginBottom: "20px" }}>
                      {product.details.map((detail, index) => (
                        <div
                          key={index}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            marginBottom: "4px",
                            fontSize: "12px",
                            color: "#666",
                            lineHeight: "1.4",
                          }}
                        >
                          <span
                            style={{
                              color: "#E53E3E",
                              marginRight: "6px",
                              fontSize: "8px",
                              lineHeight: "1.6",
                              fontWeight: "600",
                            }}
                          >
                            ♦
                          </span>
                          <span style={{ flex: 1 }}>{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price */}
                    <div style={{ marginBottom: "20px" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          marginBottom: "4px",
                        }}
                      >
                        <Text
                          strong
                          style={{
                            fontSize: "16px",
                            color: "#E53E3E",
                            fontWeight: "600",
                          }}
                        >
                          {product.salePrice}
                        </Text>
                        <Text
                          style={{
                            color: "#999",
                            fontSize: "13px",
                            textDecoration: "line-through",
                          }}
                        >
                          {product.originalPrice}
                        </Text>
                      </div>
                    </div>

                    {/* Detail Button */}
                    <Button
                      style={{
                        width: "100%",
                        height: "36px",
                        backgroundColor: "#A0522D",
                        border: "none",
                        borderRadius: "18px",
                        color: "#FFFFFF",
                        fontWeight: "600",
                        fontSize: "14px",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#8B4513";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#A0522D";
                      }}
                    >
                      Chi tiết
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Custom Dots Styling */}
        <style>{`
          .ant-carousel .slick-dots {
            bottom: -50px;
          }
          .ant-carousel .slick-dots li button {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #D2B48C;
            opacity: 0.4;
          }
          .ant-carousel .slick-dots li.slick-active button {
            background: #A0522D;
            opacity: 1;
          }
          .ant-carousel .slick-dots li button:hover {
            background: #A0522D;
            opacity: 0.8;
          }
        `}</style>

        {/* View All Button */}
        <div style={{ textAlign: "center", marginTop: "70px" }}>
          <Button
            type="primary"
            size="large"
            style={{
              height: "48px",
              padding: "0 32px",
              fontSize: "16px",
              fontWeight: "600",
              borderRadius: "24px",
              background: "linear-gradient(135deg, #A0522D, #D2B48C)",
              border: "none",
              color: "#FFFFFF",
              boxShadow: "0 4px 16px rgba(160, 82, 45, 0.3)",
            }}
          >
            Xem Tất Cả Sản Phẩm
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
