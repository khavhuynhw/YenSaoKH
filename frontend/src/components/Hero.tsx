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

        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .hero-sparkle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: #d4af37;
          border-radius: 50%;
          animation: sparkle 3s ease-in-out infinite;
        }

        .hero-sparkle:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
        .hero-sparkle:nth-child(2) { top: 60%; left: 20%; animation-delay: 1s; }
        .hero-sparkle:nth-child(3) { top: 30%; left: 80%; animation-delay: 2s; }
        .hero-sparkle:nth-child(4) { top: 80%; left: 70%; animation-delay: 1.5s; }
        .hero-sparkle:nth-child(5) { top: 10%; left: 60%; animation-delay: 0.5s; }
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
        {/* Animated Sparkles */}
        <div className="hero-sparkle"></div>
        <div className="hero-sparkle"></div>
        <div className="hero-sparkle"></div>
        <div className="hero-sparkle"></div>
        <div className="hero-sparkle"></div>

        {/* Background decorations with parallax */}
        <div
          className="decoration-1"
          style={{
            position: "absolute",
            top: "10%",
            right: "-10%",
            width: "600px",
            height: "600px",
            background: "linear-gradient(135deg, #d4af37, #f4e4a6)",
            borderRadius: "50%",
            opacity: 0.1,
            animation: "float1 6s ease-in-out infinite",
            zIndex: 1,
            transform: `translateY(${parallaxY}px)`,
          }}
        />

        <div
          className="decoration-2"
          style={{
            position: "absolute",
            bottom: "5%",
            left: "-15%",
            width: "400px",
            height: "400px",
            background: "linear-gradient(135deg, #52c41a, #95de64)",
            borderRadius: "50%",
            opacity: 0.08,
            animation: "float2 8s ease-in-out infinite",
            zIndex: 1,
            transform: `translateY(${-parallaxY * 0.7}px)`,
          }}
        />

        <div
          className="decoration-3"
          style={{
            position: "absolute",
            top: "50%",
            right: "20%",
            width: "200px",
            height: "200px",
            background: "linear-gradient(135deg, #eb2f96, #f759ab)",
            borderRadius: "50%",
            opacity: 0.06,
            animation: "float3 5s ease-in-out infinite",
            zIndex: 1,
          }}
        />

        {/* Main content */}
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 20px",
            zIndex: 10,
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              minHeight: "calc(100vh - 160px)",
            }}
          >
            {/* Left Content */}
            <div style={{ flex: "1", paddingRight: "40px" }}>
              <AnimationWrapper animation="slideUp" delay={0.2}>
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
                    Yến Sào Cao Cấp
                  </span>
                </div>
              </AnimationWrapper>

              <AnimationWrapper animation="slideUp" delay={0.4}>
                <Title
                  level={1}
                  style={{
                    fontSize: "4rem",
                    color: "#1a1a2e",
                    marginBottom: "24px",
                    lineHeight: "1.1",
                    fontWeight: "800",
                  }}
                >
                  Tinh Hoa Thiên Nhiên
                  <br />
                  <span style={{ color: "#d4af37" }}>
                    Cho Sức Khỏe Hoàn Hảo
                  </span>
                </Title>
              </AnimationWrapper>

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

              {/* Key Features with stagger animation */}
              <AnimationWrapper
                animation="slideUp"
                delay={0.8}
                staggerChildren={true}
              >
                <div style={{ marginBottom: "40px" }}>
                  <Space direction="vertical" size="large">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <CheckCircleOutlined
                        style={{ color: "#52c41a", fontSize: "20px" }}
                      />
                      <span style={{ fontSize: "18px", color: "#1a1a2e" }}>
                        100% Yến sào tự nhiên từ Indonesia
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
                        style={{ color: "#52c41a", fontSize: "20px" }}
                      />
                      <span style={{ fontSize: "18px", color: "#1a1a2e" }}>
                        Chứng nhận FDA và HACCP quốc tế
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
                        style={{ color: "#52c41a", fontSize: "20px" }}
                      />
                      <span style={{ fontSize: "18px", color: "#1a1a2e" }}>
                        Giao hàng miễn phí toàn quốc
                      </span>
                    </div>
                  </Space>
                </div>
              </AnimationWrapper>

              {/* Action Buttons with hover effects */}
              <AnimationWrapper animation="slideUp" delay={1.0}>
                <Space size="large" wrap>
                  <Button
                    type="primary"
                    size="large"
                    icon={<ShoppingCartOutlined />}
                    className="hover-lift"
                    style={{
                      height: "64px",
                      padding: "0 32px",
                      fontSize: "18px",
                      fontWeight: "600",
                      borderRadius: "32px",
                      background: "linear-gradient(135deg, #d4af37, #f4e4a6)",
                      border: "none",
                      boxShadow: "0 8px 32px rgba(212, 175, 55, 0.3)",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    Mua Ngay
                  </Button>
                  <Button
                    size="large"
                    icon={<PlayCircleOutlined />}
                    className="hover-glow"
                    style={{
                      height: "64px",
                      padding: "0 24px",
                      fontSize: "16px",
                      fontWeight: "600",
                      borderRadius: "32px",
                      background: "transparent",
                      border: "2px solid #d4af37",
                      color: "#d4af37",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    Xem Video
                  </Button>
                </Space>
              </AnimationWrapper>

              {/* Trust Badges */}
              <AnimationWrapper animation="slideUp" delay={1.2}>
                <div
                  style={{
                    marginTop: "48px",
                    padding: "20px",
                    background: "rgba(255, 255, 255, 0.8)",
                    borderRadius: "20px",
                    border: "1px solid rgba(212, 175, 55, 0.2)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Space size="large" wrap>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <SafetyCertificateOutlined
                        style={{ color: "#52c41a", fontSize: "20px" }}
                      />
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#1a1a2e",
                          fontWeight: "600",
                        }}
                      >
                        Chứng nhận FDA
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <SafetyCertificateOutlined
                        style={{ color: "#1890ff", fontSize: "20px" }}
                      />
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#1a1a2e",
                          fontWeight: "600",
                        }}
                      >
                        ISO 22000
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <SafetyCertificateOutlined
                        style={{ color: "#d4af37", fontSize: "20px" }}
                      />
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#1a1a2e",
                          fontWeight: "600",
                        }}
                      >
                        HACCP
                      </span>
                    </div>
                  </Space>
                </div>
              </AnimationWrapper>
            </div>

            {/* Right Content - Product Showcase */}
            <AnimationWrapper animation="scaleIn" delay={0.8}>
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "500px",
                    height: "500px",
                  }}
                >
                  {/* Main Product Circle */}
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "350px",
                      height: "350px",
                      background: "linear-gradient(135deg, #ffffff, #f8f6f0)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
                      border: "8px solid rgba(212, 175, 55, 0.1)",
                    }}
                    className="animate-float"
                  >
                    <div
                      style={{
                        fontSize: "120px",
                        filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1))",
                      }}
                    >
                      🪺
                    </div>
                  </div>

                  {/* Orbiting Elements */}
                  <div
                    style={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      width: "80px",
                      height: "80px",
                      background: "linear-gradient(135deg, #52c41a, #95de64)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      fontSize: "24px",
                      fontWeight: "600",
                      animation: "float2 4s ease-in-out infinite",
                      boxShadow: "0 10px 30px rgba(82, 196, 26, 0.3)",
                    }}
                  >
                    100%
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      bottom: "40px",
                      left: "40px",
                      width: "60px",
                      height: "60px",
                      background: "linear-gradient(135deg, #d4af37, #f4e4a6)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#1a1a2e",
                      fontSize: "18px",
                      fontWeight: "600",
                      animation: "float3 3s ease-in-out infinite",
                      boxShadow: "0 8px 24px rgba(212, 175, 55, 0.4)",
                    }}
                  >
                    FDA
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      top: "60px",
                      left: "60px",
                      width: "50px",
                      height: "50px",
                      background: "linear-gradient(135deg, #1890ff, #69c0ff)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      fontSize: "16px",
                      fontWeight: "600",
                      animation: "float1 5s ease-in-out infinite",
                      boxShadow: "0 6px 20px rgba(24, 144, 255, 0.3)",
                    }}
                  >
                    ISO
                  </div>

                  {/* Floating Stats */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "20px",
                      right: "60px",
                      background: "rgba(255, 255, 255, 0.95)",
                      padding: "12px 16px",
                      borderRadius: "16px",
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(212, 175, 55, 0.2)",
                      animation: "float2 6s ease-in-out infinite",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        color: "#d4af37",
                        textAlign: "center",
                      }}
                    >
                      20+
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#666",
                        textAlign: "center",
                      }}
                    >
                      Năm kinh nghiệm
                    </div>
                  </div>

                  {/* Premium Badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "40px",
                      right: "120px",
                      background: "linear-gradient(135deg, #eb2f96, #f759ab)",
                      color: "#ffffff",
                      padding: "8px 16px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      animation: "float1 4s ease-in-out infinite",
                      boxShadow: "0 6px 20px rgba(235, 47, 150, 0.3)",
                    }}
                  >
                    Premium
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>

        {/* Scroll Indicator */}
        <AnimationWrapper animation="bounceIn" delay={2.0}>
          <div
            style={{
              position: "absolute",
              bottom: "30px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
              color: "#666",
              fontSize: "14px",
              cursor: "pointer",
            }}
            onClick={() => {
              document
                .getElementById("products")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>Khám phá sản phẩm</span>
            <div
              style={{
                width: "2px",
                height: "30px",
                background: "linear-gradient(to bottom, #d4af37, transparent)",
                borderRadius: "1px",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
          </div>
        </AnimationWrapper>
      </section>
    </>
  );
};

export default Hero;
