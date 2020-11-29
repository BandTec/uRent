package com.projeto.urent.controller;

import com.projeto.urent.ListaObj;
import com.projeto.urent.dominios.Usuario;
import com.projeto.urent.repositorios.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin
public class UsuarioController {

    @Autowired
    UsuarioRepository repository;

    Integer contador = 0;

    private static boolean loginStatus = false;

    @GetMapping
    public ResponseEntity getUsuarios() {

        List<Usuario> usuarioList = repository.findAll();

        if(usuarioList.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(usuarioList);
        }
    }

    @GetMapping("/status")
    public ResponseEntity statusLogin() {
        if (loginStatus) {
           return ResponseEntity.ok().build();
        }
        return ResponseEntity.badRequest().build();
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

    @GetMapping(value = "/gerar-csv", produces = "text/csv")
    @ResponseBody
    public ResponseEntity baixarArquivo() {

        List<Usuario> usuarioList = repository.findAll();

        if(!usuarioList.isEmpty()) {
            ListaObj listaObj = new ListaObj(usuarioList.size());

            HttpHeaders headers = new HttpHeaders();
            headers.add("Content-Disposition", "attachment; file=usuarios.csv");

            for(int i = 0; i < usuarioList.size(); i++) {
                listaObj.adiciona(usuarioList.get(i));
            }

            listaObj.gravaListaUsuario(listaObj, "usuario.csv");

            return new ResponseEntity(new FileSystemResource("src/main/resources/static/usuario.csv"), headers, HttpStatus.OK);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @GetMapping(value = "/gerar-txt", produces = "text/txt")
    @ResponseBody
    public ResponseEntity baixarTxt() {

        contador++;
        String arquivoNome = "usuario"+contador+".txt";

        List<Usuario> usuarioList = repository.findAll();

        if(!usuarioList.isEmpty()) {
            ListaObj listaObj = new ListaObj(usuarioList.size());

            HttpHeaders headers = new HttpHeaders();
            headers.add("Content-Disposition", "attachment; file=" + arquivoNome);

            for(int i = 0; i < usuarioList.size(); i++) {
                listaObj.adiciona(usuarioList.get(i));
            }

            listaObj.arquivoDeLayoutUsuario(arquivoNome, listaObj);
            return new ResponseEntity(new FileSystemResource("src/main/resources/static/"+arquivoNome), headers, HttpStatus.OK);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @PostMapping("/upload")
    public ResponseEntity upload(@RequestParam("arquivo") MultipartFile arquivo) throws IOException, URISyntaxException {
        char[] vetor;
        if(arquivo.isEmpty()) {
            return ResponseEntity.badRequest().body("Arquivo não encontrado");
        }

        String conteudoString = new String(arquivo.getBytes(), "UTF-8");

        String[] dados = conteudoString.split("\n");

        for(int i = 0; i < dados.length; i++) {
            if(i != 0 && i != dados.length - 1) {
                Usuario usuario = new Usuario();

                usuario.setId(Integer.parseInt(dados[i].substring(2, 4)));
                usuario.setNome(dados[i].substring(4, 25));
                usuario.setCpf(dados[i].substring(25, 39));
                usuario.setDataNasc(LocalDate.parse(dados[i].substring(39, 49)));
                usuario.setCnh(dados[i].substring(49, 63));
                usuario.setCep(dados[i].substring(63, 72));
                usuario.setEmail(dados[i].substring(72, 123));
                usuario.setSenha(dados[i].substring(123, 148));
                usuario.setAvaliacao(Double.parseDouble(dados[i].substring(148, 155)));

                repository.save(usuario);
                System.out.println("Cadastrado com sucesso: " + i);
            }
        }

        return ResponseEntity.created(null).build();
    }


    @DeleteMapping("{id}")
    public ResponseEntity deleteUusario(@PathVariable int id){

        if (repository.existsById(id)){

            repository.deleteById(id);
            return ResponseEntity.ok().build();

        }

        return ResponseEntity.notFound().build();

    }

    public static boolean isLoginStatus() {
        return loginStatus;
    }
}










