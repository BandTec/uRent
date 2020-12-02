package com.projeto.urent.repositorios;

import com.projeto.urent.dominios.FileDB;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface FileDBRepository extends JpaRepository<FileDB, String> {

    FileDB findAllByGaragem(Integer id);
}
