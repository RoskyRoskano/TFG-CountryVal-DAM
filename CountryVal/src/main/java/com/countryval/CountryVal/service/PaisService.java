package com.countryval.CountryVal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.countryval.CountryVal.entity.Pais;
import com.countryval.CountryVal.repository.PaisRepository;

@Service
public class PaisService {
    @Autowired
    PaisRepository paisRepository;

    public List<Pais> getPaises(){
        return paisRepository.findAll();
    }

    public Optional<Pais> getPais(int idpais){
        return paisRepository.findById(idpais);
    }

    public void saveOrUpdate(Pais pais){
        paisRepository.save(pais);
    }

    public void delete(int idpais){
        paisRepository.deleteById(idpais);
    }
}
