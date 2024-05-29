package com.countryval.CountryVal.repository;

import org.springframework.stereotype.Repository;

import com.countryval.CountryVal.entity.Record;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface RecordRepository extends JpaRepository<Record, String> {
    Optional<Record> findByEmail(String email);
}
