package com.countryval.CountryVal.repository;

import org.springframework.stereotype.Repository;

import com.countryval.CountryVal.entity.Record;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface RecordRepository extends JpaRepository<Record, String> {
    
}
