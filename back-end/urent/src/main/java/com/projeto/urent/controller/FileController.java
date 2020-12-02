package com.projeto.urent.controller;

import com.projeto.urent.dominios.FileDB;
import com.projeto.urent.message.ResponseFile;
import com.projeto.urent.message.ResponseMessage;
import com.projeto.urent.repositorios.FileDBRepository;
import com.projeto.urent.servicos.FileStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/imagens")
@CrossOrigin
public class FileController {

    @Autowired
    private FileStorageService storageService;

    @Autowired
    private FileDBRepository repository;

    @PostMapping("/upload")
    public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file, @RequestParam("idGaragem") Integer id) {
        System.out.println(id);
        System.out.println(file.getName());
        String message = "";
        try {
            storageService.store(file, id);
            message = "Uploaded the file successfully: " + file.getOriginalFilename();
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
        } catch (Exception e) {
            message = "Could not upload the file: " + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }
    }

    @GetMapping("/files")
    public ResponseEntity<List<ResponseFile>> getListFiles() {

        List<FileDB> files = repository.findAll();
        List<ResponseFile> filesReturn = new ArrayList<>();

        System.out.println(files);

        for(int i = 0; i < files.size(); i++) {
            System.out.println("id: "+ files.get(i).getId());
            String fileDownloadUri = ServletUriComponentsBuilder
                    .fromCurrentContextPath()
                    .path("/imagens/files/")
                    .path(files.get(i).getId())
                    .toUriString();

            ResponseFile responseFile = new ResponseFile(
                    files.get(i).getName(),
                    fileDownloadUri,
                    files.get(i).getType(),
                    files.get(i).getData().length);

            filesReturn.add(responseFile);

        }
        return ResponseEntity.ok(filesReturn);
    }

    @GetMapping("/files/garagem/{idGaragem}")
    public ResponseEntity getFilesGaragem(@PathVariable Integer idGaragem) {
        FileDB fileDB = repository.findAllByGaragem(idGaragem);

        String fileDowloadUri = ServletUriComponentsBuilder
                .fromCurrentContextPath()
                .path("/imagens/files/")
                .path(fileDB.getId())
                .toUriString();

        ResponseFile responseFile = new ResponseFile(
                fileDB.getName(),
                fileDowloadUri,
                fileDB.getType(),
                fileDB.getData().length);

        return ResponseEntity.ok(responseFile);
    }

    @GetMapping("/files/{id}")
    public ResponseEntity<byte[]> getFile(@PathVariable String id) {
        FileDB fileDB = storageService.getFile(id);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileDB.getName() + "\"")
                .body(fileDB.getData());
    }


}
