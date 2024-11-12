package com.ganciaux.forms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {
        "com.ganciaux.forms",
        "com.ganciaux.utils"})
public class FormsApplication {
    public static void main(String[] args) {
        SpringApplication.run(FormsApplication.class, args);
    }

}
