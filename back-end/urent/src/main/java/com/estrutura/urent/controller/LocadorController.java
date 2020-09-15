package com.estrutura.urent.controller;

import com.estrutura.urent.model.Locador;
import com.estrutura.urent.model.Usuario;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

import static com.estrutura.urent.controller.LoginController.isLogin;

@RestController
@RequestMapping("/locadores")
public class LocadorController {

    List<Usuario> locadores = new ArrayList<Usuario>();

    @GetMapping
    public ResponseEntity listarTodosLocadores() {
        if(isLogin()) {
            if(!locadores.isEmpty()) {
                return ResponseEntity.ok(locadores);
            } else {
                return ResponseEntity.noContent().build();
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity listarLocador(@PathVariable int id) {
        if(isLogin()) {
            if(!locadores.isEmpty()) {
                return ResponseEntity.ok(locadores.get(id - 1));
            } else {
                return ResponseEntity.noContent().build();
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @PostMapping
    public ResponseEntity cadastrarLocador(@RequestBody Locador locador) {
        if(isLogin()) {
            locadores.add(locador);
           return ResponseEntity.created(null).build();
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity banirLocadore(@PathVariable int id) {
        if(isLogin()) {
            if (!locadores.isEmpty()) {
                locadores.remove(id-1);
                return ResponseEntity.ok().build();
            } else {
                return ResponseEntity.notFound().build();
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}
