package com.projeto.urent.servicos;

import com.projeto.urent.dominios.FileDB;
import com.projeto.urent.dominios.Garagem;
import com.projeto.urent.repositorios.FileDBRepository;
import com.projeto.urent.repositorios.GaragemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

@Service
public class FileStorageService {


    @Autowired
    private FileDBRepository fileDBRepository;

    public FileDB store(MultipartFile file, Integer id) throws IOException {

        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        FileDB FileDB = new FileDB(fileName, file.getContentType(), file.getBytes(), id);

        return fileDBRepository.save(FileDB);
    }

    public FileDB getFile(String id) {
        return fileDBRepository.findById(id).get();
    }

//    public List<FileDB> getAllFiles() {
//        return fileDBRepository.findAll();
//    }
}
