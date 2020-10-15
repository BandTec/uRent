package com.projeto.urent.repositorios;

import com.projeto.urent.dominios.Garagem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface GaragemRepository extends JpaRepository <Garagem, Integer> {

    Optional<Garagem> findById(Integer id);
}
