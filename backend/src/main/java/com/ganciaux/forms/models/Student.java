package com.ganciaux.forms.models;

import jakarta.persistence.*;

@Entity
@Table(name = "etudiant")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "prenom", length = 1024, updatable = false)
    private  String firstName;

    @ManyToOne
    @JoinColumn(name = "room_id")
    private Room room;
}
