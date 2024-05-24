package com.countryval.CountryVal.entity;

import lombok.Data;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Data
@Entity
@Table(name="usuarios")
public class Usuario {
    @Id
    private String email;
    private String nombre;
    private String nombreusuario;
    private String contrasena;
}
