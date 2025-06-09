import { useState } from "react";
import { Layout, Drawer } from "antd";
import { ShoppingCartOutlined, MenuOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const { Header: AntHeader } = Layout;

const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const location = useLocation();

  const menuItems = [
    { key: "home", label: "Trang Chủ", href: "/", type: "route" },
    { key: "about", label: "Giới thiệu", href: "#about", type: "scroll" },
    { key: "products", label: "Sản phẩm", href: "/san-pham", type: "route" },
    { key: "news", label: "Tin Tức", href: "#benefits", type: "scroll" },
    { key: "promotions", label: "Khuyến mại", href: "#promotions", type: "scroll" },
    { key: "services", label: "Dịch vụ", href: "#services", type: "scroll" },
    { key: "handbook", label: "Cẩm nang", href: "#handbook", type: "scroll" },
    { key: "contact", label: "Liên hệ", href: "#contact", type: "scroll" },
  ];

  const handleMenuClick = (item: any) => {
    if (item.type === "scroll") {
      // For scroll navigation, only work on homepage
      if (location.pathname === "/") {
        document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
    setDrawerVisible(false);
  };

  const isActiveItem = (item: any) => {
    if (item.type === "route") {
      return location.pathname === item.href;
    } else {
      return location.pathname === "/" && item.key === "home";
    }
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
            maxWidth: "1400px", // Increased max-width to accommodate all nav items
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
              minWidth: "250px", // Ensure logo doesn't shrink too much
              flexShrink: 0, // Prevent logo from shrinking
            }}
          >
            <Link
              to="/"
              title="PureNest - Yến sào nguyên chất cao cấp"
              style={{
                cursor: "pointer",
                fontSize: "32px",
                fontWeight: 700,
                lineHeight: "32px",
                textTransform: "uppercase",
                touchAction: "manipulation",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  maxHeight: "60px",
                  maxWidth: "100%",
                  display: "flex",
                  alignItems: "center",
                  color: "#d4af37",
                  fontSize: "24px", // Slightly smaller to save space
                  fontWeight: 700,
                }}
              >
                PureNest
                <span
                  style={{
                    fontSize: "11px",
                    color: "#666",
                    marginLeft: "6px",
                    textTransform: "none",
                    fontWeight: 400,
                  }}
                >
                  Premium Bird's Nest
                </span>
              </div>
            </a>
          </div>

          {/* Navigation Menu - All items in one line */}
          <div
            style={{
              flex: "1", // Take available space
              display: "flex",
              justifyContent: "center", // Center the navigation
              maxHeight: "100%",
            }}
          >
            <ul
              style={{
                alignItems: "center",
                display: "flex",
                flexWrap: "nowrap", // Prevent wrapping - keep all items in one line
                justifyContent: "center",
                position: "relative",
                listStyle: "none",
                margin: 0,
                padding: 0,
                gap: "8px", // Reduced gap to fit more items
                whiteSpace: "nowrap", // Prevent text wrapping
              }}
              className="desktop-menu"
            >
              {menuItems.map((item) => (
                <li
                  key={item.key}
                  style={{
                    marginLeft: "4px", // Reduced margins
                    marginRight: "4px",
                    position: "relative",
                    textAlign: "left",
                    transitionDuration: "0.3s",
                    transitionProperty: "background-color",
                    flexShrink: 0, // Prevent items from shrinking
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
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px", // Slightly smaller font
                      letterSpacing: "0.2px",
                      lineHeight: "16px",
                      paddingLeft: "8px", // Increased padding for better click area
                      paddingRight: "8px",
                      paddingTop: "4px",
                      paddingBottom: "4px",
                      textAlign: "center",
                      textDecoration: "none",
                      touchAction: "manipulation",
                      transitionDuration: "0.2s",
                      fontWeight: item.active ? 600 : 400,
                      whiteSpace: "nowrap", // Prevent text wrapping
                      borderRadius: "4px", // Add subtle border radius
                    }}
                    onMouseEnter={(e) => {
                      if (!item.active) {
                        e.currentTarget.style.color = "rgb(195, 165, 122)";
                        e.currentTarget.style.backgroundColor =
                          "rgba(195, 165, 122, 0.1)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!item.active) {
                        e.currentTarget.style.color =
                          "rgba(102, 102, 102, 0.85)";
                        e.currentTarget.style.backgroundColor = "transparent";
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
              marginLeft: "20px",
              maxHeight: "100%",
              flexShrink: 0, // Prevent cart from shrinking
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
                  e.currentTarget.style.backgroundColor = "rgb(175, 145, 102)";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgb(195, 165, 122)";
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
          display: flex !important;
        }

        @media (max-width: 1200px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-section {
            display: block !important;
          }
        }

        @media (min-width: 1201px) {
          .mobile-menu-section {
            display: none !important;
          }
        }

        /* Ensure navigation items don't break into multiple lines */
        .desktop-menu li {
          flex-shrink: 0 !important;
        }

        .desktop-menu a {
          white-space: nowrap !important;
        }
      `}</style>
    </>
  );
};

export default Header;