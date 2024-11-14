package com.ganciaux.forms.dao;

import com.ganciaux.forms.entity.Student;

import java.util.List;

public interface StudentDAO {
    void save(Student theStudent);

    Student findById(Integer id);

    List<Student> findAll();

    List<Student> findByLastName(String lastname);

    void update(Student theStudent);

    void delete();
}
