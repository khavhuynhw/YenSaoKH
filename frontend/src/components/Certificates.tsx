import React from "react";
import { Row, Col, Typography, Carousel, Card, Button } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  StarOutlined,
  GlobalOutlined,
  SecurityScanOutlined,
  LeftOutlined,
  RightOutlined,
  EyeOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const Certificates = () => {
  const carouselRef = React.useRef<any>(null);

  const certificates = [
    {
      id: 1,
      name: "FDA",
      fullName: "Food and Drug Administration",
      vietnameseName: "Cục Quản Lý Thực Phẩm v�� Dược Phẩm Hoa Kỳ",
      description:
        "Chứng nhận an toàn thực phẩm từ FDA Hoa Kỳ, đảm bảo sản phẩm đạt tiêu chuẩn xuất khẩu quốc tế",
      certificateNumber: "FDA-2023-BN-047892",
      issueDate: "15/03/2023",
      expiryDate: "14/03/2026",
      certificateImage:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      logo: "🇺🇸",
      color: "#1f4e79",
      icon: <SafetyCertificateOutlined />,
      verified: true,
      authority: "U.S. Food and Drug Administration",
    },
    {
      id: 2,
      name: "HACCP",
      fullName: "Hazard Analysis Critical Control Points",
      vietnameseName: "Phân Tích Mối Nguy và Điểm Kiểm Soát Tới Hạn",
      description:
        "Hệ thống quản lý an toàn thực phẩm HACCP đảm bảo kiểm soát chất lượng từ nguyên liệu đến thành phẩm",
      certificateNumber: "HACCP-VN-2023-891",
      issueDate: "28/02/2023",
      expiryDate: "27/02/2026",
      certificateImage:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
      logo: "🛡️",
      color: "#52c41a",
      icon: <SecurityScanOutlined />,
      verified: true,
      authority: "Vietnam Food Safety Department",
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
      certificateImage:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
      logo: "🌐",
      color: "#1890ff",
      icon: <GlobalOutlined />,
      verified: true,
      authority: "International Organization for Standardization",
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
      certificateImage:
        "https://images.unsplash.com/photo-1560472355-a5b4ab5a0e0b?w=400&h=300&fit=crop",
      logo: "🌿",
      color: "#73d13d",
      icon: <CheckCircleOutlined />,
      verified: true,
      authority: "Organic Certification Agency",
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
      certificateImage:
        "https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=400&h=300&fit=crop",
      logo: "⚙️",
      color: "#fa8c16",
      icon: <StarOutlined />,
      verified: true,
      authority: "Ministry of Health Vietnam",
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
      certificateImage:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
      logo: "🇻🇳",
      color: "#eb2f96",
      icon: <CheckCircleOutlined />,
      verified: true,
      authority: "Vietnam National Standard",
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
                    height: "560px",
                    transition: "all 0.3s ease",
                  }}
                  bodyStyle={{ padding: 0 }}
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
                  cover={
                    <div
                      style={{
                        position: "relative",
                        height: "200px",
                        overflow: "hidden",
                      }}
                    >
                      {/* Certificate Image */}
                      <div
                        style={{
                          background:
                            "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                          height: "100%",
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "20px",
                        }}
                      >
                        {/* Certificate Mock Design */}
                        <div
                          style={{
                            background:
                              "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                            border: `4px solid ${cert.color}`,
                            borderRadius: "12px",
                            width: "100%",
                            height: "160px",
                            position: "relative",
                            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "16px",
                          }}
                        >
                          {/* Certificate Header */}
                          <div
                            style={{ textAlign: "center", marginBottom: "8px" }}
                          >
                            <div
                              style={{
                                fontSize: "24px",
                                marginBottom: "4px",
                              }}
                            >
                              {cert.logo}
                            </div>
                            <Text
                              style={{
                                color: cert.color,
                                fontSize: "16px",
                                fontWeight: "700",
                                textTransform: "uppercase",
                                letterSpacing: "1px",
                              }}
                            >
                              {cert.name}
                            </Text>
                          </div>

                          {/* Certificate Body */}
                          <div style={{ textAlign: "center", flex: 1 }}>
                            <Text
                              style={{
                                color: "#1a1a2e",
                                fontSize: "11px",
                                fontWeight: "600",
                                marginBottom: "4px",
                                display: "block",
                              }}
                            >
                              CERTIFICATE OF COMPLIANCE
                            </Text>
                            <Text
                              style={{
                                color: "#666",
                                fontSize: "9px",
                                lineHeight: "1.2",
                                display: "block",
                              }}
                            >
                              This certifies that PureNest products meet all
                              requirements of {cert.fullName}
                            </Text>
                          </div>

                          {/* Certificate Number */}
                          <div
                            style={{
                              background: cert.color,
                              color: "#ffffff",
                              padding: "4px 8px",
                              borderRadius: "6px",
                              fontSize: "8px",
                              fontWeight: "600",
                              fontFamily: "monospace",
                            }}
                          >
                            {cert.certificateNumber}
                          </div>

                          {/* Certificate Seal */}
                          <div
                            style={{
                              position: "absolute",
                              top: "-8px",
                              right: "-8px",
                              width: "40px",
                              height: "40px",
                              background: `linear-gradient(135deg, ${cert.color}, ${cert.color}dd)`,
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              border: "3px solid #ffffff",
                              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                            }}
                          >
                            <CheckCircleOutlined
                              style={{
                                color: "#ffffff",
                                fontSize: "16px",
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Verified Badge */}
                      {cert.verified && (
                        <div
                          style={{
                            position: "absolute",
                            top: "12px",
                            left: "12px",
                            background: "#52c41a",
                            color: "#ffffff",
                            padding: "4px 8px",
                            borderRadius: "12px",
                            fontSize: "10px",
                            fontWeight: "600",
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                            zIndex: 2,
                          }}
                        >
                          <CheckCircleOutlined style={{ fontSize: "10px" }} />
                          Verified
                        </div>
                      )}

                      {/* View Certificate Overlay */}
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: "rgba(0, 0, 0, 0.7)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          opacity: 0,
                          transition: "opacity 0.3s ease",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.opacity = "1";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.opacity = "0";
                        }}
                      >
                        <Button
                          type="primary"
                          icon={<EyeOutlined />}
                          style={{
                            background: "rgba(255, 255, 255, 0.9)",
                            color: "#1a1a2e",
                            border: "none",
                            borderRadius: "20px",
                            fontWeight: "600",
                          }}
                        >
                          Xem Chứng Nhận
                        </Button>
                      </div>
                    </div>
                  }
                >
                  <div style={{ padding: "24px" }}>
                    {/* Certificate Info */}
                    <div style={{ textAlign: "center", marginBottom: "20px" }}>
                      <Title
                        level={4}
                        style={{
                          color: "#ffffff",
                          marginBottom: "8px",
                          fontSize: "18px",
                          fontWeight: "700",
                        }}
                      >
                        {cert.name}
                      </Title>

                      <Text
                        style={{
                          color: "rgba(255, 255, 255, 0.7)",
                          fontSize: "12px",
                          display: "block",
                          marginBottom: "4px",
                        }}
                      >
                        {cert.fullName}
                      </Text>

                      <Text
                        style={{
                          color: "rgba(255, 255, 255, 0.6)",
                          fontSize: "11px",
                          display: "block",
                          marginBottom: "12px",
                          fontStyle: "italic",
                        }}
                      >
                        {cert.vietnameseName}
                      </Text>

                      <Paragraph
                        style={{
                          color: "rgba(255, 255, 255, 0.8)",
                          fontSize: "13px",
                          lineHeight: "1.5",
                          marginBottom: "16px",
                          textAlign: "left",
                        }}
                      >
                        {cert.description}
                      </Paragraph>
                    </div>

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
                      <div style={{ marginBottom: "12px" }}>
                        <Text
                          style={{
                            color: "rgba(255, 255, 255, 0.7)",
                            fontSize: "11px",
                            display: "block",
                            marginBottom: "4px",
                          }}
                        >
                          Cơ quan cấp:
                        </Text>
                        <Text
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontWeight: "600",
                          }}
                        >
                          {cert.authority}
                        </Text>
                      </div>

                      <div style={{ marginBottom: "12px" }}>
                        <Text
                          style={{
                            color: "rgba(255, 255, 255, 0.7)",
                            fontSize: "11px",
                            display: "block",
                            marginBottom: "4px",
                          }}
                        >
                          Số chứng nhận:
                        </Text>
                        <Text
                          style={{
                            color: "#d4af37",
                            fontSize: "12px",
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
                              fontSize: "10px",
                              display: "block",
                            }}
                          >
                            Ngày cấp:
                          </Text>
                          <Text
                            style={{
                              color: "rgba(255, 255, 255, 0.9)",
                              fontSize: "11px",
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
                              fontSize: "10px",
                              display: "block",
                            }}
                          >
                            Hết hạn:
                          </Text>
                          <Text
                            style={{
                              color: "rgba(255, 255, 255, 0.9)",
                              fontSize: "11px",
                              fontWeight: "500",
                            }}
                          >
                            {cert.expiryDate}
                          </Text>
                        </Col>
                      </Row>
                    </div>

                    {/* Action Buttons */}
                    <Row gutter={[8, 8]}>
                      <Col span={12}>
                        <Button
                          size="small"
                          icon={<EyeOutlined />}
                          block
                          style={{
                            background: `linear-gradient(135deg, ${cert.color}, ${cert.color}dd)`,
                            border: "none",
                            color: "#ffffff",
                            borderRadius: "16px",
                            height: "32px",
                            fontSize: "11px",
                            fontWeight: "600",
                          }}
                        >
                          Xem
                        </Button>
                      </Col>
                      <Col span={12}>
                        <Button
                          size="small"
                          icon={<DownloadOutlined />}
                          block
                          style={{
                            background: "rgba(255, 255, 255, 0.1)",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            color: "#ffffff",
                            borderRadius: "16px",
                            height: "32px",
                            fontSize: "11px",
                            fontWeight: "600",
                          }}
                        >
                          Tải
                        </Button>
                      </Col>
                    </Row>
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
              icon={<DownloadOutlined />}
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
              Tải Xuống Tất Cả Chứng Nhận
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
