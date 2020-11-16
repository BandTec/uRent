package com.projeto.urent.controller;

import com.projeto.urent.Acordo;
import com.projeto.urent.Alertar;
import com.projeto.urent.ListaObj;
import com.projeto.urent.dominios.Aluguel;
import com.projeto.urent.repositorios.AluguelRepository;
import com.projeto.urent.visoes.AluguelSimples;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.projeto.urent.controller.UsuarioController.isLoginStatus;

@RestController
@RequestMapping("/alugueis")
public class AluguelController {

    @Autowired
    AluguelRepository repository;

    Integer contador = 0;

    private Acordo acordo = new Acordo();
    private Aluguel aluguel = new Aluguel();

    @GetMapping
    public ResponseEntity getAlugueis() {

        List<Aluguel> aluguelList = repository.findAll();

        if(aluguelList.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(aluguelList);
        }
    }

    @GetMapping("/locador/{id}")
    public ResponseEntity buscarAlugueisLocador(@PathVariable Integer id) {
        if(isLoginStatus()) {
            List<AluguelSimples> aluguelSimplesList = repository.findAllSimplesLocador(id);

            if (aluguelSimplesList.isEmpty()) {
                return ResponseEntity.noContent().build();
            } else {
                return ResponseEntity.ok(aluguelSimplesList);
            }
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/locatario/{id}")
    public ResponseEntity buscarAlugueisLocatario(@PathVariable Integer id) {
        if(isLoginStatus()) {
            List<AluguelSimples> aluguelSimplesList = repository.findAllSimplesLocatario(id);

            if (aluguelSimplesList.isEmpty()) {
                return ResponseEntity.noContent().build();
            } else {
                return ResponseEntity.ok(aluguelSimplesList);
            }
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping
    public ResponseEntity cadastrarAluguel(@RequestBody Aluguel aluguel) {
        this.aluguel = aluguel;
        repository.save(this.aluguel);
        Alertar alertar = new Alertar();

        acordo.adicionaObserver(alertar);
        return ResponseEntity.created(null).build();
    }
    
    @GetMapping("/acordo")
    public ResponseEntity buscarAcordo() {
        return ResponseEntity.ok(acordo.adicionarAluguel(this.aluguel));
    }

    @GetMapping(value = "/gerar-csv/{id}/locatario", produces = "text/csv")
    @ResponseBody
    public ResponseEntity baixarArquivoLocatario(@PathVariable Integer id) {

        List<AluguelSimples> aluguelSimplesList = repository.findAllSimplesLocatario(id);

        if(!aluguelSimplesList.isEmpty()) {
            ListaObj listaObj = new ListaObj(aluguelSimplesList.size());

            HttpHeaders headers = new HttpHeaders();
            headers.add("Content-Disposition", "attachment; file=aluguelLocatario.csv");

            for(int i = 0; i < aluguelSimplesList.size(); i++) {
                listaObj.adiciona(aluguelSimplesList.get(i));
            }

            listaObj.gravaListaAluguel(listaObj, "aluguelLocatario.csv");

            return new ResponseEntity(new FileSystemResource("./src/main/resources/static/aluguelLocatario.csv"), headers, HttpStatus.OK);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @GetMapping(value = "/gerar-csv/{id}/locador", produces = "text/csv")
    @ResponseBody
    public ResponseEntity baixarArquivo(@PathVariable Integer id) {

        List<AluguelSimples> aluguelSimplesList = repository.findAllSimplesLocador(id);

        if(!aluguelSimplesList.isEmpty()) {
            ListaObj listaObj = new ListaObj(aluguelSimplesList.size());

            HttpHeaders headers = new HttpHeaders();
            headers.add("Content-Disposition", "attachment; file=aluguelLocador.csv");

            for(int i = 0; i < aluguelSimplesList.size(); i++) {
                listaObj.adiciona(aluguelSimplesList.get(i));
            }

            listaObj.gravaListaAluguel(listaObj, "aluguelLocador.csv");

            return new ResponseEntity(new FileSystemResource("./src/main/resources/static/aluguelLocador.csv"), headers, HttpStatus.OK);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @GetMapping(value = "/gerar-txt/{id}/locatario", produces = "text/txt")
    @ResponseBody
    public ResponseEntity baixarTxtLocatario(@PathVariable Integer id) {

        contador++;
        String arquivoNome = "locatario"+contador+".txt";

        List<AluguelSimples> aluguelSimplesList = repository.findAllSimplesLocatario(id);

        if(!aluguelSimplesList.isEmpty()) {
            ListaObj listaObj = new ListaObj(aluguelSimplesList.size());

            HttpHeaders headers = new HttpHeaders();
            headers.add("Content-Disposition", "attachment; file=" + arquivoNome);

            for(int i = 0; i < aluguelSimplesList.size(); i++) {
                listaObj.adiciona(aluguelSimplesList.get(i));
            }

            listaObj.arquivoDeLayoutAluguel(arquivoNome, listaObj);
            return new ResponseEntity(new FileSystemResource("src/main/resources/static/"+arquivoNome), headers, HttpStatus.OK);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @GetMapping(value = "/gerar-txt/{id}/locador", produces = "text/txt")
    @ResponseBody
    public ResponseEntity baixarTxtLocador(@PathVariable Integer id) {

        contador++;
        String arquivoNome = "locador"+contador+".txt";

        List<AluguelSimples> aluguelSimplesList = repository.findAllSimplesLocador(id);

        if(!aluguelSimplesList.isEmpty()) {
            ListaObj listaObj = new ListaObj(aluguelSimplesList.size());

            HttpHeaders headers = new HttpHeaders();
            headers.add("Content-Disposition", "attachment; file=" + arquivoNome);

            for(int i = 0; i < aluguelSimplesList.size(); i++) {
                listaObj.adiciona(aluguelSimplesList.get(i));
            }

            listaObj.arquivoDeLayoutAluguel(arquivoNome, listaObj);
            return new ResponseEntity(new FileSystemResource("src/main/resources/static/"+arquivoNome), headers, HttpStatus.OK);
        } else {
            return ResponseEntity.noContent().build();
        }
    }


}
