package com.countryval.CountryVal.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="partidas")
public class Partida {
    @Id
    private int id_partida;
    private String email;
    private String paisesacertados;
    private int puntuacion;
    private String nivel;
}
