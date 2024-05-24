package com.countryval.CountryVal.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="paises")
public class Pais {
    @Id
    int Id_pais;
    String Nombre;
    String Capital;
    String Habitantes;
    String Monumento;
    String Silueta;
    String Persona_Famosa;
    String Bandera;
}
