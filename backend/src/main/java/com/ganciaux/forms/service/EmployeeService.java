package com.ganciaux.forms.service;

import com.ganciaux.forms.entity.Employee;

import java.util.List;

public interface EmployeeService {
    List<Employee> findAll();

    Employee findById(String id);

    Employee save(Employee employee);

    void deleteById(int id);
}
