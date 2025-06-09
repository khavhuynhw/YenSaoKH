import React from "react";
import { Row, Col, Typography, Carousel, Card, Button } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  StarOutlined,
  GlobalOutlined,
  ShieldCheckOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const Certificates = () => {
  const carouselRef = React.useRef<any>(null);

  const certificates = [
    {
      id: 1,
      name: "FDA",
      fullName: "Food and Drug Administration",
      vietnameseName: "Cục Quản Lý Thực Phẩm và Dược Phẩm Hoa Kỳ",
      description:
        "Chứng nhận an toàn thực phẩm từ FDA Hoa Kỳ, đảm bảo sản phẩm đạt tiêu chuẩn xuất khẩu quốc tế",
      certificateNumber: "FDA-2023-BN-047892",
      issueDate: "15/03/2023",
      expiryDate: "14/03/2026",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=150&fit=crop",
      logo: "🇺🇸",
      color: "#1f4e79",
      icon: <SafetyCertificateOutlined />,
      verified: true,
    },
    {
      id: 2,
      name: "HACCP",
      fullName: "Hazard Analysis Critical Control Points",
      vietnameseName: "Phân Tích Mối Nguy và Điểm Kiểm Soát Tới Hạn",
      description:
        "Hệ thống quản lý an toàn thực phẩm HACCP đảm bảo kiểm soát ch��t lượng từ nguyên liệu đến thành phẩm",
      certificateNumber: "HACCP-VN-2023-891",
      issueDate: "28/02/2023",
      expiryDate: "27/02/2026",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=150&fit=crop",
      logo: "🛡️",
      color: "#52c41a",
      icon: <ShieldCheckOutlined />,
      verified: true,
    },
    {
      id: 3,
      name: "ISO 22000",
      fullName: "Food Safety Management Systems",
      vietnameseName: "Hệ Thống Quản Lý An Toàn Thực Phẩm",
      description:
        "Chứng nhận ISO 22000 về hệ thống quản lý an toàn thực phẩm theo tiêu chuẩn quốc tế",
      certificateNumber: "ISO-22000-VN-2023-456",
      issueDate: "10/01/2023",
      expiryDate: "09/01/2026",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&h=150&fit=crop",
      logo: "🌐",
      color: "#1890ff",
      icon: <GlobalOutlined />,
      verified: true,
    },
    {
      id: 4,
      name: "ORGANIC",
      fullName: "Organic Certification",
      vietnameseName: "Chứng Nhận Sản Phẩm Hữu Cơ",
      description:
        "Chứng nhận sản phẩm hữu cơ 100% tự nhiên, không sử dụng chất hóa học hay thuốc bảo vệ thực vật",
      certificateNumber: "ORG-CERT-2023-112",
      issueDate: "05/04/2023",
      expiryDate: "04/04/2026",
      image:
        "https://images.unsplash.com/photo-1574263867128-36c8ac74ddbe?w=200&h=150&fit=crop",
      logo: "🌿",
      color: "#73d13d",
      icon: <CheckCircleOutlined />,
      verified: true,
    },
    {
      id: 5,
      name: "GMP",
      fullName: "Good Manufacturing Practice",
      vietnameseName: "Thực Hành Sản Xuất Tốt",
      description:
        "Chứng nhận GMP đảm bảo quy trình sản xuất theo tiêu chuẩn thực hành sản xuất tốt",
      certificateNumber: "GMP-2023-VN-789",
      issueDate: "20/05/2023",
      expiryDate: "19/05/2026",
      image:
        "https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=200&h=150&fit=crop",
      logo: "⚙️",
      color: "#fa8c16",
      icon: <StarOutlined />,
      verified: true,
    },
    {
      id: 6,
      name: "VIETNAM STANDARD",
      fullName: "TCVN - Tiêu Chuẩn Việt Nam",
      vietnameseName: "Tiêu Chuẩn Quốc Gia Việt Nam",
      description:
        "Chứng nhận đạt tiêu chuẩn quốc gia Việt Nam về chất lượng sản phẩm yến sào",
      certificateNumber: "TCVN-2023-BN-334",
      issueDate: "12/06/2023",
      expiryDate: "11/06/2026",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=200&h=150&fit=crop",
      logo: "🇻🇳",
      color: "#eb2f96",
      icon: <CheckCircleOutlined />,
      verified: true,
    },
  ];

  const CustomArrow = ({
    direction,
    onClick,
  }: {
    direction: "left" | "right";
    onClick?: () => void;
  }) => (
    <Button
      type="text"
      icon={direction === "left" ? <LeftOutlined /> : <RightOutlined />}
      onClick={onClick}
      style={{
        position: "absolute",
        top: "50%",
        [direction]: "-20px",
        transform: "translateY(-50%)",
        zIndex: 10,
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        background: "rgba(255, 255, 255, 0.95)",
        border: "1px solid #f0f0f0",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
        fontSize: "18px",
        color: "#1a1a2e",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );

  return (
    <section
      id="certificates"
      style={{
        padding: "120px 0",
        background:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorations */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "-10%",
          width: "300px",
          height: "300px",
          background: "linear-gradient(135deg, #d4af37, #f4e4a6)",
          borderRadius: "50%",
          opacity: "0.05",
          animation: "pulse 4s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-5%",
          width: "250px",
          height: "250px",
          background: "linear-gradient(135deg, #52c41a, #95de64)",
          borderRadius: "50%",
          opacity: "0.05",
          animation: "pulse 3s ease-in-out infinite 1.5s",
        }}
      />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.03; transform: scale(1); }
          50% { opacity: 0.08; transform: scale(1.1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .certificate-carousel .slick-dots {
          bottom: -60px;
        }
        .certificate-carousel .slick-dots li button {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          width: 12px;
          height: 12px;
        }
        .certificate-carousel .slick-dots li.slick-active button {
          background: #d4af37;
        }
      `}</style>

      <div
        style={{
          maxWidth: "1400px",
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
            Chứng Nhận Chất Lượng
          </span>

          <Title
            level={2}
            style={{
              fontSize: "3rem",
              color: "#ffffff",
              marginBottom: "24px",
              lineHeight: "1.2",
              fontWeight: "700",
            }}
          >
            Tiêu Chuẩn Quốc Tế
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #d4af37, #f4e4a6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Được Công Nhận
            </span>
          </Title>

          <Paragraph
            style={{
              fontSize: "18px",
              color: "rgba(255, 255, 255, 0.8)",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            Tất cả sản phẩm của PureNest đều được chứng nhận bởi các tổ chức uy
            tín quốc tế, đảm bảo chất lượng và an toàn cho người tiêu dùng.
          </Paragraph>
        </div>

        {/* Statistics */}
        <Row gutter={[32, 32]} style={{ marginBottom: "80px" }}>
          <Col xs={24} sm={8}>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "48px",
                  fontWeight: "800",
                  color: "#d4af37",
                  marginBottom: "8px",
                }}
              >
                15+
              </div>
              <Text
                style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "16px" }}
              >
                Chứng Nhận Quốc Tế
              </Text>
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "48px",
                  fontWeight: "800",
                  color: "#52c41a",
                  marginBottom: "8px",
                }}
              >
                100%
              </div>
              <Text
                style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "16px" }}
              >
                Sản Phẩm Được Kiểm Định
              </Text>
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "48px",
                  fontWeight: "800",
                  color: "#1890ff",
                  marginBottom: "8px",
                }}
              >
                50+
              </div>
              <Text
                style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "16px" }}
              >
                Quốc Gia Xuất Khẩu
              </Text>
            </div>
          </Col>
        </Row>

        {/* Certificates Carousel */}
        <div style={{ position: "relative", margin: "0 40px" }}>
          <CustomArrow
            direction="left"
            onClick={() => carouselRef.current?.prev()}
          />
          <CustomArrow
            direction="right"
            onClick={() => carouselRef.current?.next()}
          />

          <Carousel
            ref={carouselRef}
            autoplay
            autoplaySpeed={4000}
            dots={true}
            slidesToShow={3}
            slidesToScroll={1}
            infinite={true}
            className="certificate-carousel"
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
            style={{ padding: "0 20px" }}
          >
            {certificates.map((cert) => (
              <div key={cert.id} style={{ padding: "0 16px" }}>
                <Card
                  style={{
                    borderRadius: "24px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 16px 40px rgba(0, 0, 0, 0.2)",
                    overflow: "hidden",
                    height: "480px",
                    transition: "all 0.3s ease",
                  }}
                  bodyStyle={{ padding: "32px 24px 24px" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 24px 56px rgba(0, 0, 0, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 16px 40px rgba(0, 0, 0, 0.2)";
                  }}
                >
                  {/* Certificate Header */}
                  <div style={{ textAlign: "center", marginBottom: "24px" }}>
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        background: `linear-gradient(135deg, ${cert.color}, ${cert.color}88)`,
                        borderRadius: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 16px",
                        fontSize: "36px",
                        boxShadow: `0 8px 24px ${cert.color}33`,
                        animation: "float 3s ease-in-out infinite",
                      }}
                    >
                      {cert.logo}
                    </div>

                    {cert.verified && (
                      <div
                        style={{
                          background: "#52c41a",
                          color: "#ffffff",
                          padding: "4px 12px",
                          borderRadius: "15px",
                          fontSize: "12px",
                          fontWeight: "600",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          marginBottom: "12px",
                        }}
                      >
                        <CheckCircleOutlined style={{ fontSize: "12px" }} />
                        Đã Xác Thực
                      </div>
                    )}
                  </div>

                  {/* Certificate Info */}
                  <div style={{ textAlign: "center" }}>
                    <Title
                      level={4}
                      style={{
                        color: "#ffffff",
                        marginBottom: "8px",
                        fontSize: "20px",
                        fontWeight: "700",
                      }}
                    >
                      {cert.name}
                    </Title>

                    <Text
                      style={{
                        color: "rgba(255, 255, 255, 0.7)",
                        fontSize: "13px",
                        display: "block",
                        marginBottom: "4px",
                      }}
                    >
                      {cert.fullName}
                    </Text>

                    <Text
                      style={{
                        color: "rgba(255, 255, 255, 0.6)",
                        fontSize: "12px",
                        display: "block",
                        marginBottom: "16px",
                        fontStyle: "italic",
                      }}
                    >
                      {cert.vietnameseName}
                    </Text>

                    <Paragraph
                      style={{
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: "14px",
                        lineHeight: "1.6",
                        marginBottom: "20px",
                        textAlign: "left",
                      }}
                    >
                      {cert.description}
                    </Paragraph>

                    {/* Certificate Details */}
                    <div
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "12px",
                        padding: "16px",
                        marginBottom: "16px",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <div style={{ marginBottom: "8px" }}>
                        <Text
                          style={{
                            color: "rgba(255, 255, 255, 0.7)",
                            fontSize: "12px",
                            display: "block",
                          }}
                        >
                          Số chứng nhận:
                        </Text>
                        <Text
                          style={{
                            color: "#d4af37",
                            fontSize: "13px",
                            fontWeight: "600",
                            fontFamily: "monospace",
                          }}
                        >
                          {cert.certificateNumber}
                        </Text>
                      </div>

                      <Row gutter={[8, 8]}>
                        <Col span={12}>
                          <Text
                            style={{
                              color: "rgba(255, 255, 255, 0.7)",
                              fontSize: "11px",
                              display: "block",
                            }}
                          >
                            Ngày cấp:
                          </Text>
                          <Text
                            style={{
                              color: "rgba(255, 255, 255, 0.9)",
                              fontSize: "12px",
                              fontWeight: "500",
                            }}
                          >
                            {cert.issueDate}
                          </Text>
                        </Col>
                        <Col span={12}>
                          <Text
                            style={{
                              color: "rgba(255, 255, 255, 0.7)",
                              fontSize: "11px",
                              display: "block",
                            }}
                          >
                            Hết hạn:
                          </Text>
                          <Text
                            style={{
                              color: "rgba(255, 255, 255, 0.9)",
                              fontSize: "12px",
                              fontWeight: "500",
                            }}
                          >
                            {cert.expiryDate}
                          </Text>
                        </Col>
                      </Row>
                    </div>

                    {/* View Certificate Button */}
                    <Button
                      size="small"
                      style={{
                        background: `linear-gradient(135deg, ${cert.color}, ${cert.color}dd)`,
                        border: "none",
                        color: "#ffffff",
                        borderRadius: "20px",
                        height: "32px",
                        fontSize: "12px",
                        fontWeight: "600",
                        padding: "0 16px",
                      }}
                    >
                      Xem Chi Tiết
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: "80px" }}>
          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "24px",
              padding: "40px 32px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              maxWidth: "600px",
              margin: "0 auto",
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
              level={4}
              style={{
                color: "#ffffff",
                marginBottom: "12px",
                fontSize: "20px",
              }}
            >
              Chất Lượng Được Đảm Bảo
            </Title>

            <Paragraph
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                marginBottom: "24px",
                fontSize: "14px",
              }}
            >
              Mọi sản phẩm đều được kiểm định nghiêm ngặt và đạt tiêu chuẩn quốc
              tế cao nhất
            </Paragraph>

            <Button
              type="primary"
              size="large"
              style={{
                background: "linear-gradient(135deg, #d4af37, #f4e4a6)",
                border: "none",
                color: "#1a1a2e",
                borderRadius: "25px",
                height: "48px",
                padding: "0 32px",
                fontWeight: "600",
              }}
            >
              Tải Xuống Chứng Nhận
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
