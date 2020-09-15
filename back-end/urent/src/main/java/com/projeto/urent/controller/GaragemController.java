package com.projeto.urent.controller;

import com.projeto.urent.model.Garagem;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

import static com.projeto.urent.controller.LoginController.isLogin;

@RestController
@RequestMapping("/garagens")
public class GaragemController {

    List<Garagem> garagens = new ArrayList<>();

    @GetMapping
    public ResponseEntity listarTodasGaragens() {
        if(isLogin()) {
            if(!garagens.isEmpty()) {
                return ResponseEntity.ok(garagens);
            } else {
                return ResponseEntity.noContent().build();
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity listarGaragem(@PathVariable int id) {
        if(isLogin()) {
            if(!garagens.isEmpty()) {
                return ResponseEntity.ok(garagens.get(id - 1));
            } else {
                return ResponseEntity.noContent().build();
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @PostMapping
    public ResponseEntity cadastrarGaragem(@RequestBody Garagem garagem) {
        if(isLogin()) {
            garagens.add(garagem);
            return ResponseEntity.created(null).build();
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity removerGaragem(@PathVariable int id) {
        if(isLogin()) {
            if (!garagens.isEmpty()) {
                garagens.remove(id-1);
                return ResponseEntity.ok().build();
            } else {
                return ResponseEntity.notFound().build();
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}
