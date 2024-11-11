package com.ganciaux.forms.rest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FunRestController {
    @Value("${team.name}")
    private String name;

    @Value("${team.group}")
    private String group;

    @GetMapping("/")
    public String sayHello(){
        return "Hello "+name;
    }

    @GetMapping("/hello2")
    public String sayHello2(){
        return "Hello 2";
    }
}
