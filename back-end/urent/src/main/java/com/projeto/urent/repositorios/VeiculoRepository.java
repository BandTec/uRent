package com.projeto.urent.repositorios;

import com.projeto.urent.dominios.Veiculo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface VeiculoRepository extends JpaRepository <Veiculo, Integer> {

    @Override
    Optional<Veiculo> findById(Integer integer);
    Optional<Veiculo> findByFkTipoVeiculo(Integer integer);
    Optional<Veiculo> findByFkUsuario(Integer integer);
}
