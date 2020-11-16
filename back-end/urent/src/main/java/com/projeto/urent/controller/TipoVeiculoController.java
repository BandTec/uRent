package com.projeto.urent.controller;

import com.projeto.urent.dominios.TipoVeiculo;
import com.projeto.urent.dominios.Veiculo;
import com.projeto.urent.repositorios.TipoVeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/tipo-veiculos")
@CrossOrigin
public class TipoVeiculoController {

    @Autowired
    TipoVeiculoRepository repository;

    @GetMapping()
    public ResponseEntity buscarTodos(){

        List<TipoVeiculo> tipoVeiculo = repository.findAll();

        if(tipoVeiculo.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(tipoVeiculo);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity buscarTipoVeiculo(@PathVariable Integer id){

        Optional<TipoVeiculo> tipoVeiculo = repository.findById(id);

        if(!tipoVeiculo.isPresent()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(tipoVeiculo);
        }
    }

    @PostMapping
    public ResponseEntity cadastrarTipoVeiculo(@RequestBody @Valid TipoVeiculo TipoVeiculo){
        repository.save(TipoVeiculo);
        return ResponseEntity.created(null).build();
    }

}
