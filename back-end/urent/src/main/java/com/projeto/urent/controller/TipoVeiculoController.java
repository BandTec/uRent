package com.projeto.urent.controller;

import com.projeto.urent.dominios.TipoVeiculo;
import com.projeto.urent.dominios.Veiculo;
import com.projeto.urent.repositorios.TipoVeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/TipoVeiculos")
public class TipoVeiculoController {

    @Autowired
    TipoVeiculoRepository repository;

    @GetMapping("{id}")
    public ResponseEntity buscarTipoVeiculo(@PathVariable Integer id){
        return ResponseEntity.ok(repository.findById(id));
    }

    @PostMapping
    public ResponseEntity cadastrarVeiculo(@RequestBody @Valid TipoVeiculo TipoVeiculo){
        repository.save(TipoVeiculo);
        return ResponseEntity.created(null).build();
    }

}
