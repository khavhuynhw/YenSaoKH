import { Button, Row, Col, Typography, Space, Card } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        paddingTop: "144px",
        paddingBottom: "80px",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #faf8f3 0%, #ffffff 100%)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <Row gutter={[64, 32]} align="middle">
          {/* Hero Text */}
          <Col xs={24} lg={12}>
            <div style={{ textAlign: "center" }}>
              <Title
                level={1}
                style={{
                  fontSize: "3.5rem",
                  lineHeight: "1.2",
                  marginBottom: "24px",
                  color: "#1a1a2e",
                }}
              >
                Pure <span className="text-gradient-gold">Bird's Nest</span>
                <br />
                For Your Health
              </Title>

              <Paragraph
                style={{
                  fontSize: "1.2rem",
                  color: "#666666",
                  lineHeight: "1.7",
                  marginBottom: "40px",
                }}
              >
                Experience the ancient secret of beauty and wellness with our
                premium, hand-harvested bird's nest products. Rich in essential
                amino acids, collagen, and nutrients for radiant skin and
                optimal health.
              </Paragraph>

              {/* Call to Action Buttons */}
              <Space size="large" style={{ marginBottom: "48px" }} wrap>
                <Button
                  type="primary"
                  size="large"
                  style={{
                    background:
                      "linear-gradient(135deg, #d4af37 0%, #f4e4a6 100%)",
                    border: "none",
                    height: "56px",
                    padding: "0 32px",
                    fontSize: "18px",
                  }}
                >
                  Shop Now
                </Button>
                <Button
                  size="large"
                  style={{
                    height: "56px",
                    padding: "0 32px",
                    fontSize: "18px",
                    borderColor: "#e8e8e8",
                  }}
                >
                  Learn More
                </Button>
              </Space>

              {/* Feature Points */}
              <Space size="large" wrap style={{ justifyContent: "center" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontWeight: 500,
                  }}
                >
                  <CheckCircleOutlined
                    style={{ color: "#d4af37", fontSize: "16px" }}
                  />
                  <span>100% Natural</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontWeight: 500,
                  }}
                >
                  <CheckCircleOutlined
                    style={{ color: "#d4af37", fontSize: "16px" }}
                  />
                  <span>Lab Tested</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontWeight: 500,
                  }}
                >
                  <CheckCircleOutlined
                    style={{ color: "#d4af37", fontSize: "16px" }}
                  />
                  <span>Premium Quality</span>
                </div>
              </Space>
            </div>
          </Col>

          {/* Hero Image */}
          <Col xs={24} lg={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ position: "relative" }}>
                <Card
                  style={{
                    width: "320px",
                    height: "320px",
                    background:
                      "linear-gradient(135deg, #16213e 0%, #0f3460 100%)",
                    border: "none",
                    borderRadius: "20px",
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
                  }}
                  bodyStyle={{
                    padding: "60px 20px",
                    textAlign: "center",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                  }}
                >
                  Premium Bird's Nest
                </Card>

                {/* Glowing Background */}
                <div
                  className="animate-pulse-glow"
                  style={{
                    position: "absolute",
                    top: "-20px",
                    left: "-20px",
                    right: "-20px",
                    bottom: "-20px",
                    background:
                      "linear-gradient(135deg, #d4af37 0%, #f4e4a6 100%)",
                    borderRadius: "30px",
                    zIndex: -1,
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* Background Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: "-96px",
          width: "384px",
          height: "384px",
          background: "linear-gradient(135deg, #d4af37 0%, #f4e4a6 100%)",
          borderRadius: "50%",
          opacity: 0.1,
          zIndex: -1,
        }}
      />
    </section>
  );
};

export default Hero;
