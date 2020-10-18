package com.projeto.urent.repositorios;

import com.projeto.urent.dominios.Garagem;
import com.projeto.urent.dominios.Telefone;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TelefoneRepository extends JpaRepository <Telefone, Integer> {

    @Query("select t from Telefone t join Usuario u on t.usuario = u.id where u.id = ?1")
    List<Garagem> findAllByUsuario(Integer id);
}
