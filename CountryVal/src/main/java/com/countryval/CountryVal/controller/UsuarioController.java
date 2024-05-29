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

import com.countryval.CountryVal.entity.Usuario;
import com.countryval.CountryVal.service.UsuarioService;

@RestController
@RequestMapping(path="api/usuarios")
public class UsuarioController {
    
    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public List<Usuario> getAll(){
        return usuarioService.getUsuarios(); 
    }

    @GetMapping("/{email}")
    public Optional<Usuario> getAllBId(@PathVariable("email") String email){
        return usuarioService.getUsuario(email); 
    }

    @PutMapping("/{email}")
    public ResponseEntity<Usuario> actualizarUsuario(@PathVariable("email") String email, @RequestBody Usuario usuarioDetalles) {
        Optional<Usuario> usuarioOptional = usuarioService.getUsuario(email);

        if (!usuarioOptional.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        Usuario usuario = usuarioOptional.get();
        usuario.setNombreusuario(usuarioDetalles.getNombreusuario());
        usuario.setContrasena(usuarioDetalles.getContrasena());

        Usuario usuarioActualizado = usuarioService.actualizarUsuario(usuario);
        return ResponseEntity.ok(usuarioActualizado);
    }

    @PostMapping
    public void saveUpdate(@RequestBody Usuario usuario){
        usuarioService.saveOrUpdate(usuario); 
    }

    @DeleteMapping("/{email}")
    public void saveUpdate(@PathVariable("email") String email){
        usuarioService.delete(email); 
    }
}
