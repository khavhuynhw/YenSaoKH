import { useState } from "react";
import { Layout, Drawer } from "antd";
import { ShoppingCartOutlined, MenuOutlined } from "@ant-design/icons";

const { Header: AntHeader } = Layout;

const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const menuItems = [
    { key: "home", label: "Trang Chủ", href: "#home", active: true },
    { key: "about", label: "Giới thiệu", href: "#about" },
    { key: "products", label: "Sản phẩm", href: "#products" },
    { key: "news", label: "Tin Tức", href: "#benefits" },
    { key: "promotions", label: "Khuyến mại", href: "#promotions" },
    { key: "services", label: "Dịch vụ", href: "#services" },
    { key: "handbook", label: "Cẩm nang", href: "#handbook" },
    { key: "contact", label: "Liên hệ", href: "#contact" },
  ];

  const handleMenuClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setDrawerVisible(false);
  };

  return (
    <>
      <AntHeader
        style={{
          // Full width header
          alignItems: "center",
          display: "flex",
          height: "auto",
          justifyContent: "center", // Center the content container
          width: "100%", // Full width
          backgroundColor: "rgb(255, 255, 255)",
          position: "fixed",
          top: 0,
          left: 0, // Start from left edge
          right: 0, // Extend to right edge
          zIndex: 21,
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
          paddingTop: "12px",
          paddingBottom: "12px",
          paddingLeft: "0", // Remove side padding from header
          paddingRight: "0",
        }}
      >
        {/* Content container with max width */}
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "1170px",
            width: "100%",
            paddingLeft: "15px",
            paddingRight: "15px",
          }}
        >
          {/* Logo Section */}
          <div
            style={{
              lineHeight: "16px",
              marginRight: "30px",
              maxHeight: "100%",
              width: "328px",
            }}
          >
            <a
              title="PureNest - Yến sào nguyên chất cao cấp"
              href="#home"
              style={{
                cursor: "pointer",
                fontSize: "32px",
                fontWeight: 700,
                lineHeight: "32px",
                textTransform: "uppercase",
                touchAction: "manipulation",
                textDecoration: "none",
              }}
              onClick={(e) => {
                e.preventDefault();
                handleMenuClick("#home");
              }}
            >
              {/* Logo Image Placeholder - You can replace with actual image */}
              <div
                style={{
                  maxHeight: "60px",
                  maxWidth: "100%",
                  display: "flex",
                  alignItems: "center",
                  color: "#d4af37",
                  fontSize: "28px",
                  fontWeight: 700,
                }}
              >
                PureNest
                <span
                  style={{
                    fontSize: "12px",
                    color: "#666",
                    marginLeft: "8px",
                    textTransform: "none",
                    fontWeight: 400,
                  }}
                >
                  Premium Bird's Nest
                </span>
              </div>
            </a>
          </div>

          {/* Navigation Menu */}
          <div
            style={{
              flexBasis: "0%",
              flexGrow: 1,
              marginRight: "auto",
              maxHeight: "100%",
            }}
          >
            <ul
              style={{
                alignItems: "center",
                display: "flex",
                flexFlow: "row wrap",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                position: "relative",
                width: "100%",
                listStyle: "none",
                margin: 0,
                padding: 0,
                gap: "14px",
              }}
              className="desktop-menu"
            >
              {menuItems.map((item) => (
                <li
                  key={item.key}
                  style={{
                    marginLeft: "7px",
                    marginRight: "7px",
                    position: "relative",
                    textAlign: "left",
                    transitionDuration: "0.3s",
                    transitionProperty: "background-color",
                  }}
                >
                  <a
                    href={item.href}
                    style={{
                      alignItems: "center",
                      color: item.active
                        ? "rgb(195, 165, 122)"
                        : "rgba(102, 102, 102, 0.85)",
                      cursor: "pointer",
                      display: "inline-flex",
                      flexFlow: "row wrap",
                      flexWrap: "wrap",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "15px",
                      letterSpacing: "0.3px",
                      lineHeight: "16px",
                      paddingLeft: "5px",
                      paddingRight: "5px",
                      textAlign: "left",
                      textDecoration: "none",
                      touchAction: "manipulation",
                      transitionDuration: "0.2s",
                      fontWeight: item.active ? 600 : 400,
                    }}
                    onMouseEnter={(e) => {
                      if (!item.active) {
                        e.currentTarget.style.color = "rgb(195, 165, 122)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!item.active) {
                        e.currentTarget.style.color =
                          "rgba(102, 102, 102, 0.85)";
                      }
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuClick(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cart Button */}
          <div
            style={{
              marginLeft: "auto",
              maxHeight: "100%",
            }}
          >
            <ul
              style={{
                alignItems: "center",
                display: "flex",
                flexFlow: "row wrap",
                flexWrap: "wrap",
                justifyContent: "flex-end",
                position: "relative",
                width: "100%",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              <li
                style={{
                  marginLeft: "7px",
                  position: "relative",
                  textAlign: "left",
                  transitionDuration: "0.3s",
                  transitionProperty: "background-color",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    textAlign: "left",
                  }}
                >
                  <a
                    title="Giỏ hàng"
                    href="#cart"
                    style={{
                      backgroundColor: "rgb(195, 165, 122)",
                      borderRadius: "999px",
                      border: "0.8px solid rgba(0, 0, 0, 0.05)",
                      color: "rgb(255, 255, 255)",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                      fontWeight: 700,
                      minHeight: "40px",
                      minWidth: "40px",
                      padding: "8px",
                      position: "relative",
                      textAlign: "center",
                      textDecoration: "none",
                      touchAction: "manipulation",
                      transition: "all 0.3s ease",
                      verticalAlign: "middle",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgb(175, 145, 102)";
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgb(195, 165, 122)";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      // Handle cart click
                    }}
                  >
                    <ShoppingCartOutlined style={{ fontSize: "18px" }} />
                    {/* Cart count badge */}
                    <span
                      style={{
                        position: "absolute",
                        top: "-8px",
                        right: "-8px",
                        backgroundColor: "#ff4d4f",
                        borderRadius: "50%",
                        color: "white",
                        fontSize: "12px",
                        fontWeight: 600,
                        minWidth: "18px",
                        height: "18px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "2px solid white",
                      }}
                    >
                      0
                    </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div
            style={{
              display: "none",
              marginLeft: "auto",
              maxHeight: "100%",
            }}
            className="mobile-menu-section"
          >
            <button
              style={{
                background: "none",
                border: "none",
                padding: "12px",
                cursor: "pointer",
              }}
              onClick={() => setDrawerVisible(true)}
            >
              <MenuOutlined style={{ fontSize: "18px", color: "#666" }} />
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <Drawer
          title={
            <span style={{ color: "#d4af37", fontWeight: "bold" }}>
              PureNest Menu
            </span>
          }
          placement="right"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          width={300}
          styles={{
            body: {
              padding: "24px 0",
              background: "#ffffff",
            },
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {menuItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                style={{
                  padding: "12px 24px",
                  color: item.active
                    ? "rgb(195, 165, 122)"
                    : "rgba(102, 102, 102, 0.85)",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: item.active ? 600 : 400,
                  borderBottom: "1px solid #f0f0f0",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </Drawer>
      </AntHeader>

      <style jsx>{`
        .desktop-menu {
          display: flex;
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-section {
            display: block !important;
          }
        }

        @media (min-width: 769px) {
          .mobile-menu-section {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
