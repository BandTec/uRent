package com.estrutura.urent.controller;

import com.estrutura.urent.model.Aluguel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

import static com.estrutura.urent.controller.LoginController.isLogin;

@RestController
@RequestMapping("alugueis")
public class AluguelController {

    List<Aluguel> alugueis = new ArrayList<Aluguel>();

    @GetMapping
    public ResponseEntity listarTodosAlugueis() {
        if(isLogin()) {
            if(!alugueis.isEmpty()) {
                return ResponseEntity.ok(alugueis);
            } else {
                return ResponseEntity.noContent().build();
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity listarAlugueis(@PathVariable int id) {
        if(isLogin()) {
            if(!alugueis.isEmpty()) {
                return ResponseEntity.ok(alugueis.get(id - 1));
            } else {
                return ResponseEntity.noContent().build();
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @PostMapping
    public ResponseEntity cadastrarAluguel(@RequestBody Aluguel aluguel) {
        if(isLogin()) {
            alugueis.add(aluguel);
            return ResponseEntity.created(null).build();
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity removerGaragem(@PathVariable int id) {
        if(isLogin()) {
            if (!alugueis.isEmpty()) {
                alugueis.remove(id-1);
                return ResponseEntity.ok().build();
            } else {
                return ResponseEntity.notFound().build();
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}
