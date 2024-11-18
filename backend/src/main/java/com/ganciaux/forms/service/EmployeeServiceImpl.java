package com.ganciaux.forms.service;

import com.ganciaux.forms.dao.EmployeeDAO;
import com.ganciaux.forms.entity.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService{
    private EmployeeDAO employeeDAO;

    @Autowired
    public EmployeeServiceImpl(EmployeeDAO employeeDAO){
        this.employeeDAO = employeeDAO;
    }
    @Override
    public List<Employee> findAll(){
        return employeeDAO.findAll();
    }

    @Override
    public Employee findById(String id){
        return employeeDAO.findById(id);
    }

    @Override
    public Employee save(Employee employee){return employeeDAO.save(employee);}

    @Override
    public void deleteById(int id){
        employeeDAO.deleteById(id);
    }
}
