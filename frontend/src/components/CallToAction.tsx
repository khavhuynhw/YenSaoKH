import React from "react";
import { Row, Col, Typography, Button, Card, Space } from "antd";
import {
  ShoppingCartOutlined,
  PhoneOutlined,
  GiftOutlined,
  StarOutlined,
  CheckCircleOutlined,
  HeartOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const CallToAction = () => {
  const benefits = [
    "✅ Miễn phí giao hàng toàn quốc",
    "✅ Đổi trả trong 7 ngày",
    "✅ Tư vấn chuyên nghiệp 24/7",
    "✅ Chứng nhận chất lượng quốc tế",
  ];

  const urgencyPoints = [
    {
      icon: <GiftOutlined style={{ color: "#eb2f96" }} />,
      text: "Ưu đãi đặc biệt chỉ có hôm nay",
      highlight: true,
    },
    {
      icon: <StarOutlined style={{ color: "#faad14" }} />,
      text: "Được hàng ngàn khách hàng tin tưởng",
      highlight: false,
    },
    {
      icon: <CheckCircleOutlined style={{ color: "#52c41a" }} />,
      text: "Cam kết 100% chính hãng",
      highlight: false,
    },
  ];

  return (
    <section
      style={{
        padding: "120px 0",
        background:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Background Elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "200px",
          height: "200px",
          background: "linear-gradient(135deg, #d4af37, #f4e4a6)",
          borderRadius: "50%",
          opacity: "0.1",
          animation: "pulse 4s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "8%",
          width: "150px",
          height: "150px",
          background: "linear-gradient(135deg, #eb2f96, #f759ab)",
          borderRadius: "50%",
          opacity: "0.08",
          animation: "pulse 3s ease-in-out infinite 1s",
        }}
      />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.1); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(212, 175, 55, 0.3); }
          50% { box-shadow: 0 0 40px rgba(212, 175, 55, 0.6); }
        }
      `}</style>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Row gutter={[48, 48]} align="middle">
          {/* Main CTA Content */}
          <Col xs={24} lg={14}>
            <div style={{ marginBottom: "40px" }}>
              {/* Badge */}
              <div style={{ marginBottom: "32px" }}>
                <span
                  style={{
                    background: "linear-gradient(135deg, #eb2f96, #f759ab)",
                    color: "#ffffff",
                    padding: "12px 24px",
                    borderRadius: "25px",
                    fontSize: "14px",
                    fontWeight: "700",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    animation: "glow 2s ease-in-out infinite",
                  }}
                >
                  <GiftOutlined />
                  Ưu Đãi Có Hạn
                </span>
              </div>

              {/* Main Headline */}
              <Title
                level={1}
                style={{
                  fontSize: "3.5rem",
                  color: "#ffffff",
                  marginBottom: "24px",
                  lineHeight: "1.1",
                  fontWeight: "800",
                  textShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                }}
              >
                Đầu Tư Cho Sức Khỏe
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #d4af37, #f4e4a6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Ngay Hôm Nay!
                </span>
              </Title>

              {/* Subtitle */}
              <Paragraph
                style={{
                  fontSize: "20px",
                  color: "rgba(255, 255, 255, 0.9)",
                  marginBottom: "32px",
                  lineHeight: "1.6",
                  maxWidth: "500px",
                }}
              >
                Khởi đầu hành trình chăm sóc sức khỏe với sản phẩm yến sào cao
                cấp. Hàng ngàn khách hàng đã tin tưởng và đạt được kết quả tuyệt
                vời.
              </Paragraph>

              {/* Benefits List */}
              <div style={{ marginBottom: "40px" }}>
                <Row gutter={[0, 16]}>
                  {benefits.map((benefit, index) => (
                    <Col xs={24} sm={12} key={index}>
                      <Paragraph
                        style={{
                          color: "rgba(255, 255, 255, 0.9)",
                          margin: 0,
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        {benefit}
                      </Paragraph>
                    </Col>
                  ))}
                </Row>
              </div>

              {/* Action Buttons */}
              <Space size="large" wrap>
                <Button
                  type="primary"
                  size="large"
                  icon={<ShoppingCartOutlined />}
                  style={{
                    height: "64px",
                    padding: "0 40px",
                    fontSize: "18px",
                    fontWeight: "700",
                    borderRadius: "32px",
                    background: "linear-gradient(135deg, #d4af37, #f4e4a6)",
                    border: "none",
                    color: "#1a1a2e",
                    boxShadow: "0 8px 32px rgba(212, 175, 55, 0.4)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 16px 48px rgba(212, 175, 55, 0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 32px rgba(212, 175, 55, 0.4)";
                  }}
                >
                  Mua Ngay - Giảm 30%
                </Button>

                <Button
                  size="large"
                  icon={<PhoneOutlined />}
                  style={{
                    height: "64px",
                    padding: "0 32px",
                    fontSize: "16px",
                    fontWeight: "600",
                    borderRadius: "32px",
                    background: "transparent",
                    border: "2px solid rgba(255, 255, 255, 0.3)",
                    color: "#ffffff",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.borderColor =
                      "rgba(255, 255, 255, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor =
                      "rgba(255, 255, 255, 0.3)";
                  }}
                >
                  Tư Vấn Miễn Phí
                </Button>
              </Space>

              {/* Urgency Indicators */}
              <div style={{ marginTop: "32px" }}>
                <Row gutter={[16, 16]}>
                  {urgencyPoints.map((point, index) => (
                    <Col xs={24} key={index}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          padding: point.highlight ? "12px 16px" : "8px 0",
                          background: point.highlight
                            ? "rgba(235, 47, 150, 0.2)"
                            : "transparent",
                          borderRadius: point.highlight ? "12px" : "0",
                          border: point.highlight
                            ? "1px solid rgba(235, 47, 150, 0.3)"
                            : "none",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "16px",
                            opacity: point.highlight ? 1 : 0.8,
                          }}
                        >
                          {point.icon}
                        </div>
                        <Paragraph
                          style={{
                            color: "rgba(255, 255, 255, 0.9)",
                            margin: 0,
                            fontSize: "14px",
                            fontWeight: point.highlight ? "600" : "400",
                          }}
                        >
                          {point.text}
                        </Paragraph>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </Col>

          {/* Side Card */}
          <Col xs={24} lg={10}>
            <Card
              style={{
                borderRadius: "32px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 24px 64px rgba(0, 0, 0, 0.2)",
                overflow: "hidden",
              }}
              bodyStyle={{ padding: "40px 32px" }}
            >
              {/* Special Offer Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "linear-gradient(135deg, #eb2f96, #f759ab)",
                  color: "#ffffff",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                -30% OFF
              </div>

              <div style={{ textAlign: "center", marginBottom: "32px" }}>
                <HeartOutlined
                  style={{
                    fontSize: "64px",
                    color: "#d4af37",
                    marginBottom: "24px",
                  }}
                />

                <Title
                  level={3}
                  style={{
                    color: "#ffffff",
                    marginBottom: "16px",
                    fontSize: "24px",
                    fontWeight: "700",
                  }}
                >
                  Gói Chăm Sóc Sức Khỏe Premium
                </Title>

                <Paragraph
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    marginBottom: "24px",
                    lineHeight: "1.6",
                  }}
                >
                  Combo 3 hộp yến sào cao cấp + Tư vấn dinh dưỡng cá nhân hóa +
                  Hướng dẫn chế biến chi tiết
                </Paragraph>

                {/* Price */}
                <div style={{ marginBottom: "32px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "12px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "18px",
                        color: "rgba(255, 255, 255, 0.6)",
                        textDecoration: "line-through",
                      }}
                    >
                      4.500.000₫
                    </span>
                    <span
                      style={{
                        fontSize: "32px",
                        color: "#d4af37",
                        fontWeight: "800",
                      }}
                    >
                      3.150.000₫
                    </span>
                  </div>
                  <Paragraph
                    style={{
                      color: "rgba(255, 255, 255, 0.7)",
                      margin: "8px 0 0 0",
                      fontSize: "14px",
                    }}
                  >
                    Tiết kiệm 1.350.000₫
                  </Paragraph>
                </div>

                {/* Features */}
                <div style={{ marginBottom: "32px", textAlign: "left" }}>
                  {[
                    "3 hộp yến sào cao cấp (50g/hộp)",
                    "Tư vấn dinh dưỡng 1-1 với chuyên gia",
                    "Video hướng dẫn chế biến độc quyền",
                    "Bảo hành chất lượng 12 tháng",
                  ].map((feature, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        marginBottom: "12px",
                      }}
                    >
                      <CheckCircleOutlined
                        style={{ color: "#52c41a", fontSize: "16px" }}
                      />
                      <span
                        style={{
                          color: "rgba(255, 255, 255, 0.9)",
                          fontSize: "14px",
                        }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Countdown Timer */}
                <div
                  style={{
                    background: "linear-gradient(135deg, #eb2f96, #f759ab)",
                    borderRadius: "16px",
                    padding: "20px",
                    marginBottom: "24px",
                  }}
                >
                  <Paragraph
                    style={{
                      color: "#ffffff",
                      margin: "0 0 8px 0",
                      fontSize: "14px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                    }}
                  >
                    Ưu đãi kết thúc sau:
                  </Paragraph>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "16px",
                    }}
                  >
                    {["23", "14", "35"].map((time, index) => (
                      <div key={index} style={{ textAlign: "center" }}>
                        <div
                          style={{
                            background: "rgba(255, 255, 255, 0.2)",
                            borderRadius: "8px",
                            padding: "8px 12px",
                            minWidth: "40px",
                          }}
                        >
                          <span
                            style={{
                              color: "#ffffff",
                              fontSize: "18px",
                              fontWeight: "700",
                            }}
                          >
                            {time}
                          </span>
                        </div>
                        <span
                          style={{
                            color: "rgba(255, 255, 255, 0.8)",
                            fontSize: "12px",
                          }}
                        >
                          {["GIỜ", "PHÚT", "GIÂY"][index]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  type="primary"
                  size="large"
                  block
                  icon={<ShoppingCartOutlined />}
                  style={{
                    height: "56px",
                    fontSize: "16px",
                    fontWeight: "700",
                    borderRadius: "28px",
                    background: "linear-gradient(135deg, #d4af37, #f4e4a6)",
                    border: "none",
                    color: "#1a1a2e",
                    marginBottom: "16px",
                  }}
                >
                  Đặt Mua Ngay - Chỉ Còn 3 Suất
                </Button>

                <Paragraph
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    margin: 0,
                    fontSize: "12px",
                    lineHeight: "1.4",
                  }}
                >
                  🔒 Thanh toán an toàn | 🚚 Giao hàng miễn phí | ↩️ Đổi trả dễ
                  dàng
                </Paragraph>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default CallToAction;
