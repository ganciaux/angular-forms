package com.ganciaux.forms.rest;

import com.ganciaux.forms.entity.Student;
import jakarta.annotation.PostConstruct;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
        if (id>=theStudents.size() || id<=0){
            throw new StudentNotFoundException("Student id is not found");
        }
        return theStudents.get(id);
    }
}
