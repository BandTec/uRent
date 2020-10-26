package com.projeto.urent.controller;


import com.projeto.urent.dominios.Garagem;
import com.projeto.urent.dominios.Telefone;
import com.projeto.urent.repositorios.TelefoneRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Entity;
import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/telefones")
public class TelefoneController {

    @Autowired
    TelefoneRepository repository;

    @GetMapping("/{id}")
    public ResponseEntity buscarTelefone(@PathVariable Integer id){
        Optional<Telefone> telefone = repository.findById(id);

        if(!telefone.isPresent()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(telefone);
        }
    }

    @GetMapping("/usuario/{id}")
    public ResponseEntity buscarTelefoneUsuario(@PathVariable Integer id){
        List<Garagem> telefone = repository.findAllByUsuario(id);

        if(telefone.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(telefone);
        }
    }

    @PostMapping
    public ResponseEntity cadastrarTelefone(@RequestBody @Valid Telefone telefone){
        repository.save(telefone);
        return ResponseEntity.created(null).build();
    }


    @DeleteMapping("{id}")
    public ResponseEntity deleteTelefone(@PathVariable int id){

        if (repository.existsById(id)){

            repository.deleteById(id);
            return ResponseEntity.ok().build();

        }

        return ResponseEntity.notFound().build();

    }
}
