import React from "react";
import { Row, Col, Typography, Button, Statistic } from "antd";
import {
  HeartOutlined,
  CheckCircleOutlined,
  StarOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const AboutUs = () => {
  return (
    <section
      id="about"
      style={{
        padding: "120px 0",
        background: "linear-gradient(135deg, #f8f6f0 0%, #ffffff 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          width: "400px",
          height: "400px",
          background: "linear-gradient(135deg, #d4af37, #f4e4a6)",
          borderRadius: "50%",
          opacity: "0.03",
          zIndex: 1,
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Row gutter={[64, 64]} align="middle">
          {/* Content */}
          <Col xs={24} lg={12}>
            <div style={{ paddingRight: "20px" }}>
              <div style={{ marginBottom: "24px" }}>
                <span
                  style={{
                    background: "linear-gradient(135deg, #d4af37, #f4e4a6)",
                    color: "#1a1a2e",
                    padding: "8px 20px",
                    borderRadius: "25px",
                    fontSize: "14px",
                    fontWeight: "600",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  Câu Chuyện Thương Hiệu
                </span>
              </div>

              <Title
                level={2}
                style={{
                  fontSize: "3rem",
                  color: "#1a1a2e",
                  marginBottom: "24px",
                  lineHeight: "1.2",
                  fontWeight: "700",
                }}
              >
                Tinh Hoa Yến Sào
                <br />
                <span style={{ color: "#d4af37" }}>Từ Thiên Nhiên</span>
              </Title>

              <Paragraph
                style={{
                  fontSize: "18px",
                  color: "#5a5a5a",
                  lineHeight: "1.8",
                  marginBottom: "32px",
                }}
              >
                Với hơn 20 năm kinh nghiệm trong ngành yến sào, PureNest cam kết
                mang đến những sản phẩm yến sào nguyên chất, được thu hoạch từ
                những hang động tự nhiên và nuôi trồng bền vững.
              </Paragraph>

              <Paragraph
                style={{
                  fontSize: "16px",
                  color: "#666",
                  lineHeight: "1.7",
                  marginBottom: "40px",
                }}
              >
                Chúng tôi tin rằng sức khỏe và sắc đẹp đến từ những gì tinh
                khiết nhất của thiên nhiên. Mỗi sản phẩm của PureNest đều được
                chế biến theo quy trình khắt khe, đảm bảo giữ nguyên giá trị
                dinh dưỡng cao nhất.
              </Paragraph>

              <div style={{ marginBottom: "40px" }}>
                <Row gutter={[32, 24]}>
                  <Col xs={12} sm={6}>
                    <Statistic
                      title="Năm Kinh Nghiệm"
                      value={20}
                      suffix="+"
                      valueStyle={{
                        color: "#d4af37",
                        fontSize: "2.5rem",
                        fontWeight: "700",
                      }}
                    />
                  </Col>
                  <Col xs={12} sm={6}>
                    <Statistic
                      title="Khách Hàng Hài Lòng"
                      value={10000}
                      suffix="+"
                      valueStyle={{
                        color: "#d4af37",
                        fontSize: "2.5rem",
                        fontWeight: "700",
                      }}
                    />
                  </Col>
                  <Col xs={12} sm={6}>
                    <Statistic
                      title="Sản Phẩm Chất Lượng"
                      value={99}
                      suffix="%"
                      valueStyle={{
                        color: "#d4af37",
                        fontSize: "2.5rem",
                        fontWeight: "700",
                      }}
                    />
                  </Col>
                  <Col xs={12} sm={6}>
                    <Statistic
                      title="Chứng Nhận"
                      value={15}
                      suffix="+"
                      valueStyle={{
                        color: "#d4af37",
                        fontSize: "2.5rem",
                        fontWeight: "700",
                      }}
                    />
                  </Col>
                </Row>
              </div>

              <Button
                type="primary"
                size="large"
                icon={<HeartOutlined />}
                style={{
                  height: "56px",
                  padding: "0 32px",
                  fontSize: "16px",
                  fontWeight: "600",
                  borderRadius: "28px",
                  background: "linear-gradient(135deg, #d4af37, #f4e4a6)",
                  border: "none",
                  boxShadow: "0 8px 32px rgba(212, 175, 55, 0.3)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(212, 175, 55, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 32px rgba(212, 175, 55, 0.3)";
                }}
              >
                Tìm Hiểu Thêm
              </Button>
            </div>
          </Col>

          {/* Visual Content */}
          <Col xs={24} lg={12}>
            <div style={{ position: "relative" }}>
              {/* Main Image Container */}
              <div
                style={{
                  background: "linear-gradient(135deg, #f8f6f0, #ffffff)",
                  borderRadius: "24px",
                  padding: "40px",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Featured Values */}
                <Row gutter={[24, 24]}>
                  <Col span={12}>
                    <div
                      style={{
                        background: "#ffffff",
                        padding: "24px",
                        borderRadius: "16px",
                        textAlign: "center",
                        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
                        border: "1px solid #f0f0f0",
                      }}
                    >
                      <CheckCircleOutlined
                        style={{
                          fontSize: "48px",
                          color: "#52c41a",
                          marginBottom: "16px",
                        }}
                      />
                      <Title
                        level={5}
                        style={{ color: "#1a1a2e", marginBottom: "8px" }}
                      >
                        100% Tự Nhiên
                      </Title>
                      <Paragraph
                        style={{ color: "#666", margin: 0, fontSize: "14px" }}
                      >
                        Không chất bảo quản
                      </Paragraph>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div
                      style={{
                        background: "#ffffff",
                        padding: "24px",
                        borderRadius: "16px",
                        textAlign: "center",
                        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
                        border: "1px solid #f0f0f0",
                      }}
                    >
                      <SafetyCertificateOutlined
                        style={{
                          fontSize: "48px",
                          color: "#d4af37",
                          marginBottom: "16px",
                        }}
                      />
                      <Title
                        level={5}
                        style={{ color: "#1a1a2e", marginBottom: "8px" }}
                      >
                        Chứng Nhận
                      </Title>
                      <Paragraph
                        style={{ color: "#666", margin: 0, fontSize: "14px" }}
                      >
                        FDA & HACCP
                      </Paragraph>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div
                      style={{
                        background: "#ffffff",
                        padding: "24px",
                        borderRadius: "16px",
                        textAlign: "center",
                        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
                        border: "1px solid #f0f0f0",
                      }}
                    >
                      <StarOutlined
                        style={{
                          fontSize: "48px",
                          color: "#ff7a45",
                          marginBottom: "16px",
                        }}
                      />
                      <Title
                        level={5}
                        style={{ color: "#1a1a2e", marginBottom: "8px" }}
                      >
                        Chất Lượng Cao
                      </Title>
                      <Paragraph
                        style={{ color: "#666", margin: 0, fontSize: "14px" }}
                      >
                        Xuất khẩu quốc tế
                      </Paragraph>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div
                      style={{
                        background: "#ffffff",
                        padding: "24px",
                        borderRadius: "16px",
                        textAlign: "center",
                        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
                        border: "1px solid #f0f0f0",
                      }}
                    >
                      <HeartOutlined
                        style={{
                          fontSize: "48px",
                          color: "#eb2f96",
                          marginBottom: "16px",
                        }}
                      />
                      <Title
                        level={5}
                        style={{ color: "#1a1a2e", marginBottom: "8px" }}
                      >
                        Yêu Thương
                      </Title>
                      <Paragraph
                        style={{ color: "#666", margin: 0, fontSize: "14px" }}
                      >
                        Chăm sóc sức khỏe
                      </Paragraph>
                    </div>
                  </Col>
                </Row>

                {/* Floating decoration */}
                <div
                  style={{
                    position: "absolute",
                    top: "-10px",
                    right: "-10px",
                    width: "80px",
                    height: "80px",
                    background: "linear-gradient(135deg, #d4af37, #f4e4a6)",
                    borderRadius: "50%",
                    opacity: "0.1",
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

export default AboutUs;
