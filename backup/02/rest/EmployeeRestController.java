package com.ganciaux.forms.rest;

import com.ganciaux.forms.entity.Employee;
import com.ganciaux.forms.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class EmployeeRestController {
    private EmployeeService employeeService;
    @Autowired
    public EmployeeRestController(EmployeeService employeeService){
        this.employeeService = employeeService;
    }

    @GetMapping("employees")
    List<Employee> findAll(){
        return employeeService.findAll();
    }

    @GetMapping("employees/{id}")
    Optional<Employee> findById(@PathVariable int id){
        return employeeService.findById(id);
    }

    @PostMapping("employees")
    Employee addEmployee(@RequestBody Employee employee){
        employee.setId(0);
        return employeeService.save(employee);
    }
}
