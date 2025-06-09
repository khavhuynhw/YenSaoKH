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
    <AntHeader
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "#ffffff",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        height: "auto",
        lineHeight: "normal",
        padding: 0,
      }}
    >
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 20px" }}
      >
        <div
          style={{
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
                color: "#666666",
              }}
            >
              Premium Bird's Nest
            </span>
          </div>

          {/* Desktop Navigation */}
          <Menu
            mode="horizontal"
            items={menuItems}
            onClick={handleMenuClick}
            style={{
              display: "none",
              "@media (min-width: 768px)": { display: "flex" },
              border: "none",
              background: "transparent",
              flex: 1,
              justifyContent: "center",
              fontSize: "16px",
              fontWeight: 500,
            }}
            className="desktop-menu"
          />

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
                  height: "48px",
                  padding: "0 20px",
                  display: "flex",
                  alignItems: "center",
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
              style={{ display: "block" }}
              className="mobile-menu-btn"
              onClick={() => setDrawerVisible(true)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Navigation"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        width={300}
      >
        <Menu
          mode="vertical"
          items={menuItems}
          onClick={handleMenuClick}
          style={{ border: "none" }}
        />
      </Drawer>

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
      `}</style>
    </AntHeader>
  );
};

export default Header;
