import { Button, Typography, Space } from "antd";
import {
  CheckCircleOutlined,
  ShoppingCartOutlined,
  PlayCircleOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import AnimationWrapper from "./AnimationWrapper";
import { useParallax } from "../hooks/useScrollAnimation";

const { Title, Paragraph } = Typography;

const Hero = () => {
  const parallaxY = useParallax(0.3);

  return (
    <>
      {/* Add CSS animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }

        @keyframes float1 {
          0%, 100% {
            transform: translateY(0px) rotate(-5deg);
          }
          50% {
            transform: translateY(-10px) rotate(-5deg);
          }
        }

        @keyframes float2 {
          0%, 100% {
            transform: translateY(0px) rotate(8deg);
          }
          50% {
            transform: translateY(-8px) rotate(8deg);
          }
        }

        @keyframes float3 {
          0%, 100% {
            transform: translateY(0px) rotate(-3deg);
          }
          50% {
            transform: translateY(-12px) rotate(-3deg);
          }
        }

        .float1 {
          animation: float1 7s ease-in-out infinite;
        }

        .float2 {
          animation: float2 8s ease-in-out infinite;
        }

        .float3 {
          animation: float3 6s ease-in-out infinite;
        }

        .pulse-glow {
          animation: pulse 3s ease infinite;
        }
      `}</style>

      <section
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f8f6f0 0%, #ffffff 100%)",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: "80px",
        }}
      >
        }}
      >
        {/* Full width container */}
        <div style={{ width: "100%", position: "relative" }}>
          {/* Content container with max width */}
          <div
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 20px", zIndex: 10, position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", minHeight: "calc(100vh - 160px)" }}>
            {/* Right Content - Product Showcase */}
            <AnimationWrapper animation="scaleIn" delay={0.8}>
              <div style={{ flex: "1", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div
                  style={{
                    position: "relative",
                    width: "500px",
                    height: "500px",
                  }}
                >
                      borderRadius: "25px",
                      fontSize: "14px",
                      fontWeight: "600",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    Yến Sào Cao Cấp
                  </span>
                </div>
              </AnimationWrapper>
              style={{
                display: "flex",
                alignItems: "center",
                gap: "80px",
                minHeight: "600px",
              }}
            >
              {/* Left Column - Text Content */}
              <div
                style={{
                  flex: "1",
                  maxWidth: "600px",
                }}
              >
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
                    <SafetyCertificateOutlined style={{ fontSize: "16px" }} />
                    <span>Chứng Nhận Cấp AAA Cao Cấp</span>
                  </div>
                </div>

                {/* Main Title */}
                <Title
                  level={1}
                  style={{
                    fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
                    lineHeight: "1.1",
                    marginBottom: "28px",
                    color: "#1a1a2e",
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
              <AnimationWrapper animation="slideUp" delay={0.6}>
                <Paragraph
                  style={{
                    fontSize: "1.3rem",
                    color: "#5a5a5a",
                    marginBottom: "32px",
                    lineHeight: "1.6",
                    maxWidth: "600px",
                  }}
                >
                  Sản phẩm yến sào nguyên chất từ Indonesia, được chế biến theo
                  công nghệ hiện đại, mang lại sức khỏe và sắc đẹp tự nhiên.
                </Paragraph>
              </AnimationWrapper>

                {/* Feature Points */}
                <div style={{ marginBottom: "40px" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <CheckCircleOutlined
                        style={{ color: "#d4af37", fontSize: "18px" }}
                      />
                      <span
                        style={{
                          fontWeight: 500,
                          color: "#2c2c2c",
                          fontSize: "16px",
                        }}
                      >
                        100% Tự Nhiên & Nguyên Chất
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <CheckCircleOutlined
                        style={{ color: "#d4af37", fontSize: "18px" }}
                      />
                      <span
                        style={{
                          fontWeight: 500,
                          color: "#2c2c2c",
                          fontSize: "16px",
                        }}
                      >
                        Miễn Phí Vận Chuyển Toàn Cầu
                      </span>
                    </div>
                  </div>
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
                      fontSize: "18px",
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
                    icon={<PlayCircleOutlined />}
                    style={{
                      height: "56px",
                      padding: "0 32px",
                      fontSize: "18px",
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
                      <span
                        style={{
                          fontWeight: 500,
                          color: "#2c2c2c",
                          fontSize: "15px",
                        }}
                      >
                        4.9/5 từ 2,500+ đánh giá
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span style={{ fontSize: "16px" }}>🏆</span>
                      <span
                        style={{
                          fontWeight: 500,
                          color: "#2c2c2c",
                          fontSize: "15px",
                        }}
                      >
                        Chất lượng đạt giải thưởng
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span style={{ fontSize: "16px" }}>🔒</span>
                      <span
                        style={{
                          fontWeight: 500,
                          color: "#2c2c2c",
                          fontSize: "15px",
                        }}
                      >
                        Đảm bảo hoàn tiền trong 30 ngày
                      </span>
                    </div>
                  </Space>
                </div>
              </div>

              {/* Right Column - Product Image with Floating Tags */}
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "500px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "400px",
                    height: "400px",
                  }}
                >
                  {/* Main Product Image Container */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* Product Image */}
                    <div
                      style={{
                        width: "350px",
                        height: "350px",
                        borderRadius: "20px",
                        overflow: "hidden",
                        boxShadow: "0 30px 100px rgba(0, 0, 0, 0.15)",
                        position: "relative",
                        background: "white",
                      }}
                    >
                      {/* Replace this div with your actual image */}
                      <img
                        src="https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                        alt="Premium Bird's Nest Product"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "20px",
                        }}
                        onError={(e) => {
                          // Fallback to a placeholder if image fails to load
                          e.currentTarget.style.display = "none";
                          e.currentTarget.parentElement!.innerHTML = `
                            <div style="
                              width: 100%;
                              height: 100%;
                              background: linear-gradient(135deg, #f8f8f8 0%, #e8e8e8 100%);
                              display: flex;
                              align-items: center;
                              justify-content: center;
                              font-size: 1.2rem;
                              color: #666;
                              border-radius: 20px;
                            ">
                              Premium Bird's Nest<br/>Product Image
                            </div>
                          `;
                        }}
                      />
                    </div>

                    {/* Pulsing Glow Effect */}
                    <div
                      className="pulse-glow"
                      style={{
                        position: "absolute",
                        top: "-20px",
                        left: "-20px",
                        right: "-20px",
                        bottom: "-20px",
                        background:
                          "radial-gradient(circle, rgb(212, 165, 116) 0%, rgba(0, 0, 0, 0) 70%)",
                        borderRadius: "30px",
                        zIndex: -1,
                      }}
                    />
                  </div>

                  {/* Floating Benefit Tags - Positioned Closer to Image */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-30px", // Moved closer
                      left: "-50px", // Moved closer
                      right: "-30px", // Moved closer
                      bottom: "-30px", // Moved closer
                      pointerEvents: "none",
                    }}
                  >
                    {/* Tăng Collagen - Top Left */}
                    <div
                      className="float1"
                      style={{
                        position: "absolute",
                        top: "40px", // Closer to image
                        left: "-30px", // Closer to image
                        padding: "10px 18px",
                        fontSize: "13px",
                        fontWeight: 500,
                        borderRadius: "25px",
                        border: "none",
                        background: "white",
                        color: "#d4af37",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
                        whiteSpace: "nowrap",
                        zIndex: 10,
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(212, 175, 55, 0.2)",
                      }}
                    >
                      Tăng Collagen
                    </div>

                    {/* Chống Lão Hóa - Top Right */}
                    <div
                      className="float2"
                      style={{
                        position: "absolute",
                        top: "80px", // Closer to image
                        right: "-25px", // Closer to image
                        padding: "10px 18px",
                        fontSize: "13px",
                        fontWeight: 500,
                        borderRadius: "25px",
                        border: "none",
                        background: "white",
                        color: "#1890ff",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
                        whiteSpace: "nowrap",
                        zIndex: 10,
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(24, 144, 255, 0.2)",
                      }}
                    >
                      Chống Lão Hóa
                    </div>

                    {/* Hỗ Trợ Miễn Dịch - Bottom Left */}
                    <div
                      className="float3"
                      style={{
                        position: "absolute",
                        bottom: "40px", // Closer to image
                        left: "-35px", // Closer to image
                        padding: "10px 18px",
                        fontSize: "13px",
                        fontWeight: 500,
                        borderRadius: "25px",
                        border: "none",
                        background: "white",
                        color: "#52c41a",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
                        whiteSpace: "nowrap",
                        zIndex: 10,
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(82, 196, 26, 0.2)",
                      }}
                    >
                      Hỗ Trợ Miễn Dịch
                    </div>

                    {/* Tăng Năng Lượng - Bottom Right */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "80px", // Closer to image
                        right: "-20px", // Closer to image
                        padding: "10px 18px",
                        fontSize: "13px",
                        fontWeight: 500,
                        borderRadius: "25px",
                        border: "none",
                        background: "white",
                        color: "#722ed1",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
                        whiteSpace: "nowrap",
                        zIndex: 10,
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(114, 46, 209, 0.2)",
                        animation: "float1 6s ease-in-out infinite reverse",
                      }}
                    >
                      Tăng Năng Lượng
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          section {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }

        @media (max-width: 768px) {
          section > div > div > div {
            flex-direction: column !important;
            gap: 40px !important;
            text-align: center !important;
          }

          section > div > div > div > div:first-child {
            max-width: 100% !important;
          }

          section > div > div > div > div:last-child {
            order: -1;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;