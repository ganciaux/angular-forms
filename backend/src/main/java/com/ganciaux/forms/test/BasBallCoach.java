package com.ganciaux.forms.test;

import org.springframework.context.annotation.Lazy;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Primary
public class BasBallCoach implements Coach{
    public BasBallCoach(){
        System.out.println("In constructor: "+getClass().getSimpleName());
    }

    @Override
    public String getDaylyWorkout() {
        return "Practice baseball !!!";
    }
}
