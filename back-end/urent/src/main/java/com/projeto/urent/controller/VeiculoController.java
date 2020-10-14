package com.projeto.urent.controller;

import com.projeto.urent.dominios.Veiculo;
import com.projeto.urent.repositorios.VeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping ("/veiculos")
public class VeiculoController {

    @Autowired
    VeiculoRepository repository;

    @GetMapping("{id}")
    public ResponseEntity buscarVeiculo(@PathVariable Integer id){
        return ResponseEntity.ok(repository.findById(id));
    }

    @GetMapping("{fkTipoVeiculo}")
    public ResponseEntity buscarVeiculoFkVeic(@PathVariable Integer fkTipoVeiculo){
        return ResponseEntity.ok(repository.findById(fkTipoVeiculo));
    }

    @GetMapping("{fkUsuario}")
    public ResponseEntity buscarVeiculoFkUsu(@PathVariable Integer fkUsuario){
        return ResponseEntity.ok(repository.findById(fkUsuario));
    }

    @PostMapping
    public ResponseEntity cadastrarVeiculo(@RequestBody @Valid Veiculo veiculo){
        repository.save(veiculo);
        return ResponseEntity.created(null).build();
    }
}
