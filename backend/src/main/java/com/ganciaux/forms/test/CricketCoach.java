package com.ganciaux.forms.test;

import org.springframework.stereotype.Component;

@Component
public class CricketCoach implements Coach{

    @Override
    public String getDaylyWorkout() {
        return "Practice sport !!!";
    }
}
