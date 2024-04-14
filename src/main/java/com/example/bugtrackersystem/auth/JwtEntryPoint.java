//package com.example.bugtrackersystem.auth;
//
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import org.springframework.security.core.AuthenticationException;
//import org.springframework.security.web.AuthenticationEntryPoint;
//import org.springframework.stereotype.Component;
//
//import java.io.IOException;
//
//@Component
//public class JwtEntryPoint implements AuthenticationEntryPoint {
//    @Override
//    public void commence(HttpServletRequest httpServletRequest,
//                         HttpServletResponse httpServletResponse,
//                         AuthenticationException e) throws IOException, ServletException {
//        httpServletResponse.sendError(HttpServletResponse.SC_UNAUTHORIZED, e.getMessage());
//    }
//}
