package org.example.yensaokhanhhoa.controller;

import org.example.yensaokhanhhoa.model.ProductAttribute;
import org.example.yensaokhanhhoa.service.ProductAttributeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/product-attributes")
public class ProductAttributeController {

    @Autowired
    private ProductAttributeService productAttributeService;

    @GetMapping
    public ResponseEntity<List<ProductAttribute>> getAllProductAttributes() {
        return ResponseEntity.ok(productAttributeService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductAttribute> getProductAttributeById(@PathVariable Long id) {
        return productAttributeService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<ProductAttribute> createProductAttribute(@RequestBody ProductAttribute productAttribute) {
        return ResponseEntity.ok(productAttributeService.save(productAttribute));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductAttribute> updateProductAttribute(@PathVariable Long id, @RequestBody ProductAttribute productAttribute) {
        return productAttributeService.findById(id)
                .map(existingAttribute -> {
                    productAttribute.setId(id);
                    return ResponseEntity.ok(productAttributeService.save(productAttribute));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProductAttribute(@PathVariable Long id) {
        return productAttributeService.findById(id)
                .map(attribute -> {
                    productAttributeService.deleteById(id);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<List<ProductAttribute>> getAttributesByProduct(@PathVariable Long productId) {
        return ResponseEntity.ok(productAttributeService.findByProductId(productId));
    }
} 