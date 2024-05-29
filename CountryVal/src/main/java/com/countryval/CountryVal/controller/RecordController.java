package com.countryval.CountryVal.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.countryval.CountryVal.entity.Record;
import com.countryval.CountryVal.service.RecordService;

@RestController
@RequestMapping(path="api/records")
public class RecordController {
    @Autowired
    private RecordService recordService;

    @GetMapping
    public List<Record> getAll(){
        return recordService.getRecords(); 
    }

    @GetMapping("/{email}")
    public Optional<Record> getAllBId(@PathVariable("email") String email){
        return recordService.getRecord(email); 
    }

    @PutMapping("/{email}")
    public ResponseEntity<Record> actualizarRecord(@PathVariable("email") String email, @RequestBody Record recordDetalles) {
        Optional<Record> recordOptional = recordService.getRecord(email);

        if (!recordOptional.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        Record record = recordOptional.get();
        record.setRecordfacil(recordDetalles.getRecordfacil());
        record.setRecordmedio(recordDetalles.getRecordmedio());
        record.setRecorddificil(recordDetalles.getRecorddificil());
        record.setTotalrecord(recordDetalles.getTotalrecord());

        Record recordActualizado = recordService.actualizarRecord(record);
        return ResponseEntity.ok(recordActualizado);
    }

    @PostMapping
    public void saveUpdate(@RequestBody Record record){
        recordService.saveOrUpdate(record); 
    }

    @DeleteMapping("/{email}")
    public void saveUpdate(@PathVariable("email") String email){
        recordService.delete(email); 
    }

}
