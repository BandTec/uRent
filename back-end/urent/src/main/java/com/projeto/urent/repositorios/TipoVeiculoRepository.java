package com.projeto.urent.repositorios;

import com.projeto.urent.dominios.TipoVeiculo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TipoVeiculoRepository extends JpaRepository <TipoVeiculo, Integer> {

    Optional<TipoVeiculo> findByIdTipoVeiculo(Integer integer);

}
