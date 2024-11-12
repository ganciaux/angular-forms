package com.ganciaux.forms.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "Room")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    @OneToMany(mappedBy="room")
    List<Students> students;

}
