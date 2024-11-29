package com.ganciaux.forms.entity;

public enum Certification {
    TOUT(1, "tout"),
    INTERDIT(2, "INT");

    private final int code;
    private final String description;

    Certification(int code, String description) {
        this.code = code;
        this.description = description;
    }

    public int getCode() {
        return code;
    }

    public String getDescription() {
        return description;
    }

    // Trouve l'énumération à partir du code
    public static Certification fromCode(int code) {
        for (Certification cert : Certification.values()) {
            if (cert.code == code) {
                return cert;
            }
        }
        throw new IllegalArgumentException("Code inconnu : " + code);
    }
}
