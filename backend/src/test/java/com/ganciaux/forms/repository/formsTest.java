package com.ganciaux.forms.repository;

import com.ganciaux.forms.dao.EmployeeRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class formsTest {
    @Autowired
    private EmployeeRepository employeeRepository;

    @BeforeEach
    void setup() {}

    @AfterEach
    void cleanup() {}

    @Test
    void findAll(){
        System.out.println("test");
    }
}
