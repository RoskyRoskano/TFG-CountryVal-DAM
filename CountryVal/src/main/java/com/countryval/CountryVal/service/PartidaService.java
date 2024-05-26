package com.countryval.CountryVal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.countryval.CountryVal.entity.Partida;
import com.countryval.CountryVal.repository.PartidaRepository;

@Service
public class PartidaService {
    @Autowired
    PartidaRepository partidaRepository;

    public List<Partida> getPartidas(){
        return partidaRepository.findAll();
    }

    public Optional<Partida> getPartida(int id_partida){
        return partidaRepository.findById(id_partida);
    }

    public void saveOrUpdate(Partida partida){
        partidaRepository.save(partida);
    }

    public void delete(int id_partida){
        partidaRepository.deleteById(id_partida);
    }
}
