package com.eventmanagement.roshith.service;

import java.security.Principal;

import com.eventmanagement.roshith.dto.request.PasswordRequest;

public interface UserService {

    void forgotPassword(PasswordRequest request, Principal principal);

}
