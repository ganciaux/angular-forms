package com.ganciaux.forms.test;

public class SwimCoach implements Coach{
    public SwimCoach(){
        System.out.println("In constructor: "+getClass().getSimpleName());
    }

    @Override
    public String getDaylyWorkout() {
        return "Swim";
    }
}
