import { Button, Row, Col, Typography, Space, Tag } from "antd";
import {
  ShoppingCartOutlined,
  EyeOutlined,
  StarFilled,
  TrophyOutlined,
  SafetyOutlined,
} from "@ant-design/icons";

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
        background: "#f7f4f0",
        minHeight: "90vh",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <Row gutter={[80, 40]} align="middle">
          {/* Hero Text */}
          <Col xs={24} lg={12}>
            <div>
              {/* Certification Badge */}
              <div style={{ marginBottom: "32px" }}>
                <div
                  style={{
                    background: "white",
                    padding: "12px 24px",
                    borderRadius: "30px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
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
                  fontSize: "clamp(2.8rem, 5vw, 4rem)",
                  lineHeight: "1.1",
                  marginBottom: "28px",
                  color: "#2c2c2c",
                  fontWeight: 700,
                }}
              >
                Yến Sào <span className="text-gradient-gold">Nguyên Chất</span>
                <br />
                cho Sức Khỏe Tối Ưu
              </Title>

              <Paragraph
                style={{
                  fontSize: "1.1rem",
                  color: "#666666",
                  lineHeight: "1.7",
                  marginBottom: "32px",
                  maxWidth: "500px",
                }}
              >
                Trải nghiệm bí quyết cổ xưa về vẻ đẹp và sức khỏe với yến sào ăn
                được cao cấp của chúng tôi. Tự nhiên giàu collagen, protein và
                axit amin thiết yếu cho làn da rạng rỡ và sức sống dồi dào.
              </Paragraph>

              {/* Feature Badges */}
              <div style={{ marginBottom: "40px" }}>
                <Space size="large" wrap>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span style={{ color: "#d4af37" }}>⭐</span>
                    <Text style={{ fontWeight: 500, color: "#2c2c2c" }}>
                      100% Tự Nhiên & Nguyên Chất
                    </Text>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span style={{ color: "#d4af37" }}>🚚</span>
                    <Text style={{ fontWeight: 500, color: "#2c2c2c" }}>
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
                      gap: "8px",
                    }}
                  >
                    <span style={{ color: "#fadb14" }}>⭐</span>
                    <Text style={{ fontWeight: 500, color: "#2c2c2c" }}>
                      4.9/5 từ 2,500+ đánh giá
                    </Text>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span style={{ color: "#d4af37" }}>🏆</span>
                    <Text style={{ fontWeight: 500, color: "#2c2c2c" }}>
                      Chất lượng đạt giải thưởng
                    </Text>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span style={{ color: "#52c41a" }}>🔒</span>
                    <Text style={{ fontWeight: 500, color: "#2c2c2c" }}>
                      Đảm bảo hoàn tiền trong 30 ngày
                    </Text>
                  </div>
                </Space>
              </div>
            </div>
          </Col>

          {/* Hero Image with Bowl and Floating Tags */}
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
              {/* Main White Bowl/Container */}
              <div
                style={{
                  position: "relative",
                  width: "400px",
                  height: "400px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Large White Circle/Bowl */}
                <div
                  style={{
                    width: "300px",
                    height: "300px",
                    background: "white",
                    borderRadius: "50%",
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  {/* Inner Golden Ring/Product */}
                  <div
                    style={{
                      width: "120px",
                      height: "120px",
                      background:
                        "linear-gradient(135deg, #d4af37 0%, #c9a876 100%)",
                      borderRadius: "50%",
                      border: "3px solid white",
                      boxShadow: "0 10px 30px rgba(212, 175, 55, 0.3)",
                    }}
                  />
                </div>

                {/* Floating Benefit Tags */}
                <Tag
                  style={{
                    position: "absolute",
                    top: "50px",
                    right: "20px",
                    padding: "8px 16px",
                    fontSize: "13px",
                    fontWeight: 500,
                    borderRadius: "20px",
                    border: "none",
                    background: "white",
                    color: "#d4af37",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  }}
                >
                  Tăng Collagen
                </Tag>

                <Tag
                  style={{
                    position: "absolute",
                    bottom: "80px",
                    right: "-10px",
                    padding: "8px 16px",
                    fontSize: "13px",
                    fontWeight: 500,
                    borderRadius: "20px",
                    border: "none",
                    background: "white",
                    color: "#1890ff",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  }}
                >
                  Chống Lão Hóa
                </Tag>

                <Tag
                  style={{
                    position: "absolute",
                    top: "80px",
                    left: "-20px",
                    padding: "8px 16px",
                    fontSize: "13px",
                    fontWeight: 500,
                    borderRadius: "20px",
                    border: "none",
                    background: "white",
                    color: "#52c41a",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  }}
                >
                  Hỗ Trợ Miễn Dịch
                </Tag>

                <Tag
                  style={{
                    position: "absolute",
                    bottom: "50px",
                    left: "10px",
                    padding: "8px 16px",
                    fontSize: "13px",
                    fontWeight: 500,
                    borderRadius: "20px",
                    border: "none",
                    background: "white",
                    color: "#722ed1",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  }}
                >
                  Tăng Năng Lượng
                </Tag>
              </div>

              {/* Subtle Background Decoration */}
              <div
                style={{
                  position: "absolute",
                  top: "-80px",
                  right: "-60px",
                  width: "200px",
                  height: "200px",
                  background:
                    "linear-gradient(135deg, #d4af37 0%, #f4e4a6 100%)",
                  borderRadius: "50%",
                  opacity: 0.05,
                  zIndex: -1,
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: "-60px",
                  left: "-80px",
                  width: "150px",
                  height: "150px",
                  background:
                    "linear-gradient(135deg, #52c41a 0%, #73d13d 100%)",
                  borderRadius: "50%",
                  opacity: 0.05,
                  zIndex: -1,
                }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Hero;
