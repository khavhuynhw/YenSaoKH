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
        <Row gutter={[80, 40]} align="middle">
          {/* Hero Text - Left Side */}
          <Col xs={24} lg={12}>
            <div>
              {/* Certification Badge */}
              <div style={{ marginBottom: "32px" }}>
                <div
                  style={{
                    background: "white",
                    padding: "12px 24px",
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

              {/* Main Title */}
              <Title
                level={1}
                style={{
                  fontSize: "clamp(3rem, 5.5vw, 4.5rem)",
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

              {/* Description */}
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

              {/* CTA Buttons */}
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

          {/* Hero Image - Right Side */}
          <Col xs={24} lg={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                minHeight: "500px",
              }}
            >
              {/* Main Bowl Container */}
              <div
                style={{
                  position: "relative",
                  width: "500px",
                  height: "400px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Large White Oval Bowl */}
                <div
                  style={{
                    width: "420px",
                    height: "300px",
                    background:
                      "linear-gradient(145deg, #ffffff 0%, #f8f8f8 100%)",
                    borderRadius: "50%",
                    boxShadow:
                      "0 30px 100px rgba(0, 0, 0, 0.15), inset 0 -10px 30px rgba(0,0,0,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    transform:
                      "perspective(800px) rotateX(12deg) rotateY(-5deg)",
                    border: "1px solid rgba(255,255,255,0.8)",
                  }}
                >
                  {/* Golden Ring - Bird's Nest Product */}
                  <div
                    style={{
                      width: "150px",
                      height: "150px",
                      background:
                        "linear-gradient(135deg, #d4af37 0%, #c9a876 50%, #d4af37 100%)",
                      borderRadius: "50%",
                      boxShadow:
                        "0 20px 50px rgba(212, 175, 55, 0.4), inset 0 5px 15px rgba(255,255,255,0.3)",
                      border: "3px solid rgba(255,255,255,0.2)",
                      position: "relative",
                    }}
                  >
                    {/* Inner highlight */}
                    <div
                      style={{
                        position: "absolute",
                        top: "15px",
                        left: "15px",
                        width: "60px",
                        height: "60px",
                        background: "rgba(255,255,255,0.3)",
                        borderRadius: "50%",
                        filter: "blur(10px)",
                      }}
                    />
                  </div>
                </div>

                {/* Floating Benefit Tags */}

                {/* Tăng Collagen - Top Right */}
                <div
                  style={{
                    position: "absolute",
                    top: "80px",
                    right: "60px",
                    padding: "10px 18px",
                    fontSize: "13px",
                    fontWeight: 500,
                    borderRadius: "25px",
                    border: "none",
                    background: "white",
                    color: "#d4af37",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
                    zIndex: 10,
                  }}
                >
                  Tăng Collagen
                </div>

                {/* Chống Lão Hóa - Bottom Right */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "60px",
                    right: "40px",
                    padding: "10px 18px",
                    fontSize: "13px",
                    fontWeight: 500,
                    borderRadius: "25px",
                    border: "none",
                    background: "white",
                    color: "#1890ff",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
                    zIndex: 10,
                  }}
                >
                  Chống Lão Hóa
                </div>

                {/* Hỗ Trợ Miễn Dịch - Top Left */}
                <div
                  style={{
                    position: "absolute",
                    top: "100px",
                    left: "40px",
                    padding: "10px 18px",
                    fontSize: "13px",
                    fontWeight: 500,
                    borderRadius: "25px",
                    border: "none",
                    background: "white",
                    color: "#52c41a",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
                    zIndex: 10,
                  }}
                >
                  Hỗ Trợ Miễn Dịch
                </div>

                {/* Subtle background decorations */}
                <div
                  style={{
                    position: "absolute",
                    top: "-60px",
                    right: "-40px",
                    width: "120px",
                    height: "120px",
                    background:
                      "linear-gradient(135deg, #d4af37 0%, #f4e4a6 100%)",
                    borderRadius: "50%",
                    opacity: 0.08,
                    zIndex: -1,
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    bottom: "-40px",
                    left: "-60px",
                    width: "100px",
                    height: "100px",
                    background:
                      "linear-gradient(135deg, #52c41a 0%, #73d13d 100%)",
                    borderRadius: "50%",
                    opacity: 0.06,
                    zIndex: -1,
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Hero;
