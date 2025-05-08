package org.example.yensaokhanhhoa.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "products")
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @Column(nullable = false)
    private String name;

    @Column(unique = true, nullable = false)
    private String slug;

    @Column(unique = true, nullable = false)
    private String sku;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;

    @Column(name = "sale_price", precision = 10, scale = 2)
    private BigDecimal salePrice;

    @Column(name = "stock_quantity", nullable = false)
    private Integer stockQuantity;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String description;

    @Column(name = "short_description", columnDefinition = "TEXT")
    private String shortDescription;

    private String origin;

    private String certification;

    private String grade;

    @Column(name = "processing_type")
    private String processingType;

    private Double weight;

    @Column(nullable = false)
    private boolean featured = false;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ProductStatus status = ProductStatus.ACTIVE;

    @Column(name = "seo_title")
    private String seoTitle;

    @Column(name = "seo_description", columnDefinition = "TEXT")
    private String seoDescription;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<ProductImage> images = new HashSet<>();

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<ProductAttribute> attributes = new HashSet<>();


    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private Set<Review> reviews = new HashSet<>();

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private Set<ProductBatch> batches = new HashSet<>();

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private Set<InventoryLog> inventoryLogs = new HashSet<>();

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<UserWishlist> wishlists = new HashSet<>();

    @Column(name = "created_at")
    @CreationTimestamp
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    @UpdateTimestamp
    private LocalDateTime updatedAt;

    public enum ProductStatus {
        ACTIVE, INACTIVE, OUT_OF_STOCK
    }
}
