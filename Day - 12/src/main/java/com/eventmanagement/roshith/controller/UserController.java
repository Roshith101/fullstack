package com.eventmanagement.roshith.controller;

import static com.eventmanagement.roshith.utils.MyConstant.FORGOT_PASSWORD;
import static com.eventmanagement.roshith.utils.MyConstant.USER;

import java.security.Principal;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eventmanagement.roshith.dto.request.PasswordRequest;
import com.eventmanagement.roshith.service.UserService;

import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(USER)
@PreAuthorize("hasAnyRole('USER', 'ADMIN')")
@Tag(name = "USER")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    @PreAuthorize("hasAnyAuthority('user:read', 'admin:read')")
    public String get() {
        return "GET:: user controller";
    }

    @PatchMapping(FORGOT_PASSWORD)
    @PreAuthorize("hasAnyAuthority('user:update', 'admin:update')")
    @Hidden
    public ResponseEntity<?> forgotPassword(PasswordRequest request, Principal principal) {
        userService.forgotPassword(request, principal);
        return ResponseEntity.ok().body("Password changed successfully");
    }
}
