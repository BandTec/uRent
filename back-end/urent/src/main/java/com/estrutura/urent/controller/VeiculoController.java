package com.estrutura.urent.controller;

import com.estrutura.urent.model.Garagem;
import com.estrutura.urent.model.Veiculo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

import static com.estrutura.urent.controller.LoginController.isLogin;

@RestController
@RequestMapping("/veiculos")
public class VeiculoController {

    List<Veiculo> veiculos = new ArrayList<>();

    @GetMapping
    public ResponseEntity listarTodosVeiculos() {
        if(isLogin()) {
            if(!veiculos.isEmpty()) {
                return ResponseEntity.ok(veiculos);
            } else {
                return ResponseEntity.noContent().build();
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity listarVeiculos(@PathVariable int id) {
        if(isLogin()) {
            if(!veiculos.isEmpty()) {
                return ResponseEntity.ok(veiculos.get(id - 1));
            } else {
                return ResponseEntity.noContent().build();
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @PostMapping
    public ResponseEntity cadastrarVeiculo(@RequestBody Veiculo veiculo) {
        if(isLogin()) {
            veiculos.add(veiculo);
            return ResponseEntity.created(null).build();
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity removerVeiculo(@PathVariable int id) {
        if(isLogin()) {
            if (!veiculos.isEmpty()) {
                veiculos.remove(id-1);
                return ResponseEntity.ok().build();
            } else {
                return ResponseEntity.notFound().build();
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}
