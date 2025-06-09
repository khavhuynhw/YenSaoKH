import React from "react";
import { Typography, Carousel, Card, Button, Rate } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
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
        background:
          "linear-gradient(135deg, #B8860B 0%, #D2B48C 30%, #F5DEB3 100%)",
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
                color: "#FFFFFF",
                marginBottom: "16px",
                fontWeight: "700",
                textShadow: "0 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              Bộ Sưu Tập Cao Cấp
            </Title>
            <Paragraph
              style={{
                fontSize: "18px",
                color: "rgba(255, 255, 255, 0.9)",
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
                    borderRadius: "24px",
                    border: "none",
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
                    overflow: "hidden",
                    background: "#FFFFFF",
                    transition: "all 0.3s ease",
                    height: "540px",
                    position: "relative",
                  }}
                  bodyStyle={{ padding: "0" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-12px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 50px rgba(0, 0, 0, 0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 30px rgba(0, 0, 0, 0.15)";
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
                      padding: "8px 16px",
                      fontSize: "13px",
                      fontWeight: "700",
                      borderRadius: "0 0 16px 0",
                      zIndex: 3,
                      boxShadow: "0 2px 8px rgba(229, 62, 62, 0.3)",
                    }}
                  >
                    Giảm {product.discount}
                  </div>

                  {/* Product Image */}
                  <div
                    style={{
                      height: "220px",
                      background: "#FAFAFA",
                      margin: "20px 20px 0 20px",
                      borderRadius: "16px",
                      overflow: "hidden",
                      position: "relative",
                      border: "1px solid #F0F0F0",
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
                      top: "200px",
                      left: "30px",
                      width: "42px",
                      height: "42px",
                      background: "#8B4513",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      zIndex: 2,
                      boxShadow: "0 4px 12px rgba(139, 69, 19, 0.3)",
                    }}
                  >
                    <ShoppingCartOutlined
                      style={{
                        color: "#FFFFFF",
                        fontSize: "18px",
                      }}
                    />
                  </div>

                  {/* Product Content */}
                  <div style={{ padding: "24px 20px 20px 20px" }}>
                    {/* Product Title */}
                    <Title
                      level={4}
                      style={{
                        color: "#8B4513",
                        marginBottom: "12px",
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "1.4",
                        height: "44px",
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
                        style={{ fontSize: "16px", color: "#FFD700" }}
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
                            marginBottom: "6px",
                            fontSize: "13px",
                            color: "#555",
                            lineHeight: "1.4",
                          }}
                        >
                          <span
                            style={{
                              color: "#E53E3E",
                              marginRight: "8px",
                              fontSize: "12px",
                              lineHeight: "1.6",
                              fontWeight: "bold",
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
                          gap: "12px",
                          marginBottom: "4px",
                        }}
                      >
                        <Text
                          strong
                          style={{
                            fontSize: "18px",
                            color: "#E53E3E",
                            fontWeight: "700",
                          }}
                        >
                          {product.salePrice}
                        </Text>
                        <Text
                          style={{
                            color: "#999",
                            fontSize: "14px",
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
                        height: "42px",
                        backgroundColor: "#8B4513",
                        border: "none",
                        borderRadius: "21px",
                        color: "#FFFFFF",
                        fontWeight: "600",
                        fontSize: "15px",
                        transition: "all 0.3s ease",
                        boxShadow: "0 3px 10px rgba(139, 69, 19, 0.3)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#A0522D";
                        e.currentTarget.style.transform = "translateY(-1px)";
                        e.currentTarget.style.boxShadow =
                          "0 5px 15px rgba(139, 69, 19, 0.4)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#8B4513";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 3px 10px rgba(139, 69, 19, 0.3)";
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
            bottom: -60px;
          }
          .ant-carousel .slick-dots li button {
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.4);
            opacity: 0.6;
            transition: all 0.3s ease;
          }
          .ant-carousel .slick-dots li.slick-active button {
            background: #FFFFFF;
            opacity: 1;
            transform: scale(1.2);
          }
          .ant-carousel .slick-dots li button:hover {
            background: rgba(255, 255, 255, 0.8);
            opacity: 0.9;
          }
        `}</style>

        {/* View All Button */}
        <div style={{ textAlign: "center", marginTop: "80px" }}>
          <Button
            type="primary"
            size="large"
            style={{
              height: "52px",
              padding: "0 36px",
              fontSize: "16px",
              fontWeight: "600",
              borderRadius: "26px",
              background: "linear-gradient(135deg, #FFFFFF, #F8F8F8)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              color: "#8B4513",
              boxShadow: "0 6px 20px rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(10px)",
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
