package com.ganciaux.forms.test;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
public class CricketCoach implements Coach{
    public String name="cricket";

    @PostConstruct
    public void postConstruct(){
        System.out.println("In postConstruct: "+getClass().getSimpleName());
    }
    @PreDestroy
    public void preDestroy(){
        System.out.println("In preDestroy: "+getClass().getSimpleName());
    }

    public CricketCoach(){
        System.out.println("In constructor: "+getClass().getSimpleName());
    }
    @Override
    public String getDaylyWorkout() {
        return "Practice cricket !!!";
    }
}
