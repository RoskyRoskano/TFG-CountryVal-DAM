package com.countryval.CountryVal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.countryval.CountryVal.entity.Record;
import com.countryval.CountryVal.repository.RecordRepository;

@Service
public class RecordService {
    @Autowired
    RecordRepository recordRepository;

    public List<Record> getRecords(){
        return recordRepository.findAll();
    }

    public Optional<Record> getRecord(String email){
        return recordRepository.findById(email);
    }

    public void saveOrUpdate(Record record){
        recordRepository.save(record);
    }

    public void delete(String email){
        recordRepository.deleteById(email);
    }
}
