package com.projeto.urent.controller;

import com.projeto.urent.dominios.Usuario;
import com.projeto.urent.repositorios.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    UsuarioRepository repository;

    private boolean loginStatus = false;

    @GetMapping("/{id}")
    public ResponseEntity buscarUsuario(@PathVariable Integer id) {
        if(loginStatus) {
            if(repository.findById(id).isPresent()) {
                return ResponseEntity.ok(repository.findById(id));
            } else {
                return ResponseEntity.notFound().build();
            }
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping
    public ResponseEntity cadastrar(@RequestBody @Valid Usuario usuario) {
        repository.save(usuario);
        return ResponseEntity.created(null).build();
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody Usuario usuario) {
        Optional<Usuario> u = repository.findByEmailAndSenha(usuario.getEmail(), usuario.getSenha());

        if(u.isPresent()) {
            loginStatus = true;
            return ResponseEntity.ok(u);
        } else {
            return ResponseEntity.status(400).body("E-mail e/ou senha inválidos!");
        }
    }

    @PostMapping("/logoff")
    public ResponseEntity logoff(){
        loginStatus = false;
        return ResponseEntity.ok().build();
    }

    @PutMapping("/alterar-senha")
    public ResponseEntity alterarSenha(@RequestBody Usuario usuario) {
        Optional<Usuario> u = repository.findByEmail(usuario.getEmail());

        if(u.isPresent()) {
            Usuario user = u.get();
            user.setSenha(usuario.getSenha());
            repository.save(user);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}










