package org.example.yensaokhanhhoa.controller;

import org.example.yensaokhanhhoa.model.ProductBatch;
import org.example.yensaokhanhhoa.service.ProductBatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/product-batches")
public class ProductBatchController {

    @Autowired
    private ProductBatchService productBatchService;

    @GetMapping
    public ResponseEntity<List<ProductBatch>> getAllProductBatches() {
        return ResponseEntity.ok(productBatchService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductBatch> getProductBatchById(@PathVariable Long id) {
        return productBatchService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<ProductBatch> createProductBatch(@RequestBody ProductBatch productBatch) {
        return ResponseEntity.ok(productBatchService.save(productBatch));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductBatch> updateProductBatch(@PathVariable Long id, @RequestBody ProductBatch productBatch) {
        return productBatchService.findById(id)
                .map(existingBatch -> {
                    productBatch.setId(id);
                    return ResponseEntity.ok(productBatchService.save(productBatch));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProductBatch(@PathVariable Long id) {
        return productBatchService.findById(id)
                .map(batch -> {
                    productBatchService.deleteById(id);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<List<ProductBatch>> getBatchesByProduct(@PathVariable Long productId) {
        return ResponseEntity.ok(productBatchService.findByProductId(productId));
    }

    @PutMapping("/{id}/update-stock")
    public ResponseEntity<ProductBatch> updateStock(
            @PathVariable Long id,
            @RequestParam int quantity) {
        return productBatchService.findById(id)
                .map(batch -> {
                    productBatchService.updateStock(id, quantity);
                    return ResponseEntity.ok(batch);
                })
                .orElse(ResponseEntity.notFound().build());
    }
} 