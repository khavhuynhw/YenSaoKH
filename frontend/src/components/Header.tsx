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
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg px-0"
      style={{ height: "auto", lineHeight: "normal" }}
    >
      <div className="max-w-6xl mx-auto px-5 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="logo">
            <h2
              className="text-3xl font-bold leading-tight m-0"
              style={{ color: "#d4af37" }}
            >
              PureNest
            </h2>
            <span className="text-sm font-normal text-gray-500">
              Premium Bird's Nest
            </span>
          </div>

          {/* Desktop Navigation */}
          <Menu
            mode="horizontal"
            items={menuItems}
            onClick={handleMenuClick}
            className="hidden md:flex border-none bg-transparent flex-1 justify-center"
            style={{ fontSize: "16px", fontWeight: 500 }}
          />

          {/* Header Actions */}
          <div className="flex items-center gap-4">
            {/* Cart Button */}
            <Badge count={0} showZero>
              <Button
                type="primary"
                shape="round"
                icon={<ShoppingCartOutlined />}
                size="large"
                className="flex items-center"
                style={{
                  background:
                    "linear-gradient(135deg, #d4af37 0%, #f4e4a6 100%)",
                  border: "none",
                  height: "48px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
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
              className="md:hidden"
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
    </AntHeader>
  );
};

export default Header;
