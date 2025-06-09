import React from "react";
import { Row, Col, Typography, Steps, Card, Button } from "antd";
import {
  SearchOutlined,
  SafetyCertificateOutlined,
  ExperimentOutlined,
  GiftOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const { Step } = Steps;

const HowItWorks = () => {
  const processSteps = [
    {
      icon: <SearchOutlined style={{ fontSize: "32px", color: "#d4af37" }} />,
      title: "Tuyển Chọn Nguyên Liệu",
      description:
        "Chúng tôi tuyển chọn những tổ yến chất lượng cao nhất từ các hang động tự nhiên và trang trại nuôi yến bền vững.",
      details:
        "• Kiểm tra nguồn gốc xuất xứ\n• Đảm bảo môi trường sạch\n• Chọn lọc theo tiêu chuẩn khắt khe",
    },
    {
      icon: (
        <ExperimentOutlined style={{ fontSize: "32px", color: "#d4af37" }} />
      ),
      title: "Xử Lý Và Làm Sạch",
      description:
        "Quy trình làm sạch tỉ mỉ, loại bỏ tạp chất nhưng vẫn giữ nguyên cấu trúc và dinh dưỡng của yến sào.",
      details:
        "• Làm sạch bằng tay thủ công\n• Không sử dụng hóa chất\n• Kiểm tra từng sợi yến",
    },
    {
      icon: (
        <SafetyCertificateOutlined
          style={{ fontSize: "32px", color: "#d4af37" }}
        />
      ),
      title: "Kiểm Tra Chất Lượng",
      description:
        "Mỗi lô hàng đều được kiểm tra nghiêm ngặt về chất lượng, đảm bảo đạt tiêu chuẩn xuất khẩu quốc tế.",
      details:
        "• Kiểm tra vi sinh vật\n• Phân tích thành phần dinh dưỡng\n• Chứng nhận FDA & HACCP",
    },
    {
      icon: <GiftOutlined style={{ fontSize: "32px", color: "#d4af37" }} />,
      title: "Đóng Gói Cao Cấp",
      description:
        "Đóng gói trong môi trường vô trùng, sử dụng bao bì cao cấp để bảo quản chất lượng tối ưu.",
      details:
        "• Bao bì chân không\n• Môi trường vô trùng\n• Thiết kế sang trọng",
    },
  ];

  const usageSteps = [
    {
      step: "01",
      title: "Ngâm Yến",
      description:
        "Ngâm yến sào trong nước ấm khoảng 4-6 giờ cho đến khi nở mềm",
      time: "4-6 giờ",
    },
    {
      step: "02",
      title: "Làm Sạch",
      description: "Nhặt bỏ lông vũ và tạp chất còn sót lại, rửa sạch với nước",
      time: "15-20 phút",
    },
    {
      step: "03",
      title: "Hầm Nhừ",
      description:
        "Hầm cách thủy trong 30-45 phút với lửa nhỏ để giữ nguyên dinh dưỡng",
      time: "30-45 phút",
    },
    {
      step: "04",
      title: "Thưởng Thức",
      description:
        "Thêm đường phèn, mật ong hoặc trái cây theo sở thích và thưởng thức",
      time: "Ngay lập tức",
    },
  ];

  return (
    <section
      id="how-it-works"
      style={{
        padding: "120px 0",
        background: "linear-gradient(180deg, #ffffff 0%, #faf8f3 100%)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <span
            style={{
              background: "linear-gradient(135deg, #d4af37, #f4e4a6)",
              color: "#1a1a2e",
              padding: "10px 24px",
              borderRadius: "25px",
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: "24px",
              display: "inline-block",
            }}
          >
            Quy Trình Sản Xuất
          </span>

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
            Từ Tự Nhiên Đến
            <br />
            <span style={{ color: "#d4af37" }}>Sản Phẩm Hoàn Hảo</span>
          </Title>

          <Paragraph
            style={{
              fontSize: "18px",
              color: "#5a5a5a",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            Khám phá quy trình sản xuất khắt khe của chúng tôi, đảm bảo mỗi sản
            phẩm đều đạt chất lượng cao nhất và giữ nguyên giá trị dinh dưỡng tự
            nhiên.
          </Paragraph>
        </div>

        {/* Production Process */}
        <div style={{ marginBottom: "100px" }}>
          <Row gutter={[40, 40]}>
            {processSteps.map((step, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card
                  style={{
                    height: "100%",
                    borderRadius: "20px",
                    border: "1px solid #f0f0f0",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.06)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  bodyStyle={{ padding: "32px 24px" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 16px 48px rgba(0, 0, 0, 0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 32px rgba(0, 0, 0, 0.06)";
                  }}
                >
                  <div style={{ textAlign: "center", marginBottom: "24px" }}>
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        background: "linear-gradient(135deg, #faf8f3, #ffffff)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 16px",
                        border: "2px solid #f4e4a6",
                      }}
                    >
                      {step.icon}
                    </div>
                    <span
                      style={{
                        background: "#d4af37",
                        color: "#ffffff",
                        padding: "4px 12px",
                        borderRadius: "12px",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                    >
                      Bước {index + 1}
                    </span>
                  </div>

                  <Title
                    level={4}
                    style={{
                      color: "#1a1a2e",
                      textAlign: "center",
                      marginBottom: "16px",
                      fontSize: "18px",
                    }}
                  >
                    {step.title}
                  </Title>

                  <Paragraph
                    style={{
                      color: "#666",
                      textAlign: "center",
                      marginBottom: "16px",
                      lineHeight: "1.6",
                    }}
                  >
                    {step.description}
                  </Paragraph>

                  <div
                    style={{
                      background: "#faf8f3",
                      padding: "16px",
                      borderRadius: "12px",
                      border: "1px solid #f4e4a6",
                    }}
                  >
                    <Paragraph
                      style={{
                        color: "#5a5a5a",
                        fontSize: "14px",
                        margin: 0,
                        whiteSpace: "pre-line",
                        lineHeight: "1.5",
                      }}
                    >
                      {step.details}
                    </Paragraph>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Usage Guide */}
        <div
          style={{
            background: "linear-gradient(135deg, #1a1a2e, #2c2c54)",
            borderRadius: "32px",
            padding: "64px 40px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background decoration */}
          <div
            style={{
              position: "absolute",
              top: "-50px",
              right: "-50px",
              width: "200px",
              height: "200px",
              background: "linear-gradient(135deg, #d4af37, #f4e4a6)",
              borderRadius: "50%",
              opacity: "0.1",
            }}
          />

          <div style={{ position: "relative", zIndex: 2 }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <Title
                level={2}
                style={{
                  color: "#ffffff",
                  marginBottom: "16px",
                  fontSize: "2.5rem",
                  fontWeight: "700",
                }}
              >
                Hướng Dẫn Sử Dụng
              </Title>
              <Paragraph
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: "18px",
                  maxWidth: "500px",
                  margin: "0 auto",
                }}
              >
                Cách chế biến yến sào đúng cách để có được hương vị và dinh
                dưỡng tốt nhất
              </Paragraph>
            </div>

            <Row gutter={[32, 32]}>
              {usageSteps.map((step, index) => (
                <Col xs={24} sm={12} lg={6} key={index}>
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.08)",
                      borderRadius: "20px",
                      padding: "32px 24px",
                      textAlign: "center",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        background: "linear-gradient(135deg, #d4af37, #f4e4a6)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 20px",
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: "#1a1a2e",
                      }}
                    >
                      {step.step}
                    </div>

                    <Title
                      level={4}
                      style={{
                        color: "#ffffff",
                        marginBottom: "12px",
                        fontSize: "18px",
                      }}
                    >
                      {step.title}
                    </Title>

                    <Paragraph
                      style={{
                        color: "rgba(255, 255, 255, 0.8)",
                        marginBottom: "16px",
                        lineHeight: "1.6",
                      }}
                    >
                      {step.description}
                    </Paragraph>

                    <div
                      style={{
                        background: "rgba(212, 175, 55, 0.2)",
                        padding: "8px 16px",
                        borderRadius: "20px",
                        color: "#f4e4a6",
                        fontSize: "14px",
                        fontWeight: "600",
                        display: "inline-block",
                      }}
                    >
                      ⏱ {step.time}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            <div style={{ textAlign: "center", marginTop: "48px" }}>
              <Button
                type="primary"
                size="large"
                icon={<ShoppingCartOutlined />}
                style={{
                  height: "56px",
                  padding: "0 32px",
                  fontSize: "16px",
                  fontWeight: "600",
                  borderRadius: "28px",
                  background: "linear-gradient(135deg, #d4af37, #f4e4a6)",
                  border: "none",
                  color: "#1a1a2e",
                }}
              >
                Mua Ngay Để Trải Nghiệm
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
