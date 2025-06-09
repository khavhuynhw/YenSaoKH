import { Button, Row, Col, Typography, Space, Badge, Tag } from "antd";
import {
  CheckCircleOutlined,
  ShoppingCartOutlined,
  StarFilled,
  ShieldCheckOutlined,
  GlobalOutlined,
  GiftOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        paddingTop: "120px",
        paddingBottom: "60px",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #f5f2ed 0%, #faf8f3 100%)",
        minHeight: "90vh",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <Row gutter={[64, 32]} align="middle">
          {/* Hero Text */}
          <Col xs={24} lg={14}>
            <div>
              {/* Certification Badge */}
              <div style={{ marginBottom: "24px" }}>
                <Badge.Ribbon
                  text="🛡️ Chứng Nhận Cấp AAA Cao Cấp"
                  color="#d4af37"
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  <div
                    style={{
                      background: "white",
                      padding: "8px 16px",
                      borderRadius: "20px",
                      display: "inline-block",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                  ></div>
                </Badge.Ribbon>
              </div>

              <Title
                level={1}
                style={{
                  fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                  lineHeight: "1.2",
                  marginBottom: "24px",
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
                  maxWidth: "480px",
                }}
              >
                Trải nghiệm bí quyết cổ xưa về vẻ đẹp và sức khỏe với yến sào ăn
                được cao cấp của chúng tôi. Tự nhiên giàu collagen, protein và
                axit amin thiết yếu cho làn da rạng rỡ và sức sống dồi dào.
              </Paragraph>

              {/* Feature Badges */}
              <div style={{ marginBottom: "32px" }}>
                <Space size="middle" wrap>
                  <Tag
                    icon={<StarFilled />}
                    color="gold"
                    style={{
                      padding: "6px 12px",
                      fontSize: "14px",
                      borderRadius: "20px",
                      border: "none",
                    }}
                  >
                    100% Tự Nhiên & Nguyên Chất
                  </Tag>
                  <Tag
                    icon={<GlobalOutlined />}
                    color="blue"
                    style={{
                      padding: "6px 12px",
                      fontSize: "14px",
                      borderRadius: "20px",
                      border: "none",
                    }}
                  >
                    Miễn Phí Vận Chuyển Toàn Cầu
                  </Tag>
                </Space>
              </div>

              {/* Call to Action Buttons */}
              <Space size="large" style={{ marginBottom: "40px" }} wrap>
                <Button
                  type="primary"
                  size="large"
                  icon={<ShoppingCartOutlined />}
                  style={{
                    background:
                      "linear-gradient(135deg, #d4af37 0%, #f4e4a6 100%)",
                    border: "none",
                    height: "56px",
                    padding: "0 32px",
                    fontSize: "16px",
                    fontWeight: 600,
                    borderRadius: "28px",
                  }}
                >
                  Mua Bộ Sưu Tập Cao Cấp
                </Button>
                <Button
                  size="large"
                  style={{
                    height: "56px",
                    padding: "0 32px",
                    fontSize: "16px",
                    borderColor: "#d4af37",
                    color: "#d4af37",
                    borderRadius: "28px",
                    fontWeight: 600,
                  }}
                >
                  Xem Câu Chuyện Của Chúng Tôi
                </Button>
              </Space>

              {/* Trust Indicators */}
              <div
                style={{ borderTop: "1px solid #e8e8e8", paddingTop: "24px" }}
              >
                <Space direction="vertical" size="small">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <StarFilled style={{ color: "#fadb14" }} />
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
                    <GiftOutlined style={{ color: "#d4af37" }} />
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
                    <ShieldCheckOutlined style={{ color: "#52c41a" }} />
                    <Text style={{ fontWeight: 500, color: "#2c2c2c" }}>
                      Đảm bảo hoàn tiền trong 30 ngày
                    </Text>
                  </div>
                </Space>
              </div>
            </div>
          </Col>

          {/* Hero Image with Floating Tags */}
          <Col xs={24} lg={10}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                minHeight: "500px",
              }}
            >
              {/* Main Product Container */}
              <div
                style={{
                  position: "relative",
                  background: "white",
                  borderRadius: "20px",
                  padding: "40px",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
                  width: "320px",
                  height: "320px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundImage:
                    "linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)",
                }}
              >
                {/* Product Illustration */}
                <div
                  style={{
                    width: "200px",
                    height: "200px",
                    background:
                      "linear-gradient(135deg, #d4af37 0%, #f4e4a6 100%)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    textAlign: "center",
                    boxShadow: "0 10px 30px rgba(212, 175, 55, 0.3)",
                  }}
                >
                  Premium
                  <br />
                  Bird's Nest
                  <br />
                  Product
                </div>
              </div>

              {/* Floating Benefit Tags */}
              <Tag
                color="orange"
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  padding: "8px 16px",
                  fontSize: "14px",
                  fontWeight: 500,
                  borderRadius: "20px",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                Tăng Collagen
              </Tag>

              <Tag
                color="blue"
                style={{
                  position: "absolute",
                  bottom: "40px",
                  right: "10px",
                  padding: "8px 16px",
                  fontSize: "14px",
                  fontWeight: 500,
                  borderRadius: "20px",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                Chống Lão Hóa
              </Tag>

              <Tag
                color="green"
                style={{
                  position: "absolute",
                  top: "60px",
                  left: "10px",
                  padding: "8px 16px",
                  fontSize: "14px",
                  fontWeight: 500,
                  borderRadius: "20px",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                Hỗ Trợ Miễn Dịch
              </Tag>

              <Tag
                color="purple"
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  padding: "8px 16px",
                  fontSize: "14px",
                  fontWeight: 500,
                  borderRadius: "20px",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                Tăng Năng Lượng
              </Tag>

              {/* Subtle Background Elements */}
              <div
                style={{
                  position: "absolute",
                  top: "-50px",
                  right: "-50px",
                  width: "150px",
                  height: "150px",
                  background:
                    "linear-gradient(135deg, #d4af37 0%, #f4e4a6 100%)",
                  borderRadius: "50%",
                  opacity: 0.1,
                  zIndex: -1,
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: "-30px",
                  left: "-30px",
                  width: "100px",
                  height: "100px",
                  background:
                    "linear-gradient(135deg, #52c41a 0%, #73d13d 100%)",
                  borderRadius: "50%",
                  opacity: 0.1,
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
