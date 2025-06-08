import React from "react";
import { Select, Space } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useLanguage } from "../contexts/LanguageContext";
import type { Language } from "../types/translations";

const { Option } = Select;

interface LanguageSelectorProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "small" | "middle" | "large";
  showIcon?: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  className,
  style,
  size = "middle",
  showIcon = true,
}) => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (value: Language) => {
    setLanguage(value);
  };

  const languageOptions = [
    {
      value: "en" as Language,
      label: "English",
      flag: "🇺🇸",
    },
    {
      value: "vi" as Language,
      label: "Tiếng Việt",
      flag: "🇻🇳",
    },
  ];

  return (
    <div className={`language-selector ${className || ""}`} style={style}>
      <Space size="small">
        {showIcon && <GlobalOutlined />}
        <Select
          value={language}
          onChange={handleLanguageChange}
          size={size}
          style={{ minWidth: 120 }}
          className="language-select"
          popupClassName="language-select-dropdown"
        >
          {languageOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              <Space size="small">
                <span>{option.flag}</span>
                <span>{option.label}</span>
              </Space>
            </Option>
          ))}
        </Select>
      </Space>
    </div>
  );
};

export default LanguageSelector;
