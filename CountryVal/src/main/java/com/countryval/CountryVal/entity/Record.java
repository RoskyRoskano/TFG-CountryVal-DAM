package com.countryval.CountryVal.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="records")
public class Record {
    @Id
    private String email;
    private int recordfacil;
    private int recordmedio;
    private int recorddificil;
    private int totalrecord;
}

