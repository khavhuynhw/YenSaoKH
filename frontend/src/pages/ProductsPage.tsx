import React, { useState } from "react";
import {
  Typography,
  Row,
  Col,
  Select,
  Input,
  Button,
  Pagination,
  Space,
  Breadcrumb,
  Slider,
  Checkbox,
} from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import ProductCard from "../components/ProductCard";
import AnimationWrapper from "../components/AnimationWrapper";

const { Title, Paragraph } = Typography;
const { Option } = Select;

const ProductsPage = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = [
    "Yến sào nguyên tổ",
    "Yến chưng sẵn",
    "Set quà tặng",
    "Yến tinh chế",
    "Combo gia đình",
    "Yến sào cao cấp",
  ];

  const products = [
    {
      id: 1,
      name: "Yến Sào Thô Nguyên Tổ Premium",
      englishName: "Premium Raw Bird's Nest",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      rating: 5,
      reviewCount: 128,
      discount: "15%",
      originalPrice: 800000,
      salePrice: 680000,
      category: "Yến sào nguyên tổ",
      isNew: true,
      isBestSeller: true,
      features: ["100% Tự Nhiên", "Hang Động Indonesia", "Không Tẩy Trắng"],
      benefits: ["Tăng Cường Collagen", "Chống Lão Hóa", "Tăng Sức Đề Kháng"],
      certifications: ["FDA", "HACCP", "ISO 22000"],
      description:
        "Y��n sào nguyên tổ cao cấp được thu hoạch từ các hang động tự nhiên tại Indonesia, hoàn toàn không qua xử lý hóa học.",
    },
    {
      id: 2,
      name: "Set Hộp Ngăn Kéo 10 Hũ Yến Chưng Sẵn",
      englishName: "Premium Gift Set 10 Jars",
      image:
        "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
      rating: 4,
      reviewCount: 89,
      discount: "9%",
      originalPrice: 1220000,
      salePrice: 1180000,
      category: "Set quà tặng",
      isNew: false,
      isBestSeller: true,
      features: ["10 Hũ Mix Vị", "Hộp Quà Sang Trọng", "Chất Lượng Cao"],
      benefits: ["Dễ Sử Dụng", "Tiện Lợi", "Phù Hợp Làm Quà"],
      certifications: ["FDA", "HACCP"],
      description:
        "Set quà tặng cao cấp với 10 hũ yến chưng sẵn mix vị, được đóng gói trong hộp ngăn kéo sang trọng.",
    },
    {
      id: 3,
      name: "Set Quà Tặng Yến Chưng Tươi Hộp Vali",
      englishName: "Fresh Bird's Nest Gift Suitcase",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      rating: 5,
      reviewCount: 156,
      discount: "12%",
      originalPrice: 2050000,
      salePrice: 1800000,
      category: "Set quà tặng",
      isNew: true,
      isBestSeller: false,
      features: [
        "Hộp Vali Sang Trọng",
        "Yến Tươi Chất Lượng",
        "Bảo Quản Tối Ưu",
      ],
      benefits: ["Cao Cấp", "Ý Nghĩa", "Chất Lượng Đỉnh Cao"],
      certifications: ["FDA", "HACCP", "ISO 22000", "ORGANIC"],
      description:
        "Set quà tặng cao cấp nhất với yến chưng tươi được đóng trong hộp vali sang trọng, phù hợp làm quà biếu quan trọng.",
    },
    {
      id: 4,
      name: "Yến Chưng Sẵn Nhân Sâm",
      englishName: "Ready-to-eat Ginseng Bird's Nest",
      image:
        "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=300&fit=crop",
      rating: 4,
      reviewCount: 73,
      discount: "10%",
      originalPrice: 550000,
      salePrice: 495000,
      category: "Yến chưng sẵn",
      isNew: false,
      isBestSeller: false,
      features: ["Kết Hợp Nhân Sâm", "Hũ Thủy Tinh", "Dễ Sử Dụng"],
      benefits: ["Bổ Dưỡng Kép", "Tăng Sức Khỏe", "Tiện Lợi"],
      certifications: ["FDA", "HACCP"],
      description:
        "Yến chưng sẵn kết hợp với nhân sâm Hàn Quốc, mang lại hiệu quả bổ dưỡng kép cho sức khỏe.",
    },
    {
      id: 5,
      name: "Set Yến Chưng Cao Cấp Hộp Gỗ",
      englishName: "Premium Wooden Box Bird's Nest Set",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      rating: 5,
      reviewCount: 94,
      discount: "8%",
      originalPrice: 3200000,
      salePrice: 2950000,
      category: "Yến sào cao cấp",
      isNew: true,
      isBestSeller: true,
      features: ["Hộp Gỗ Thủ Công", "12 Hũ Cao Cấp", "Chất Lượng Đỉnh Cao"],
      benefits: ["Sang Trọng", "Chất Lượng Tối Ưu", "Phù Hợp VIP"],
      certifications: ["FDA", "HACCP", "ISO 22000", "ORGANIC", "GMP"],
      description:
        "Set yến sào cao cấp nhất với hộp gỗ thủ công và 12 hũ yến chưng chất lượng đỉnh cao, dành cho khách hàng VIP.",
    },
    {
      id: 6,
      name: "Combo Yến Sào Gia Đình 6 Tháng",
      englishName: "Family Bird's Nest 6-Month Combo",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      rating: 4,
      reviewCount: 112,
      discount: "20%",
      originalPrice: 4800000,
      salePrice: 3840000,
      category: "Combo gia đình",
      isNew: false,
      isBestSeller: true,
      features: ["Đủ 6 Tháng", "Đa Dạng Sản Phẩm", "Tiết Kiệm Chi Phí"],
      benefits: ["Kinh Tế", "Tiện Lợi", "Đầy Đủ Dinh Dưỡng"],
      certifications: ["FDA", "HACCP", "ISO 22000"],
      description:
        "Combo đầy đủ cho gia đình trong 6 tháng với đa dạng các loại yến sào, tiết kiệm và tiện lợi.",
    },
    {
      id: 7,
      name: "Yến Tinh Chế Cao Cấp 50g",
      englishName: "Premium Refined Bird's Nest 50g",
      image:
        "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&h=300&fit=crop",
      rating: 5,
      reviewCount: 67,
      discount: "7%",
      originalPrice: 1500000,
      salePrice: 1395000,
      category: "Yến tinh chế",
      isNew: true,
      isBestSeller: false,
      features: ["Tinh Chế 100%", "Hàm Lượng Cao", "Dạng Khô"],
      benefits: ["Tinh Túy", "Bảo Quản Lâu", "Linh Hoạt Chế Biến"],
      certifications: ["FDA", "HACCP", "ISO 22000", "ORGANIC"],
      description:
        "Yến tinh chế cao cấp dạng khô, hàm lượng dinh dưỡng cao, có thể chế biến thành nhiều món khác nhau.",
    },
    {
      id: 8,
      name: "Set Yến Chưng Mini Cho Trẻ Em",
      englishName: "Mini Bird's Nest Set for Children",
      image:
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
      rating: 4,
      reviewCount: 45,
      discount: "13%",
      originalPrice: 680000,
      salePrice: 590000,
      category: "Yến chưng sẵn",
      isNew: false,
      isBestSeller: false,
      features: ["Phù Hợp Trẻ Em", "Vị Nhẹ Nhàng", "Hũ Mini Cute"],
      benefits: ["An Toàn", "Dễ Uống", "Bổ Sung Dinh Dưỡng"],
      certifications: ["FDA", "HACCP"],
      description:
        "Set yến chưng đặc biệt dành cho trẻ em với vị nhẹ nhàng và hũ mini dễ thương, an toàn cho bé.",
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const matchesPrice =
      product.salePrice >= priceRange[0] && product.salePrice <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.salePrice - b.salePrice;
      case "price-high":
        return b.salePrice - a.salePrice;
      case "rating":
        return b.rating - a.rating;
      case "name":
        return a.name.localeCompare(b.name);
      case "newest":
      default:
        return b.isNew ? 1 : -1;
    }
  });

  const itemsPerPage = viewMode === "grid" ? 12 : 8;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = sortedProducts.slice(startIndex, endIndex);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F5F0E8",
        paddingTop: "100px", // Account for fixed header
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 20px" }}>
        {/* Breadcrumb */}
        <AnimationWrapper animation="fadeIn" delay={0.1}>
          <Breadcrumb
            style={{ marginBottom: "24px" }}
            items={[
              {
                href: "/",
                title: (
                  <Space>
                    <HomeOutlined />
                    <span>Trang Chủ</span>
                  </Space>
                ),
              },
              {
                title: "Sản Phẩm",
              },
            ]}
          />
        </AnimationWrapper>

        {/* Page Header */}
        <AnimationWrapper animation="slideUp" delay={0.2}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <Title
              level={1}
              style={{
                fontSize: "3rem",
                color: "#8B4513",
                marginBottom: "16px",
                fontWeight: "700",
              }}
            >
              Sản Phẩm Yến Sào Cao Cấp
            </Title>
            <Paragraph
              style={{
                fontSize: "18px",
                color: "#666666",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              Khám phá bộ sưu tập yến sào nguyên chất cao cấp với chất lượng
              đỉnh cao
            </Paragraph>
          </div>
        </AnimationWrapper>

        <Row gutter={[24, 24]}>
          {/* Filters Sidebar */}
          <Col xs={24} lg={6}>
            <AnimationWrapper animation="slideLeft" delay={0.3}>
              <div
                style={{
                  background: "#FFFFFF",
                  padding: "24px",
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                  marginBottom: "24px",
                }}
              >
                <Title
                  level={4}
                  style={{ color: "#8B4513", marginBottom: "20px" }}
                >
                  <FilterOutlined style={{ marginRight: "8px" }} />
                  Bộ Lọc
                </Title>

                {/* Search */}
                <div style={{ marginBottom: "24px" }}>
                  <Paragraph style={{ fontWeight: "600", marginBottom: "8px" }}>
                    Tìm kiếm
                  </Paragraph>
                  <Input
                    placeholder="Tìm kiếm sản phẩm..."
                    prefix={<SearchOutlined />}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ borderRadius: "8px" }}
                  />
                </div>

                {/* Categories */}
                <div style={{ marginBottom: "24px" }}>
                  <Paragraph
                    style={{ fontWeight: "600", marginBottom: "12px" }}
                  >
                    Danh mục
                  </Paragraph>
                  <Checkbox.Group
                    value={selectedCategories}
                    onChange={setSelectedCategories}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {categories.map((category) => (
                      <Checkbox key={category} value={category}>
                        {category}
                      </Checkbox>
                    ))}
                  </Checkbox.Group>
                </div>

                {/* Price Range */}
                <div style={{ marginBottom: "24px" }}>
                  <Paragraph
                    style={{ fontWeight: "600", marginBottom: "12px" }}
                  >
                    Khoảng giá
                  </Paragraph>
                  <Slider
                    range
                    min={0}
                    max={5000000}
                    step={100000}
                    value={priceRange}
                    onChange={setPriceRange}
                    tooltip={{
                      formatter: (value) => formatPrice(value || 0),
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "8px",
                      fontSize: "12px",
                      color: "#666",
                    }}
                  >
                    <span>{formatPrice(priceRange[0])}</span>
                    <span>{formatPrice(priceRange[1])}</span>
                  </div>
                </div>

                {/* Clear Filters */}
                <Button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategories([]);
                    setPriceRange([0, 5000000]);
                  }}
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    border: "1px solid #A0522D",
                    color: "#A0522D",
                  }}
                >
                  Xóa Bộ Lọc
                </Button>
              </div>
            </AnimationWrapper>
          </Col>

          {/* Products Section */}
          <Col xs={24} lg={18}>
            {/* Toolbar */}
            <AnimationWrapper animation="slideRight" delay={0.3}>
              <div
                style={{
                  background: "#FFFFFF",
                  padding: "16px 24px",
                  borderRadius: "12px",
                  marginBottom: "24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "16px",
                  boxShadow: "0 2px 12px rgba(0, 0, 0, 0.06)",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <Paragraph style={{ margin: 0, color: "#666" }}>
                    Hiển thị {startIndex + 1}-
                    {Math.min(endIndex, sortedProducts.length)} của{" "}
                    {sortedProducts.length} sản phẩm
                  </Paragraph>
                </div>

                <div
                  style={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <Select
                    value={sortBy}
                    onChange={setSortBy}
                    style={{ minWidth: "160px" }}
                  >
                    <Option value="newest">Mới nhất</Option>
                    <Option value="price-low">Giá thấp đến cao</Option>
                    <Option value="price-high">Giá cao đến thấp</Option>
                    <Option value="rating">Đánh giá cao nhất</Option>
                    <Option value="name">Tên A-Z</Option>
                  </Select>

                  <div style={{ display: "flex", gap: "4px" }}>
                    <Button
                      type={viewMode === "grid" ? "primary" : "default"}
                      icon={<AppstoreOutlined />}
                      onClick={() => setViewMode("grid")}
                      style={{
                        borderRadius: "8px",
                        backgroundColor:
                          viewMode === "grid" ? "#A0522D" : "transparent",
                        borderColor: "#A0522D",
                        color: viewMode === "grid" ? "#FFFFFF" : "#A0522D",
                      }}
                    />
                    <Button
                      type={viewMode === "list" ? "primary" : "default"}
                      icon={<UnorderedListOutlined />}
                      onClick={() => setViewMode("list")}
                      style={{
                        borderRadius: "8px",
                        backgroundColor:
                          viewMode === "list" ? "#A0522D" : "transparent",
                        borderColor: "#A0522D",
                        color: viewMode === "list" ? "#FFFFFF" : "#A0522D",
                      }}
                    />
                  </div>
                </div>
              </div>
            </AnimationWrapper>

            {/* Products Grid/List */}
            <AnimationWrapper animation="fadeIn" delay={0.4}>
              {paginatedProducts.length > 0 ? (
                <Row gutter={[20, 20]}>
                  {paginatedProducts.map((product, index) => (
                    <Col
                      key={product.id}
                      xs={24}
                      sm={viewMode === "grid" ? 12 : 24}
                      lg={viewMode === "grid" ? 8 : 24}
                      xl={viewMode === "grid" ? 6 : 24}
                    >
                      <AnimationWrapper
                        animation="slideUp"
                        delay={0.1 * (index % 4)}
                      >
                        <ProductCard product={product} viewMode={viewMode} />
                      </AnimationWrapper>
                    </Col>
                  ))}
                </Row>
              ) : (
                <div
                  style={{
                    textAlign: "center",
                    padding: "60px 20px",
                    background: "#FFFFFF",
                    borderRadius: "16px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <Title
                    level={3}
                    style={{ color: "#8B4513", marginBottom: "16px" }}
                  >
                    Không tìm thấy sản phẩm
                  </Title>
                  <Paragraph style={{ color: "#666", marginBottom: "24px" }}>
                    Vui lòng thử thay đổi bộ lọc hoặc từ khóa tìm kiếm
                  </Paragraph>
                  <Button
                    type="primary"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategories([]);
                      setPriceRange([0, 5000000]);
                    }}
                    style={{
                      backgroundColor: "#A0522D",
                      borderColor: "#A0522D",
                      borderRadius: "8px",
                    }}
                  >
                    Xóa Bộ Lọc
                  </Button>
                </div>
              )}
            </AnimationWrapper>

            {/* Pagination */}
            {paginatedProducts.length > 0 && (
              <AnimationWrapper animation="fadeIn" delay={0.5}>
                <div style={{ textAlign: "center", marginTop: "40px" }}>
                  <Pagination
                    current={currentPage}
                    total={sortedProducts.length}
                    pageSize={itemsPerPage}
                    onChange={setCurrentPage}
                    showSizeChanger={false}
                    showQuickJumper
                    showTotal={(total, range) =>
                      `${range[0]}-${range[1]} của ${total} sản phẩm`
                    }
                    style={{
                      "& .ant-pagination-item-active": {
                        backgroundColor: "#A0522D",
                        borderColor: "#A0522D",
                      },
                    }}
                  />
                </div>
              </AnimationWrapper>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductsPage;
