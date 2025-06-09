import React from "react";
import { Row, Col, Typography, Collapse, Card } from "antd";
import {
  QuestionCircleOutlined,
  SafetyCertificateOutlined,
  HeartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const FAQ = () => {
  const faqData = [
    {
      category: "Sản Phẩm",
      icon: <SafetyCertificateOutlined style={{ color: "#d4af37" }} />,
      questions: [
        {
          question: "Yến sào PureNest có được thu hoạch tự nhiên không?",
          answer:
            "Có, tất cả sản phẩm yến sào của chúng tôi đều được thu hoạch từ những hang động tự nhiên và trang trại nuôi yến bền vững. Chúng tôi không sử dụng bất kỳ chất kích thích hay hóa chất nào trong quá trình thu hoạch.",
        },
        {
          question: "Làm thế nào để phân biệt yến sào thật và giả?",
          answer:
            "Yến sào thật có cấu trúc sợi tự nhiên, màu trắng ngà hoặc hơi vàng nhạt, mùi tanh nhẹ đặc trưng. Khi ngâm nước, yến sào thật nở đều, không bị tan rã. Chúng tôi cung cấp giấy chứng nhận chất lượng cho mỗi sản phẩm.",
        },
        {
          question: "Yến sào có thể bảo quản trong bao lâu?",
          answer:
            "Yến sào khô có thể bảo quản 2-3 năm nếu để ở nơi khô ráo, thoáng mát. Yến sào đã chế biến nên sử d��ng ngay hoặc bảo quản trong tủ lạnh không quá 3 ngày.",
        },
      ],
    },
    {
      category: "Sức Khỏe",
      icon: <HeartOutlined style={{ color: "#eb2f96" }} />,
      questions: [
        {
          question: "Ai không nên sử dụng yến sào?",
          answer:
            "Người bị dị ứng protein, trẻ em dưới 6 tháng tuổi, và những người có tiền sử dị ứng với sản phẩm từ chim nên tham khảo ý kiến bác sĩ trước khi sử dụng.",
        },
        {
          question: "Bao lâu thì thấy hiệu quả khi dùng yến sào?",
          answer:
            "Thông thường, sau 2-4 tuần sử dụng đều đặn, bạn sẽ cảm nhận được sự cải thiện về da, tăng cường sức khỏe. Hiệu quả tốt nhất đạt được sau 2-3 tháng sử dụng liên tục.",
        },
        {
          question: "Liều lượng sử dụng yến sào như thế nào?",
          answer:
            "Người lớn: 3-5g yến sào khô/lần, 2-3 lần/tuần. Trẻ em trên 1 tuổi: 1-2g/lần, 1-2 lần/tuần. Nên sử dụng vào buổi sáng sớm hoặc tối trước khi ngủ để hấp thụ tốt nhất.",
        },
      ],
    },
    {
      category: "Mua Hàng",
      icon: <ShoppingOutlined style={{ color: "#52c41a" }} />,
      questions: [
        {
          question: "PureNest có giao hàng tận nơi không?",
          answer:
            "Có, chúng tôi giao hàng toàn quốc. Miễn phí giao hàng cho đơn hàng trên 2.000.000 VNĐ trong nội thành các thành phố lớn. Thời gian giao hàng từ 1-3 ngày làm việc.",
        },
        {
          question: "Có thể đổi trả sản phẩm không?",
          answer:
            "Chúng tôi chấp nhận đổi trả trong vòng 7 ngày kể từ ngày nhận hàng nếu sản phẩm còn nguyên seal, chưa sử dụng và có lỗi từ nhà sản xuất. Chi phí vận chuyển đổi trả do chúng tôi chịu.",
        },
        {
          question: "Có những hình thức thanh toán nào?",
          answer:
            "Chúng tôi hỗ trợ thanh toán: COD (thanh toán khi nhận hàng), chuyển khoản ngân hàng, thẻ tín dụng/ghi nợ, ví điện tử (MoMo, ZaloPay), và trả góp qua thẻ tín dụng.",
        },
      ],
    },
  ];

  return (
    <section
      id="faq"
      style={{
        padding: "120px 0",
        background:
          "linear-gradient(135deg, #faf8f3 0%, #ffffff 50%, #f8f6f0 100%)",
        position: "relative",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "-5%",
          width: "300px",
          height: "300px",
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
            Câu Hỏi Thường Gặp
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
            Giải Đáp Mọi
            <br />
            <span style={{ color: "#d4af37" }}>Thắc Mắc Của Bạn</span>
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
            Tìm hiểu thêm về sản phẩm, cách sử dụng và chính sách của chúng tôi
            qua những câu hỏi được quan tâm nhất.
          </Paragraph>
        </div>

        {/* FAQ Content */}
        <Row gutter={[32, 32]}>
          {faqData.map((category, categoryIndex) => (
            <Col xs={24} lg={8} key={categoryIndex}>
              <Card
                style={{
                  borderRadius: "24px",
                  border: "1px solid #f0f0f0",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.06)",
                  height: "100%",
                  overflow: "hidden",
                }}
                bodyStyle={{ padding: 0 }}
              >
                {/* Category Header */}
                <div
                  style={{
                    background: "linear-gradient(135deg, #1a1a2e, #2c2c54)",
                    padding: "32px 24px",
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                      fontSize: "24px",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    {category.icon}
                  </div>

                  <Title
                    level={3}
                    style={{
                      color: "#ffffff",
                      margin: 0,
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    {category.category}
                  </Title>
                </div>

                {/* Questions */}
                <div style={{ padding: "24px" }}>
                  <Collapse
                    ghost
                    expandIconPosition="right"
                    style={{
                      background: "transparent",
                    }}
                  >
                    {category.questions.map((item, index) => (
                      <Panel
                        header={
                          <Title
                            level={5}
                            style={{
                              color: "#1a1a2e",
                              margin: 0,
                              fontSize: "16px",
                              fontWeight: "600",
                              lineHeight: "1.4",
                            }}
                          >
                            {item.question}
                          </Title>
                        }
                        key={index}
                        style={{
                          borderBottom: "1px solid #f0f0f0",
                          marginBottom: "8px",
                        }}
                      >
                        <Paragraph
                          style={{
                            color: "#666",
                            lineHeight: "1.7",
                            margin: 0,
                            paddingTop: "8px",
                          }}
                        >
                          {item.answer}
                        </Paragraph>
                      </Panel>
                    ))}
                  </Collapse>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Contact Section */}
        <div
          style={{
            marginTop: "80px",
            textAlign: "center",
            background: "linear-gradient(135deg, #d4af37, #f4e4a6)",
            borderRadius: "24px",
            padding: "48px 32px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-20px",
              right: "-20px",
              width: "120px",
              height: "120px",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "50%",
            }}
          />

          <QuestionCircleOutlined
            style={{
              fontSize: "48px",
              color: "#1a1a2e",
              marginBottom: "24px",
            }}
          />

          <Title
            level={3}
            style={{
              color: "#1a1a2e",
              marginBottom: "16px",
              fontSize: "24px",
              fontWeight: "700",
            }}
          >
            Không Tìm Thấy Câu Trả Lời?
          </Title>

          <Paragraph
            style={{
              color: "#1a1a2e",
              fontSize: "16px",
              marginBottom: "32px",
              opacity: 0.8,
            }}
          >
            Đội ngũ chăm sóc khách hàng của chúng tôi luôn sẵn sàng hỗ trợ bạn
            24/7
          </Paragraph>

          <Row gutter={[16, 16]} justify="center">
            <Col xs={24} sm={12} md={6}>
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "16px",
                  padding: "20px",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Title
                  level={5}
                  style={{ color: "#1a1a2e", margin: "0 0 8px 0" }}
                >
                  Hotline
                </Title>
                <Paragraph
                  style={{ color: "#1a1a2e", margin: 0, fontWeight: "600" }}
                >
                  1900-xxxx
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "16px",
                  padding: "20px",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Title
                  level={5}
                  style={{ color: "#1a1a2e", margin: "0 0 8px 0" }}
                >
                  Email
                </Title>
                <Paragraph
                  style={{ color: "#1a1a2e", margin: 0, fontWeight: "600" }}
                >
                  support@purenest.vn
                </Paragraph>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
