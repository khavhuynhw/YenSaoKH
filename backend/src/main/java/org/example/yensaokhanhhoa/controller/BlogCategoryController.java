package org.example.yensaokhanhhoa.controller;

import org.example.yensaokhanhhoa.model.BlogCategory;
import org.example.yensaokhanhhoa.service.BlogCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/blog-categories")
public class BlogCategoryController {

    @Autowired
    private BlogCategoryService blogCategoryService;

    @GetMapping
    public ResponseEntity<List<BlogCategory>> getAllBlogCategories() {
        return ResponseEntity.ok(blogCategoryService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<BlogCategory> getBlogCategoryById(@PathVariable Long id) {
        return blogCategoryService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<BlogCategory> createBlogCategory(@RequestBody BlogCategory blogCategory) {
        return ResponseEntity.ok(blogCategoryService.save(blogCategory));
    }

    @PutMapping("/{id}")
    public ResponseEntity<BlogCategory> updateBlogCategory(@PathVariable Long id, @RequestBody BlogCategory blogCategory) {
        return blogCategoryService.findById(id)
                .map(existingCategory -> {
                    blogCategory.setId(id);
                    return ResponseEntity.ok(blogCategoryService.save(blogCategory));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBlogCategory(@PathVariable Long id) {
        return blogCategoryService.findById(id)
                .map(category -> {
                    blogCategoryService.deleteById(id);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/{id}/posts")
    public ResponseEntity<List<BlogCategory>> getCategoryWithPosts(@PathVariable Long id) {
        return blogCategoryService.findById(id)
                .map(category -> ResponseEntity.ok(blogCategoryService.findCategoryWithPosts(id)))
                .orElse(ResponseEntity.notFound().build());
    }
} 