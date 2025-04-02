package org.example.yensaokhanhhoa.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "user_addresses")
@Data
public class UserAddress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "address_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "address_line1", nullable = false)
    private String addressLine1;

    @Column(name = "address_line2")
    private String addressLine2;

    @Column(nullable = false)
    private String city;

    private String district;

    private String ward;

    @Column(nullable = false)
    private String province;

    @Column(name = "postal_code")
    private String postalCode;

    @Column(name = "is_default", nullable = false)
    private boolean isDefault = false;

    @Column(name = "recipient_name", nullable = false)
    private String recipientName;

    @Column(name = "recipient_phone", nullable = false)
    private String recipientPhone;
}
