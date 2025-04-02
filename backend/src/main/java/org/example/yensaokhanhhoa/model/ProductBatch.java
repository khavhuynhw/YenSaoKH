package org.example.yensaokhanhhoa.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "product_batches")
@Data
public class ProductBatch {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "batch_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(name = "harvest_date")
    private LocalDate harvestDate;

    @Column(name = "harvest_location")
    private String harvestLocation;

    @Column(name = "processing_date")
    private LocalDate processingDate;

    @Column(name = "qr_code", unique = true)
    private String qrCode;

    @Column(name = "certification_details", columnDefinition = "TEXT")
    private String certificationDetails;

    @Column(name = "expiry_date")
    private LocalDate expiryDate;

    @OneToMany(mappedBy = "batch", cascade = CascadeType.ALL)
    private Set<InventoryLog> inventoryLogs = new HashSet<>();
}
