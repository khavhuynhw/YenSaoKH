import React, { useState } from "react";
import { Layout, Menu, Badge, Drawer, Button, Space } from "antd";
import {
  ShoppingCartOutlined,
  MenuOutlined,
  PhoneOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const { t } = useLanguage();

  const menuItems = [
    { key: "home", label: t.header.home },
    { key: "products", label: t.header.products },
    { key: "benefits", label: t.header.healthBenefits },
    { key: "about", label: t.header.aboutUs },
    { key: "contact", label: t.header.contact },
  ];

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const hideDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <AntHeader className="luxury-header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo-section">
          <h1 className="brand-logo">
            <span className="logo-icon">🪺</span>
            NestLux
          </h1>
          <span className="brand-tagline">{t.header.brandTagline}</span>
        </div>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <Menu
            mode="horizontal"
            items={menuItems}
            className="main-menu"
            selectedKeys={["home"]}
          />
        </div>

        {/* Action Buttons */}
        <div className="header-actions">
          <Space size="middle">
            <LanguageSelector size="small" showIcon={false} />
            <Button
              type="text"
              icon={<PhoneOutlined />}
              className="contact-btn"
            >
              {t.header.phone}
            </Button>
            <Button type="text" icon={<UserOutlined />} className="user-btn">
              {t.header.account}
            </Button>
            <Badge count={3} size="small">
              <Button
                type="primary"
                icon={<ShoppingCartOutlined />}
                className="cart-btn"
              >
                {t.header.cart}
              </Button>
            </Badge>
          </Space>
        </div>

        {/* Mobile Menu Button */}
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={showDrawer}
          className="mobile-menu-btn"
        />
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title={t.common.menu}
        placement="right"
        onClose={hideDrawer}
        open={drawerVisible}
        className="mobile-drawer"
      >
        <Menu
          mode="vertical"
          items={menuItems}
          selectedKeys={["home"]}
          className="mobile-menu"
        />
        <div className="mobile-actions">
          <LanguageSelector style={{ marginBottom: "16px" }} size="large" />
          <Button type="primary" block className="mobile-cart-btn">
            <ShoppingCartOutlined /> {t.header.cart} (3)
          </Button>
          <Button block className="mobile-account-btn">
            <UserOutlined /> {t.header.account}
          </Button>
          <div className="mobile-contact">
            <p>
              <PhoneOutlined /> {t.header.phone}
            </p>
            <p>
              <MailOutlined /> hello@nestlux.com
            </p>
          </div>
        </div>
      </Drawer>
    </AntHeader>
  );
};

export default Header;
