package com.projeto.urent.controller;

import com.projeto.urent.PilhaObj;
import com.projeto.urent.dominios.Garagem;
import com.projeto.urent.repositorios.GaragemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

import static com.projeto.urent.controller.UsuarioController.isLoginStatus;

@RestController
@RequestMapping("/garagens")
@CrossOrigin
public class GaragemController  {

    @Autowired
    GaragemRepository repository;

    PilhaObj<Garagem> pilhaGaragem = new PilhaObj<>(10);

    @GetMapping
    public ResponseEntity getGaragens() {
        List<Garagem> garagensList = repository.findAll();

        if(garagensList.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(garagensList);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity buscarGaragem(@PathVariable Integer id){
        Optional<Garagem> garagem = repository.findById(id);

        if(!garagem.isPresent()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(garagem);
        }
    }

    @GetMapping("/usuario/{id}")
    public ResponseEntity buscarGaragensUsuario(@PathVariable Integer id) {

        if(isLoginStatus()) {
            List<Garagem> garagensList = repository.findAllByUsuario(id);

            if(garagensList.isEmpty()) {
                return ResponseEntity.noContent().build();
            } else {
                return ResponseEntity.ok(garagensList);
            }
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping
    public ResponseEntity cadastrarGaragem(@RequestBody @Valid Garagem garagem) {
        if(isLoginStatus()) {
            repository.save(garagem);
            pilhaGaragem.push(garagem);
            return ResponseEntity.created(null).body(garagem.getId());
//            return ResponseEntity.created(null).build();
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/desfazer")
    public ResponseEntity desfazerCadastro() {
        Garagem garagem = pilhaGaragem.pop();

        repository.deleteById(garagem.getId());

        return ResponseEntity.ok().build();
    }



    @DeleteMapping("{id}")
    public ResponseEntity deleteGaragem(@PathVariable int id){

        if (repository.existsById(id)){

            repository.deleteById(id);
            return ResponseEntity.ok().build();

        }

        return ResponseEntity.notFound().build();

    }

}
