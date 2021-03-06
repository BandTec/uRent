package com.projeto.urent.controller;

import com.projeto.urent.dominios.Veiculo;
import com.projeto.urent.repositorios.VeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

import static com.projeto.urent.controller.UsuarioController.isLoginStatus;

@RestController
@RequestMapping ("/veiculos")
@CrossOrigin
public class VeiculoController {

    @Autowired
    VeiculoRepository repository;

    @GetMapping
    public ResponseEntity getVeiculos() {
        List<Veiculo> veiculoList = repository.findAll();

        if(veiculoList.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(veiculoList);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity buscarVeiculo(@PathVariable Integer id){

        Optional<Veiculo> veiculo = repository.findById(id);

        if(!veiculo.isPresent()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(veiculo);
        }
    }

    @GetMapping("/tipo/{tipo}")
    public ResponseEntity buscarVeiculoFkVeic(@PathVariable String tipo){

        List<Veiculo> veiculoList = repository.findAllByTipo(tipo);

        if(veiculoList.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(veiculoList);
        }
    }

    @GetMapping("/usuario/{id}")
    public ResponseEntity buscarVeiculoUsuario(@PathVariable Integer id){
        if(isLoginStatus()) {
            List<Veiculo> veiculoList = repository.findAllByUsuario(id);

            if(veiculoList.isEmpty()) {
                return ResponseEntity.noContent().build();
            } else {
                return ResponseEntity.ok(veiculoList);
            }
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping
    public ResponseEntity cadastrarVeiculo(@RequestBody @Valid Veiculo veiculo){
        if(isLoginStatus()) {
            repository.save(veiculo);
            return ResponseEntity.created(null).build();
        } else {
            return ResponseEntity.badRequest().build();
        }
    }


    @DeleteMapping("{id}")
    public ResponseEntity deleteVeiculo(@PathVariable int id){

        if (repository.existsById(id)){

            repository.deleteById(id);
            return ResponseEntity.ok().build();

        }

        return ResponseEntity.notFound().build();

    }
}
