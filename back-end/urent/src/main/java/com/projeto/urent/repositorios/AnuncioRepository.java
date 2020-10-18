package com.projeto.urent.repositorios;

import com.projeto.urent.dominios.Anuncio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AnuncioRepository extends JpaRepository<Anuncio, Integer> {

    @Query("select a from Anuncio a join Garagem g on a.garagem = g.id join Usuario u on g.usuario = u.id where u.id = ?1")
    List<Anuncio> findAllByUsuario(Integer id);
}
