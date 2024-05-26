package com.countryval.CountryVal.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.countryval.CountryVal.entity.Pais;
import com.countryval.CountryVal.service.PaisService;

@RestController
@RequestMapping(path="api/paises")
public class PaisController {
    
    @Autowired
    private PaisService paisService;

    @GetMapping
    public List<Pais> getAll(){
        return paisService.getPaises(); 
    }

    @GetMapping("/{idpais}")
    public Optional<Pais> getAllBId(@PathVariable("idpais") int idpais){
        return paisService.getPais(idpais); 
    }

    @PostMapping
    public void saveUpdate(@RequestBody Pais pais){
        paisService.saveOrUpdate(pais); 
    }

    @DeleteMapping("/{idpais}")
    public void saveUpdate(@PathVariable("idpais") int idpais){
        paisService.delete(idpais); 
    }
}
