package com.projeto.urent.controller;

import com.projeto.urent.model.Locatario;
import com.projeto.urent.model.Usuario;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

import static com.projeto.urent.controller.LoginController.isLogin;

@RestController
@RequestMapping("/locatarios")
public class LocatarioController {

    List<Usuario> locatarios = new ArrayList<Usuario>();

    @GetMapping
    public ResponseEntity listarTodosLocatarios() {
        if(isLogin()) {
            if(!locatarios.isEmpty()) {
                return ResponseEntity.ok(locatarios);
            } else {
                return ResponseEntity.noContent().build();
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity listarLocatario(@PathVariable int id) {
        if(isLogin()) {
            if(!locatarios.isEmpty()) {
                return ResponseEntity.ok(locatarios.get(id - 1));
            } else {
                return ResponseEntity.noContent().build();
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @PostMapping
    public ResponseEntity cadastrarLocatario(@RequestBody Locatario locatario) {
        if(isLogin()) {
            locatarios.add(locatario);
           return ResponseEntity.created(null).build();
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity banirLocatario(@PathVariable int id) {
        if(isLogin()) {
            if (!locatarios.isEmpty()) {
                locatarios.remove(id-1);
                return ResponseEntity.ok().build();
            } else {
                return ResponseEntity.notFound().build();
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}
