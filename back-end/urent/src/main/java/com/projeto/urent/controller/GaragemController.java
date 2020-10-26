package com.projeto.urent.controller;

import com.projeto.urent.dominios.Garagem;
import com.projeto.urent.repositorios.GaragemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/garagens")
public class GaragemController  {

    @Autowired
    GaragemRepository repository;

    @GetMapping
    public ResponseEntity getGaragens() {
        List<Garagem> garagensList = repository.findAll();

        if(garagensList.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(garagensList);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity buscarGaragem(@PathVariable Integer id){
        Optional<Garagem> garagem = repository.findById(id);

        if(!garagem.isPresent()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(garagem);
        }
    }

    @GetMapping("/usuario/{id}")
    public ResponseEntity buscarGaragensUsuario(@PathVariable Integer id) {
        List<Garagem> garagensList = repository.findAllByUsuario(id);

        if(garagensList.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(garagensList);
        }
    }

    @PostMapping
    public ResponseEntity cadastrarGaragem(@RequestBody @Valid Garagem garagem) {
        repository.save(garagem);
        return ResponseEntity.created(null).build();
    }

    @DeleteMapping("{id}")
    public ResponseEntity deleteGaragem(@PathVariable int id){

        if (repository.existsById(id)){

            repository.deleteById(id);
            return ResponseEntity.ok().build();

        }

        return ResponseEntity.notFound().build();

    }

}
