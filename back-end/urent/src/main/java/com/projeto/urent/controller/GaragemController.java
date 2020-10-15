package com.projeto.urent.controller;


import com.projeto.urent.dominios.Garagem;
import com.projeto.urent.repositorios.GaragemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/garagem")
public class GaragemController  {

    @Autowired
    GaragemRepository repository;

    @GetMapping("{id}")
    public ResponseEntity buscarGaragem(@PathVariable Integer id){

       return ResponseEntity.ok(repository.findById(id));

    }


    @PostMapping
    public ResponseEntity cadastrarGaragem(@RequestBody @Valid Garagem garagem) {
        repository.save(garagem);
        return ResponseEntity.created(null).build();
    }

    




}
