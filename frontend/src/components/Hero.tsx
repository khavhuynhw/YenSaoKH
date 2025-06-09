import { Button, Row, Col, Typography, Space } from "antd";
import { ShoppingCartOutlined, EyeOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        paddingTop: "120px",
        paddingBottom: "80px",
        position: "relative",
        overflow: "hidden",
        background: "#f7f3ee",
        minHeight: "90vh",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <Row gutter={[60, 40]} align="middle">
          {/* Hero Text */}
          <Col xs={24} lg={13}>
            <div>
              {/* Certification Badge */}
              <div style={{ marginBottom: "32px" }}>
                <div
                  style={{
                    background: "white",
                    padding: "10px 20px",
                    borderRadius: "25px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                    fontSize: "14px",
                    color: "#d4af37",
                    fontWeight: 500,
                  }}
                >
                  🛡️ Chứng Nhận Cấp AAA Cao Cấp
                </div>
              </div>

              <Title
                level={1}
                style={{
                  fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
                  lineHeight: "1.1",
                  marginBottom: "28px",
                  color: "#2c2c2c",
                  fontWeight: 700,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Yến Sào{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #d4af37 0%, #c9a876 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Nguyên Chất
                </span>
                <br />
                cho Sức Khỏe Tối Ưu
              </Title>

              <Paragraph
                style={{
                  fontSize: "1.1rem",
                  color: "#666666",
                  lineHeight: "1.7",
                  marginBottom: "32px",
                  maxWidth: "520px",
                }}
              >
                Trải nghiệm bí quyết cổ xưa về vẻ đẹp và sức khỏe với yến sào ăn
                được cao cấp của chúng tôi. Tự nhiên giàu collagen, protein và
                axit amin thiết yếu cho làn da rạng rỡ và sức sống dồi dào.
              </Paragraph>

              {/* Feature Points */}
              <div style={{ marginBottom: "40px" }}>
                <Space direction="vertical" size="middle">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <span style={{ color: "#d4af37", fontSize: "16px" }}>
                      ⭐
                    </span>
                    <Text
                      style={{
                        fontWeight: 500,
                        color: "#2c2c2c",
                        fontSize: "16px",
                      }}
                    >
                      100% Tự Nhiên & Nguyên Chất
                    </Text>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <span style={{ color: "#d4af37", fontSize: "16px" }}>
                      🚚
                    </span>
                    <Text
                      style={{
                        fontWeight: 500,
                        color: "#2c2c2c",
                        fontSize: "16px",
                      }}
                    >
                      Miễn Phí Vận Chuyển Toàn Cầu
                    </Text>
                  </div>
                </Space>
              </div>

              {/* Call to Action Buttons */}
              <Space size="large" style={{ marginBottom: "48px" }} wrap>
                <Button
                  type="primary"
                  size="large"
                  icon={<ShoppingCartOutlined />}
                  style={{
                    background:
                      "linear-gradient(135deg, #c9a876 0%, #d4af37 100%)",
                    border: "none",
                    height: "56px",
                    padding: "0 32px",
                    fontSize: "16px",
                    fontWeight: 500,
                    borderRadius: "28px",
                    color: "white",
                    boxShadow: "0 4px 15px rgba(201, 168, 118, 0.3)",
                  }}
                >
                  Mua Bộ Sưu Tập Cao Cấp
                </Button>
                <Button
                  size="large"
                  icon={<EyeOutlined />}
                  style={{
                    height: "56px",
                    padding: "0 32px",
                    fontSize: "16px",
                    borderColor: "#d4af37",
                    color: "#d4af37",
                    borderRadius: "28px",
                    fontWeight: 500,
                    background: "white",
                  }}
                >
                  Xem Câu Chuyện Của Chúng Tôi
                </Button>
              </Space>

              {/* Trust Indicators */}
              <div>
                <Space direction="vertical" size="small">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <span style={{ fontSize: "16px" }}>⭐</span>
                    <Text
                      style={{
                        fontWeight: 500,
                        color: "#2c2c2c",
                        fontSize: "15px",
                      }}
                    >
                      4.9/5 từ 2,500+ đánh giá
                    </Text>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <span style={{ fontSize: "16px" }}>🏆</span>
                    <Text
                      style={{
                        fontWeight: 500,
                        color: "#2c2c2c",
                        fontSize: "15px",
                      }}
                    >
                      Chất lượng đạt giải thưởng
                    </Text>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <span style={{ fontSize: "16px" }}>🔒</span>
                    <Text
                      style={{
                        fontWeight: 500,
                        color: "#2c2c2c",
                        fontSize: "15px",
                      }}
                    >
                      Đảm bảo hoàn tiền trong 30 ngày
                    </Text>
                  </div>
                </Space>
              </div>
            </div>
          </Col>

          {/* Hero Image with Large White Oval Bowl */}
          <Col xs={24} lg={11}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                minHeight: "500px",
              }}
            >
              {/* Large White Oval Bowl Container */}
              <div
                style={{
                  position: "relative",
                  width: "450px",
                  height: "350px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Main White Oval Bowl */}
                <div
                  style={{
                    width: "380px",
                    height: "280px",
                    background: "white",
                    borderRadius: "50%",
                    boxShadow: "0 25px 80px rgba(0, 0, 0, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    transform: "perspective(600px) rotateX(15deg)",
                  }}
                >
                  {/* Inner Golden Ring */}
                  <div
                    style={{
                      width: "140px",
                      height: "140px",
                      background:
                        "linear-gradient(135deg, #d4af37 0%, #c9a876 100%)",
                      borderRadius: "50%",
                      boxShadow: "0 15px 40px rgba(212, 175, 55, 0.4)",
                      border: "4px solid rgba(255,255,255,0.3)",
                    }}
                  />
                </div>

                {/* Floating Benefit Tags */}
                <div
                  style={{
                    position: "absolute",
                    top: "60px",
                    right: "40px",
                    padding: "8px 16px",
                    fontSize: "13px",
                    fontWeight: 500,
                    borderRadius: "20px",
                    border: "none",
                    background: "white",
                    color: "#d4af37",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                  }}
                >
                  Tăng Collagen
                </div>

                <div
                  style={{
                    position: "absolute",
                    bottom: "40px",
                    right: "20px",
                    padding: "8px 16px",
                    fontSize: "13px",
                    fontWeight: 500,
                    borderRadius: "20px",
                    border: "none",
                    background: "white",
                    color: "#1890ff",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                  }}
                >
                  Chống Lão Hóa
                </div>

                <div
                  style={{
                    position: "absolute",
                    top: "80px",
                    left: "20px",
                    padding: "8px 16px",
                    fontSize: "13px",
                    fontWeight: 500,
                    borderRadius: "20px",
                    border: "none",
                    background: "white",
                    color: "#52c41a",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                  }}
                >
                  Hỗ Trợ Miễn Dịch
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Hero;
