package com.projeto.urent.controller;


import com.projeto.urent.dominios.Telefone;
import com.projeto.urent.repositorios.TelefoneRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Entity;

@Entity
@RestController("/telefone")
public class TelefoneController {

    @Autowired
    TelefoneRepository repository;



    @GetMapping("/{id}")
    public ResponseEntity buscarTelefone(@PathVariable Integer id){

        return ResponseEntity.ok(repository.findByIdTelefone(id));

    }

    @PostMapping
    public ResponseEntity cadastrarTelefone(@RequestBody Telefone telefone){
        repository.save(telefone);

        return ResponseEntity.created(null).build();

    }
}
