package com.url.trimlink.controller;

import com.url.trimlink.dtos.ClickEventDTO;
import com.url.trimlink.dtos.UrlMappingDTO;
import com.url.trimlink.models.User;
import com.url.trimlink.service.UrlMappingService;
import com.url.trimlink.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/urls")
public class UrlMappingController {
    private final UrlMappingService urlMappingService;
    private final UserService userService;
	
	public UrlMappingController(UrlMappingService urlMappingService, UserService userService) {
		this.urlMappingService = urlMappingService;
		this.userService = userService;
	}
	
	@PostMapping("/shorten")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<UrlMappingDTO> createShortUrl(@RequestBody Map<String, String> request,
                                                        Principal principal){
        String originalUrl = request.get("originalUrl");
        if (originalUrl == null || originalUrl.isEmpty()) {
            return ResponseEntity.badRequest().body(null); // Return bad request if URL is invalid
        }
        User user = userService.findByUsername(principal.getName());
        UrlMappingDTO urlMappingDTO = urlMappingService.createShortUrl(originalUrl, user);
        return ResponseEntity.ok(urlMappingDTO);
    }
    
    @GetMapping("/myurls")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<List<UrlMappingDTO>> getUserUrls(Principal principal){
        User user = userService.findByUsername(principal.getName());
        List<UrlMappingDTO> urls = urlMappingService.getUrlsByUser(user);
        if (urls.isEmpty()) {
            return ResponseEntity.noContent().build(); // Return 204 No Content if no URLs exist
        }
        return ResponseEntity.ok(urls);
    }
    
    @GetMapping("/analytics/{shortUrl}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<List<ClickEventDTO>> getUrlAnalytics(@PathVariable String shortUrl,
                                                               @RequestParam("startDate") String startDate,
                                                               @RequestParam("endDate") String endDate){
        DateTimeFormatter formatter = DateTimeFormatter.ISO_LOCAL_DATE_TIME;
        try {
            LocalDateTime start = LocalDateTime.parse(startDate, formatter);
            LocalDateTime end = LocalDateTime.parse(endDate, formatter);
            List<ClickEventDTO> clickEventDTOS = urlMappingService.getClickEventsByDate(shortUrl, start, end);
            return ResponseEntity.ok(clickEventDTOS);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null); // Return bad request if date parsing fails
        }
    }
    
    @GetMapping("/totalClicks")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<Map<LocalDate, Long>> getTotalClicksByDate(Principal principal,
                                                                     @RequestParam("startDate") String startDate,
                                                                     @RequestParam("endDate") String endDate){
        DateTimeFormatter formatter = DateTimeFormatter.ISO_LOCAL_DATE;
        try {
            User user = userService.findByUsername(principal.getName());
            LocalDate start = LocalDate.parse(startDate, formatter);
            LocalDate end = LocalDate.parse(endDate, formatter);
            Map<LocalDate, Long> totalClicks = urlMappingService.getTotalClicksByUserAndDate(user, start, end);
            return ResponseEntity.ok(totalClicks);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null); // Return bad request if date parsing fails
        }
    }
}
