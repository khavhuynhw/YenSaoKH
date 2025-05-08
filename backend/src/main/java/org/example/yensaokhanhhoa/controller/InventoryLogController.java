package org.example.yensaokhanhhoa.controller;

import org.example.yensaokhanhhoa.model.InventoryLog;
import org.example.yensaokhanhhoa.service.InventoryLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inventory-logs")
public class InventoryLogController {

    @Autowired
    private InventoryLogService inventoryLogService;

    @GetMapping
    public ResponseEntity<List<InventoryLog>> getAllInventoryLogs() {
        return ResponseEntity.ok(inventoryLogService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<InventoryLog> getInventoryLogById(@PathVariable Long id) {
        return inventoryLogService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<InventoryLog> createInventoryLog(@RequestBody InventoryLog inventoryLog) {
        return ResponseEntity.ok(inventoryLogService.save(inventoryLog));
    }

    @PutMapping("/{id}")
    public ResponseEntity<InventoryLog> updateInventoryLog(@PathVariable Long id, @RequestBody InventoryLog inventoryLog) {
        return inventoryLogService.findById(id)
                .map(existingLog -> {
                    inventoryLog.setId(id);
                    return ResponseEntity.ok(inventoryLogService.save(inventoryLog));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteInventoryLog(@PathVariable Long id) {
        return inventoryLogService.findById(id)
                .map(log -> {
                    inventoryLogService.deleteById(id);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<List<InventoryLog>> getLogsByProduct(@PathVariable Long productId) {
        return ResponseEntity.ok(inventoryLogService.findByProductId(productId));
    }

    @GetMapping("/batch/{batchId}")
    public ResponseEntity<List<InventoryLog>> getLogsByBatch(@PathVariable Long batchId) {
        return ResponseEntity.ok(inventoryLogService.findByBatchId(batchId));
    }

    @GetMapping("/type/{type}")
    public ResponseEntity<List<InventoryLog>> getLogsByType(@PathVariable String type) {
        return ResponseEntity.ok(inventoryLogService.findByType(type));
    }
} 