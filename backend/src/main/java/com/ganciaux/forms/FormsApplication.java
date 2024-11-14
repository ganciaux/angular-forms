package com.ganciaux.forms;

import com.ganciaux.forms.dao.StudentDAO;
import com.ganciaux.forms.entity.Student;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication(scanBasePackages = {
        "com.ganciaux.forms",
        "com.ganciaux.utils"})
public class FormsApplication {
    public static void main(String[] args) {

        SpringApplication.run(FormsApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(StudentDAO studentDAO) {

        return runner -> {
            //System.out.println("Hello from commande line...");
            createStudent(studentDAO);
            readStudent(studentDAO);
            getStudent(studentDAO);
            getStudentByLastName(studentDAO);
            updateStudent(studentDAO);
            deleteStudent(studentDAO);
        };
    }

    private void createStudent(StudentDAO studentDAO) {
        Student tmp=new Student("first","last","@");
        studentDAO.save(tmp);
    }

    private void readStudent(StudentDAO studentDAO){
        Student tmp=new Student("first2","last2","@");
        studentDAO.save(tmp);
        Student Id=studentDAO.findById(tmp.getId());
        System.out.println("Get new student..."+Id);
    }

    private void getStudent(StudentDAO studentDAO){
        List<Student> list=studentDAO.findAll();
        for(Student s : list){
            System.out.println("Get new student..."+s);
        }

    }

    private void getStudentByLastName(StudentDAO studentDAO){
        List<Student> list=studentDAO.findByLastName("last2");
        for(Student s : list){
            System.out.println("Get student..."+s);
        }

    }

    private void updateStudent(StudentDAO studentDAO){
        Student Id=studentDAO.findById(1);
        Id.setLastName("luffy");
        studentDAO.update(Id);
        Id=studentDAO.findById(1);
        System.out.println("Updated student..."+Id);
    }

    private void deleteStudent(StudentDAO studentDAO){
        System.out.println("Delete all students...");
        studentDAO.delete();
    }
}
