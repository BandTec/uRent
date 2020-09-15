package com.projeto.urent.controller;

import com.projeto.urent.model.Locador;
import com.projeto.urent.model.Locatario;
import com.projeto.urent.model.Login;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class LoginController {

    private static boolean login = false;

    Locador locador = new Locador("Matheus", "32659785625", "matheus.custodio@gmail.com", "123", "05648526", 5);
    Locatario locatario = new Locatario("Vinicius", "65945826648", "vinivius.sobral@gmail.com", "456", "02645236", 5, "5648595");

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody Login login) {
        if(login.getEmail().equals(locador.getEmail()) && login.getSenha().equals(locador.getSenha())) {
            this.login = true;
            return ResponseEntity.ok(this.locador);
        } else if(login.getEmail().equals(locatario.getEmail()) && login.getSenha().equals(locatario.getSenha())) {
            this.login = true;
            return ResponseEntity.ok(this.locatario);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/logoff")
    public ResponseEntity logoff() {
        if(this.login) {
            this.login = false;
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    public static boolean isLogin() {
        return login;
    }
}
