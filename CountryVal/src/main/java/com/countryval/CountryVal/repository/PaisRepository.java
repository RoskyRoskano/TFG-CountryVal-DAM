package com.countryval.CountryVal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.countryval.CountryVal.entity.Pais;

@Repository
public interface PaisRepository extends JpaRepository<Pais, Integer>{
    
}
