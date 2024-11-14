package com.ganciaux.forms.rest;

import com.ganciaux.forms.entity.Student;
import jakarta.annotation.PostConstruct;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class StudentRestController {
    List<Student> theStudents;
    @PostConstruct
    public void loadData(){
        theStudents = new ArrayList<>();
        theStudents.add(new Student("1","1","1"));
        theStudents.add(new Student("2","2","2"));
        theStudents.add(new Student("3","3","3"));
    }
    @GetMapping("/students")
    public List<Student> getStudents(){
        return theStudents;
    }

    @GetMapping("/students/{id}")
    public Student getStudent(@PathVariable int id){
        return theStudents.get(id);
    }
}
