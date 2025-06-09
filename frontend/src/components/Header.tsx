import { useState } from "react";
import { Layout, Menu, Button, Badge, Drawer } from "antd";
import { ShoppingCartOutlined, MenuOutlined } from "@ant-design/icons";

const { Header: AntHeader } = Layout;

const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const menuItems = [
    { key: "home", label: "Home", href: "#home" },
    { key: "products", label: "Products", href: "#products" },
    { key: "benefits", label: "Benefits", href: "#benefits" },
    { key: "about", label: "About", href: "#about" },
    { key: "contact", label: "Contact", href: "#contact" },
  ];

  const handleMenuClick = (e: any) => {
    const href = menuItems.find((item) => item.key === e.key)?.href;
    if (href) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
    setDrawerVisible(false);
  };

  return (
    <>
      <AntHeader
        style={{
          // Glassmorphism styling from Builder.io example
          alignItems: "center",
          backdropFilter: "blur(16px)",
          backgroundColor: "rgba(25, 25, 25, 0.32)",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "space-between",
          left: "12px",
          maxWidth: "1440px",
          paddingBottom: "16px",
          paddingLeft: "56px",
          paddingRight: "56px",
          paddingTop: "16px",
          position: "fixed",
          right: "12px",
          top: "12px",
          transitionDuration: "0.3s",
          transitionProperty: "background-color",
          width: "calc(100% - 24px)",
          zIndex: 21,
          height: "auto",
          lineHeight: "normal",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <div>
            <h2
              style={{
                color: "#d4af37",
                fontSize: "1.8rem",
                fontWeight: "bold",
                lineHeight: "1.2",
                margin: 0,
                marginBottom: "-4px",
              }}
            >
              PureNest
            </h2>
            <span
              style={{
                fontSize: "0.85rem",
                fontWeight: "normal",
                color: "rgba(255, 255, 255, 0.7)",
              }}
            >
              Premium Bird's Nest
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "32px",
              marginLeft: "80px",
              marginRight: "80px",
              flex: 1,
              justifyContent: "center",
            }}
            className="desktop-menu"
          >
            {menuItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                style={{
                  alignItems: "center",
                  borderRadius: "10px",
                  color: "rgba(255, 255, 255, 0.8)",
                  cursor: "pointer",
                  display: "flex",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  gap: "8px",
                  height: "100%",
                  padding: "8px 16px",
                  position: "relative",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#d4af37";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
                }}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(item.href)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Header Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* Cart Button */}
            <Badge count={0} showZero>
              <Button
                type="primary"
                shape="round"
                icon={<ShoppingCartOutlined />}
                size="large"
                style={{
                  background:
                    "linear-gradient(135deg, #d4af37 0%, #f4e4a6 100%)",
                  border: "none",
                  height: "40px",
                  padding: "0 16px",
                  display: "flex",
                  alignItems: "center",
                  color: "#ffffff",
                  fontWeight: 600,
                }}
              >
                Cart
              </Button>
            </Badge>

            {/* Mobile Menu Toggle */}
            <Button
              type="text"
              icon={<MenuOutlined />}
              size="large"
              className="mobile-menu-btn"
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                border: "none",
              }}
              onClick={() => setDrawerVisible(true)}
            />
          </div>
        </div>

        {/* Mobile Drawer */}
        <Drawer
          title={
            <span style={{ color: "#d4af37", fontWeight: "bold" }}>
              PureNest Navigation
            </span>
          }
          placement="right"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          width={300}
          styles={{
            body: { padding: "24px 0" },
          }}
        >
          <Menu
            mode="vertical"
            items={menuItems}
            onClick={handleMenuClick}
            style={{
              border: "none",
              fontSize: "16px",
            }}
          />
        </Drawer>
      </AntHeader>

      <style jsx>{`
        .desktop-menu {
          display: none;
        }
        @media (min-width: 768px) {
          .desktop-menu {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }

        /* Add some breathing room for the transparent header */
        @media (max-width: 768px) {
          .ant-layout-header {
            padding-left: 20px !important;
            padding-right: 20px !important;
            left: 8px !important;
            right: 8px !important;
            width: calc(100% - 16px) !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
