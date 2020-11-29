package com.projeto.urent.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/uploads")
public class ImagemController {

    @PostMapping("/imagem")
    public ResponseEntity enviar(@RequestParam("arquivo") MultipartFile arquivo) throws IOException {

        if (arquivo.isEmpty()){

            return ResponseEntity.badRequest().body("Arquivo não enviado!");

        }

        System.out.println("Recebendo um arquivo do tipo: "+arquivo.getContentType());

        byte[] conteudo = arquivo.getBytes();

        Path path = Paths.get(arquivo.getOriginalFilename());
        Files.write(path, conteudo);

        return ResponseEntity.created(null).build();
    }


}
