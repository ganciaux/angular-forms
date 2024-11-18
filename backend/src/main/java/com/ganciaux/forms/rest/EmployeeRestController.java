package com.ganciaux.forms.rest;

import com.ganciaux.forms.dao.EmployeeDAO;
import com.ganciaux.forms.entity.Employee;
import com.ganciaux.forms.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    Employee findById(@PathVariable String id){
        return employeeService.findById(id);
    }

    @PostMapping("employees")
    Employee addEmployee(@RequestBody Employee employee){
        employee.setId(0);
        return employeeService.save(employee);
    }
}
