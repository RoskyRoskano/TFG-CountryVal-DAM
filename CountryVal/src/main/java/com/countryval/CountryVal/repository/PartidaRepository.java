package com.countryval.CountryVal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.countryval.CountryVal.entity.Partida;

@Repository
public interface PartidaRepository extends JpaRepository<Partida, Integer>{
    
}


