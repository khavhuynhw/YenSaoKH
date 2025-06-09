import { Button, Row, Col, Typography, Space, Card } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-36 pb-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #faf8f3 0%, #ffffff 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-5">
        <Row gutter={[64, 32]} align="middle">
          {/* Hero Text */}
          <Col xs={24} lg={12}>
            <div className="text-center lg:text-left">
              <Title
                level={1}
                className="mb-6"
                style={{
                  fontSize: "3.5rem",
                  lineHeight: "1.2",
                  marginBottom: "24px",
                  color: "#1a1a2e",
                }}
              >
                Pure{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #d4af37 0%, #f4e4a6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Bird's Nest
                </span>
                <br />
                For Your Health
              </Title>

              <Paragraph
                className="mb-10"
                style={{
                  fontSize: "1.2rem",
                  color: "#666666",
                  lineHeight: "1.7",
                }}
              >
                Experience the ancient secret of beauty and wellness with our
                premium, hand-harvested bird's nest products. Rich in essential
                amino acids, collagen, and nutrients for radiant skin and
                optimal health.
              </Paragraph>

              {/* Call to Action Buttons */}
              <Space size="large" className="mb-12" wrap>
                <Button
                  type="primary"
                  size="large"
                  style={{
                    background:
                      "linear-gradient(135deg, #d4af37 0%, #f4e4a6 100%)",
                    border: "none",
                    height: "56px",
                    paddingLeft: "32px",
                    paddingRight: "32px",
                    fontSize: "18px",
                  }}
                >
                  Shop Now
                </Button>
                <Button
                  size="large"
                  style={{
                    height: "56px",
                    paddingLeft: "32px",
                    paddingRight: "32px",
                    fontSize: "18px",
                    borderColor: "#e8e8e8",
                  }}
                >
                  Learn More
                </Button>
              </Space>

              {/* Feature Points */}
              <Space size="large" wrap className="flex-col sm:flex-row">
                <div className="flex items-center gap-2 font-medium">
                  <CheckCircleOutlined
                    style={{ color: "#d4af37", fontSize: "16px" }}
                  />
                  <span>100% Natural</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <CheckCircleOutlined
                    style={{ color: "#d4af37", fontSize: "16px" }}
                  />
                  <span>Lab Tested</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
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
            <div className="flex justify-center items-center">
              <div className="relative">
                <Card
                  className="w-80 h-80 flex items-center justify-center text-white font-semibold text-xl shadow-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #16213e 0%, #0f3460 100%)",
                    border: "none",
                    borderRadius: "20px",
                  }}
                  bodyStyle={{
                    padding: "60px 20px",
                    textAlign: "center",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Premium Bird's Nest
                </Card>

                {/* Glowing Background */}
                <div
                  className="absolute -inset-5 rounded-3xl opacity-30 animate-pulse"
                  style={{
                    background:
                      "linear-gradient(135deg, #d4af37 0%, #f4e4a6 100%)",
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
        className="absolute top-0 -right-24 w-96 h-96 rounded-full opacity-10 -z-10"
        style={{
          background: "linear-gradient(135deg, #d4af37 0%, #f4e4a6 100%)",
        }}
      />
    </section>
  );
};

export default Hero;
