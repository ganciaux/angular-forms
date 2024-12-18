package com.ganciaux.forms.dao;

import com.ganciaux.forms.entity.Student;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public class StudentDAOImpl implements StudentDAO{
    private EntityManager entityManager;

    public StudentDAOImpl(EntityManager entityManager) {
        System.out.println("StudentDAOImpl...");
        this.entityManager = entityManager;
    }

    @Override
    @Transactional
    public void save(Student theStudent) {
        System.out.println("StudentDAOImpl: save...");
        entityManager.persist(theStudent);
    }

    @Override
    public Student findById(Integer id) {
        return entityManager.find(Student.class, id);
    }

    @Override
    public List<Student> findAll() {
        TypedQuery<Student> theQuery = entityManager.createQuery("FROM Student", Student.class);
        return theQuery.getResultList();
    }

    @Override
    public List<Student> findByLastName(String lastname) {
        TypedQuery<Student> theQuery = entityManager.createQuery("from Student where lastName=:data", Student.class);
        theQuery.setParameter("data", lastname);
        return theQuery.getResultList();
    }

    @Override
    @Transactional
    public void update(Student theStudent) {
        int numberUpdated= entityManager.createQuery("update Student set lastName='luffy'").executeUpdate();
        System.out.println("StudentDAOImpl: update "+numberUpdated+" student(s)");
        //entityManager.merge(theStudent);
    }

    @Override
    @Transactional
    public void delete() {
        int numberDeleted= entityManager.createQuery("delete from Student").executeUpdate();
        System.out.println("StudentDAOImpl: delete "+numberDeleted+" student(s)");
        //entityManager.remove(theStudent);
    }
}
