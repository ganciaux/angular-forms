package com.ganciaux.forms.entity;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = true)
public class CertificationConverter implements AttributeConverter<Certification, Integer> {
    @Override
    public Integer convertToDatabaseColumn(Certification certification) {
        return (certification != null) ? certification.getCode() : null;
    }

    // Convertit une valeur de la base en énumération
    @Override
    public Certification convertToEntityAttribute(Integer code) {
        return (code != null) ? Certification.fromCode(code) : null;
    }
}
