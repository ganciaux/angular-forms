package com.ganciaux.forms.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
public class DemoSecurityConfig {
    @Bean
    public InMemoryUserDetailsManager userDetailsManager(){
        UserDetails user1 = User.builder()
                .username("user1")
                .password("{noop}user1")
                .roles("EMPLOYEE","MANAGER","ADMIN")
                .build();

        UserDetails user2 = User.builder()
                .username("user2")
                .password("{noop}user2")
                .roles("EMPLOYEE","MANAGER")
                .build();

        UserDetails user3 = User.builder()
                .username("user3")
                .password("{noop}user3")
                .roles("EMPLOYEE")
                .build();

        return new InMemoryUserDetailsManager(user1, user2, user3);
    }
}
