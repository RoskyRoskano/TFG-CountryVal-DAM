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

import com.countryval.CountryVal.entity.Partida;
import com.countryval.CountryVal.service.PartidaService;

@RestController
@RequestMapping(path="api/partidas")
public class PartidaController {
    @Autowired
    private PartidaService partidaService;

    @GetMapping
    public List<Partida> getAll(){
        return partidaService.getPartidas(); 
    }

    @GetMapping("/{id_partida}")
    public Optional<Partida> getAllBId(@PathVariable("id_partida") int id_partida){
        return partidaService.getPartida(id_partida); 
    }

    @PostMapping
    public void saveUpdate(@RequestBody Partida partida){
        partidaService.saveOrUpdate(partida); 
    }

    @DeleteMapping("/{id_partida}")
    public void saveUpdate(@PathVariable("id_partida") int id_partida){
        partidaService.delete(id_partida); 
    }
}

