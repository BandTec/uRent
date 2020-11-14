package com.projeto.urent.controller;

import com.projeto.urent.AnuncioListAnuncio;
import com.projeto.urent.Iterator;
import com.projeto.urent.ListAnuncio;
import com.projeto.urent.dominios.Anuncio;
import com.projeto.urent.repositorios.AnuncioRepository;
import org.springframework.aop.config.AopNamespaceUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/anuncios")
@CrossOrigin
public class AnuncioController {

    @Autowired
    AnuncioRepository repository;

    @GetMapping
    public ResponseEntity getAnuncios() {
        List<Anuncio> anuncioList = repository.findAll();

        if(anuncioList.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(anuncioList);
        }
    }

    @GetMapping("/filtro")
    public ResponseEntity getAnunciosPreco(@RequestParam(value = "preco") Double valor) {
        List<Anuncio> anuncioList = repository.findAll();

        ListAnuncio<Anuncio> anuncioListAnuncio = new AnuncioListAnuncio(anuncioList);

        Iterator<Anuncio> iterator = anuncioListAnuncio.iterator();

        List<Anuncio> anuncioFiltro = new ArrayList<>();

        while (iterator.hasNext()) {
            Anuncio currentAnuncio = iterator.next();
            if(currentAnuncio.getValorDiaria().equals(valor)) {
                anuncioFiltro.add(currentAnuncio);
            }
        }

        return ResponseEntity.ok(anuncioFiltro);
    }

    @GetMapping("/{id}")
    public ResponseEntity buscarAnuncio(@PathVariable Integer id) {
        Optional<Anuncio> anuncio = repository.findById(id);

        if(!anuncio.isPresent()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(anuncio);
        }
    }

    @GetMapping("/usuario/{id}")
    public ResponseEntity buscarAnunciosUsuario(@PathVariable Integer id) {
        List<Anuncio> anuncioList = repository.findAllByUsuario(id);

        if(anuncioList.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(anuncioList);
        }
    }

    @PostMapping
    public ResponseEntity cadastrarAnuncio(@RequestBody Anuncio anuncio) {
        repository.save(anuncio);
        return ResponseEntity.created(null).build();
    }

    @PutMapping
    public ResponseEntity alterarAnuncio(@RequestBody Anuncio anuncio) {

        Optional<Anuncio> a = repository.findById(anuncio.getId());

        if(a.isPresent()) {
            Anuncio anuncioNovo = a.get();
            anuncioNovo.setTitulo(anuncio.getTitulo());
            anuncioNovo.setValorDiaria(anuncio.getValorDiaria());
            anuncioNovo.setGaragem(anuncio.getGaragem());
            anuncioNovo.setTipoVeiculo(anuncio.getTipoVeiculo());
            repository.save(anuncioNovo);
            return ResponseEntity.ok().build();
        } else  {
            return ResponseEntity.notFound().build();
        }

    }

    @DeleteMapping("{id}")
    public ResponseEntity deleteAnuncio(@PathVariable int id){

        if (repository.existsById(id)){

            repository.deleteById(id);
            return ResponseEntity.ok().build();

        }

        return ResponseEntity.notFound().build();

    }

}
