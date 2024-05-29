package com.countryval.CountryVal.repository;

import org.springframework.stereotype.Repository;

import com.countryval.CountryVal.entity.Usuario;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, String> {
    Optional<Usuario> findByEmail(String email);
}
