package com.ganciaux.forms.dao;

import com.ganciaux.forms.entity.Employee;

import java.util.List;

public interface EmployeeDAO {
    List<Employee> findAll();

    Employee findById(String id);

    Employee save(Employee employee);

    void deleteById(int id);
}
