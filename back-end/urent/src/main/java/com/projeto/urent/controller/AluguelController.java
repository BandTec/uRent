package com.projeto.urent.controller;

import com.projeto.urent.dominios.Aluguel;
import com.projeto.urent.repositorios.AluguelRepository;
import com.projeto.urent.visoes.AluguelSimples;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/alugueis")
public class AluguelController {

    @Autowired
    AluguelRepository repository;

    @GetMapping
    public ResponseEntity getAlugueis() {
        List<Aluguel> aluguelList = repository.findAll();

        if(aluguelList.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(aluguelList);
        }
    }

    @GetMapping("/locador/{id}")
    public ResponseEntity buscarAlugueisLocador(@PathVariable Integer id) {
        List<AluguelSimples> aluguelSimplesList = repository.findAllSimplesLocador(id);

        if (aluguelSimplesList.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(aluguelSimplesList);
        }
    }

    @GetMapping("/locatario/{id}")
    public ResponseEntity buscarAlugueisLocatario(@PathVariable Integer id) {
        List<AluguelSimples> aluguelSimplesList = repository.findAllSimplesLocatario(id);

        if (aluguelSimplesList.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(aluguelSimplesList);
        }
    }

    @PostMapping
    public ResponseEntity cadastrarGaragem(@RequestBody Aluguel aluguel) {
        repository.save(aluguel);
        return ResponseEntity.created(null).build();
    }


}
