package com.projeto.urent.repositorios;

import com.projeto.urent.dominios.Telefone;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TelefoneRepository extends JpaRepository <Telefone, Integer> {

    Optional<Telefone> findByIdTelefone(Integer id);

}
