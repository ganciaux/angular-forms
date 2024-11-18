package com.ganciaux.forms.service;

import com.ganciaux.forms.dao.EmployeeRepository;
import com.ganciaux.forms.entity.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService{
    private EmployeeRepository em;

    @Autowired
    public EmployeeServiceImpl(EmployeeRepository employeeDAO){
        this.em = employeeDAO;
    }
    @Override
    public List<Employee> findAll(){
        return em.findAll();
    }

    @Override
    public Optional<Employee> findById(int id){
        return em.findById(id);
    }

    @Override
    public Employee save(Employee employee){return em.save(employee);}

    @Override
    public void deleteById(int id){
        em.deleteById(id);
    }
}
