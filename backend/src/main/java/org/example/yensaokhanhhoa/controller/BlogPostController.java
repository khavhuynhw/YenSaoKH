package org.example.yensaokhanhhoa.controller;

import org.example.yensaokhanhhoa.model.BlogPost;
import org.example.yensaokhanhhoa.service.BlogPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/blog-posts")
public class BlogPostController {

    @Autowired
    private BlogPostService blogPostService;

    @GetMapping
    public ResponseEntity<List<BlogPost>> getAllBlogPosts() {
        return ResponseEntity.ok(blogPostService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<BlogPost> getBlogPostById(@PathVariable Long id) {
        return blogPostService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<BlogPost> createBlogPost(@RequestBody BlogPost blogPost) {
        return ResponseEntity.ok(blogPostService.save(blogPost));
    }

    @PutMapping("/{id}")
    public ResponseEntity<BlogPost> updateBlogPost(@PathVariable Long id, @RequestBody BlogPost blogPost) {
        return blogPostService.findById(id)
                .map(existingPost -> {
                    blogPost.setId(id);
                    return ResponseEntity.ok(blogPostService.save(blogPost));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBlogPost(@PathVariable Long id) {
        return blogPostService.findById(id)
                .map(post -> {
                    blogPostService.deleteById(id);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/category/{categoryId}")
    public ResponseEntity<List<BlogPost>> getBlogPostsByCategory(@PathVariable Long categoryId) {
        return ResponseEntity.ok(blogPostService.findByCategoryId(categoryId));
    }

    @GetMapping("/search")
    public ResponseEntity<List<BlogPost>> searchBlogPosts(@RequestParam String keyword) {
        return ResponseEntity.ok(blogPostService.searchBlogPosts(keyword));
    }

    @GetMapping("/featured")
    public ResponseEntity<List<BlogPost>> getFeaturedBlogPosts() {
        return ResponseEntity.ok(blogPostService.findFeaturedPosts());
    }
} 