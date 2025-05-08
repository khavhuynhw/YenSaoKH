package org.example.yensaokhanhhoa.controller;

import org.example.yensaokhanhhoa.model.UserWishlist;
import org.example.yensaokhanhhoa.service.UserWishlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/wishlists")
public class UserWishlistController {

    @Autowired
    private UserWishlistService userWishlistService;

    @GetMapping
    public ResponseEntity<List<UserWishlist>> getAllWishlists() {
        return ResponseEntity.ok(userWishlistService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserWishlist> getWishlistById(@PathVariable Long id) {
        return userWishlistService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<UserWishlist> createWishlistItem(@RequestBody UserWishlist wishlistItem) {
        return ResponseEntity.ok(userWishlistService.save(wishlistItem));
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserWishlist> updateWishlistItem(@PathVariable Long id, @RequestBody UserWishlist wishlistItem) {
        return userWishlistService.findById(id)
                .map(existingItem -> {
                    wishlistItem.setId(id);
                    return ResponseEntity.ok(userWishlistService.save(wishlistItem));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteWishlistItem(@PathVariable Long id) {
        return userWishlistService.findById(id)
                .map(item -> {
                    userWishlistService.deleteById(id);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<UserWishlist>> getWishlistByUser(@PathVariable Long userId) {
        return ResponseEntity.ok(userWishlistService.findByUserId(userId));
    }

    @PostMapping("/user/{userId}/product/{productId}")
    public ResponseEntity<UserWishlist> addToWishlist(
            @PathVariable Long userId,
            @PathVariable Long productId) {
        return ResponseEntity.ok(userWishlistService.addToWishlist(userId, productId));
    }

    @DeleteMapping("/user/{userId}/product/{productId}")
    public ResponseEntity<Void> removeFromWishlist(
            @PathVariable Long userId,
            @PathVariable Long productId) {
        userWishlistService.removeFromWishlist(userId, productId);
        return ResponseEntity.ok().build();
    }
} 