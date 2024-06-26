//package com.example.bugtrackersystem.auth;
//
//import com.example.bugtrackersystem.services.AuthService;
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
//import org.springframework.stereotype.Component;
//import org.springframework.util.StringUtils;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import java.io.IOException;
//
//@Component
//@RequiredArgsConstructor
//public class JwtFilter extends OncePerRequestFilter {
//    private final JwtProvider jwtProvider;
//    private final AuthService authService;
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest httpServletRequest,
//                                    HttpServletResponse httpServletResponse,
//                                    FilterChain filterChain) throws ServletException, IOException {
//        String token = extractToken(httpServletRequest.getHeader("Authorization"));
//        try {
//            if (token != null && SecurityContextHolder.getContext().getAuthentication() == null && jwtProvider.isValid(token)) {
//                String username = jwtProvider.extractUsername(token);
//                UserDetails user = authService.loadUserByUsername(username);
//                UsernamePasswordAuthenticationToken auth =
//                        new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
//                auth.setDetails(new WebAuthenticationDetailsSource().buildDetails(httpServletRequest));
//                SecurityContextHolder.getContext().setAuthentication(auth);
//            }
//        }
//        catch (Exception ignored) {
//            System.out.println("Invalid token!");
//        }
//        filterChain.doFilter(httpServletRequest, httpServletResponse);
//    }
//
//
//    private String extractToken(String header) {
//        return (StringUtils.hasText(header) && header.startsWith("Bearer ")) ? header.substring(7) : null;
//    }
//
//}
