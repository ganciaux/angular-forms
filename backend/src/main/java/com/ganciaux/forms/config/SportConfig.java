package com.ganciaux.forms.config;

import com.ganciaux.forms.test.Coach;
import com.ganciaux.forms.test.SwimCoach;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SportConfig {
    //defined aquatic as Bean id or default is swimCoach
    @Bean("aquatic")
    public Coach swimCoach() {
        return new SwimCoach();
    }
}
