package com.projeto.urent.repositorios;

import com.projeto.urent.dominios.Veiculo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface VeiculoRepository extends JpaRepository <Veiculo, Integer> {

    @Query("select v from Veiculo v join TipoVeiculo t on v.tipoVeiculo = t.id where t.tipo = ?1")
    List<Veiculo> findAllByTipo(String tipo);

    @Query("select v from Veiculo v join Usuario u on v.usuario = u.id where u.id = ?1")
    List<Veiculo> findAllByUsuario(Integer id);
}
