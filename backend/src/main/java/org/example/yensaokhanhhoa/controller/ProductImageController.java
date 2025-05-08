package org.example.yensaokhanhhoa.controller;

import org.example.yensaokhanhhoa.model.ProductImage;
import org.example.yensaokhanhhoa.service.ProductImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/product-images")
public class ProductImageController {

    @Autowired
    private ProductImageService productImageService;

    @GetMapping
    public ResponseEntity<List<ProductImage>> getAllProductImages() {
        return ResponseEntity.ok(productImageService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductImage> getProductImageById(@PathVariable Long id) {
        return productImageService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<ProductImage> createProductImage(
            @RequestParam("file") MultipartFile file,
            @RequestParam("productId") Long productId) {
        return ResponseEntity.ok(productImageService.saveImage(file, productId));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductImage> updateProductImage(
            @PathVariable Long id,
            @RequestParam("file") MultipartFile file) {
        return productImageService.findById(id)
                .map(existingImage -> {
                    return ResponseEntity.ok(productImageService.updateImage(id, file));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProductImage(@PathVariable Long id) {
        return productImageService.findById(id)
                .map(image -> {
                    productImageService.deleteById(id);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<List<ProductImage>> getImagesByProduct(@PathVariable Long productId) {
        return ResponseEntity.ok(productImageService.findByProductId(productId));
    }

    @PutMapping("/{id}/set-primary")
    public ResponseEntity<ProductImage> setPrimaryImage(@PathVariable Long id) {
        return productImageService.findById(id)
                .map(image -> {
                    productImageService.setPrimaryImage(id);
                    return ResponseEntity.ok(image);
                })
                .orElse(ResponseEntity.notFound().build());
    }
} 