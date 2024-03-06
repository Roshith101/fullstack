package com.eventmanagement.roshith.service;

import java.io.IOException;

import com.eventmanagement.roshith.dto.request.LoginRequest;
import com.eventmanagement.roshith.dto.request.RegisterRequest;
import com.eventmanagement.roshith.dto.response.LoginResponse;
import com.eventmanagement.roshith.dto.response.RegisterResponse;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

    void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException;
}


