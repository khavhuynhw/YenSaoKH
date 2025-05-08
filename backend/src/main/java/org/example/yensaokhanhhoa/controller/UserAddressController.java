package org.example.yensaokhanhhoa.controller;

import org.example.yensaokhanhhoa.model.UserAddress;
import org.example.yensaokhanhhoa.service.UserAddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user-addresses")
public class UserAddressController {

    @Autowired
    private UserAddressService userAddressService;

    @GetMapping
    public ResponseEntity<List<UserAddress>> getAllUserAddresses() {
        return ResponseEntity.ok(userAddressService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserAddress> getUserAddressById(@PathVariable Long id) {
        return userAddressService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<UserAddress> createUserAddress(@RequestBody UserAddress userAddress) {
        return ResponseEntity.ok(userAddressService.save(userAddress));
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserAddress> updateUserAddress(@PathVariable Long id, @RequestBody UserAddress userAddress) {
        return userAddressService.findById(id)
                .map(existingAddress -> {
                    userAddress.setId(id);
                    return ResponseEntity.ok(userAddressService.save(userAddress));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUserAddress(@PathVariable Long id) {
        return userAddressService.findById(id)
                .map(address -> {
                    userAddressService.deleteById(id);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<UserAddress>> getUserAddressesByUser(@PathVariable Long userId) {
        return ResponseEntity.ok(userAddressService.findByUserId(userId));
    }

    @PutMapping("/{id}/set-default")
    public ResponseEntity<UserAddress> setDefaultAddress(@PathVariable Long id) {
        return userAddressService.findById(id)
                .map(address -> {
                    userAddressService.setDefaultAddress(id);
                    return ResponseEntity.ok(address);
                })
                .orElse(ResponseEntity.notFound().build());
    }
} 