package com.ganciaux.forms.dao;

import com.ganciaux.forms.entity.Employee;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public class EmployeeDAOJpaImpl implements EmployeeDAO {
    private EntityManager entityManager;

    @Autowired
    EmployeeDAOJpaImpl(EntityManager entityManager){
        this.entityManager = entityManager;
    }
    @Override
    public List<Employee> findAll() {
        TypedQuery<Employee> theQuery = entityManager.createQuery("from Employee", Employee.class);
        return theQuery.getResultList();
    }

    @Override
    public Employee findById(String id) {
       return entityManager.find(Employee.class, id);
    }
    @Transactional
    @Override
    public Employee save(Employee employee){
        return entityManager.merge(employee);
    }
    @Transactional
    @Override
    public void deleteById(int id){
        Employee employee = entityManager.find(Employee.class, id);
        entityManager.remove(employee);
    }

}
