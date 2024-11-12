package com.ganciaux.forms;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication(scanBasePackages = {
        "com.ganciaux.forms",
        "com.ganciaux.utils"})
public class FormsApplication {
    public static void main(String[] args) {

        SpringApplication.run(FormsApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(String[] args) {

        return runner -> {
            System.out.println("Hello from commande line...");

        };
    }

}
