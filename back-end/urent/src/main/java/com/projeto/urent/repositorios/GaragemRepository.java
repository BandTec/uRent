package com.projeto.urent.repositorios;

import com.projeto.urent.dominios.Garagem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface GaragemRepository extends JpaRepository <Garagem, Integer> {

    @Query("select g from Garagem g join Usuario u on g.usuario = u.id where u.id = ?1")
    List<Garagem> findAllByUsuario(Integer id);
}
