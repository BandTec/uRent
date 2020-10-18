package com.projeto.urent.repositorios;

import com.projeto.urent.dominios.Aluguel;
import com.projeto.urent.visoes.AluguelSimples;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AluguelRepository extends JpaRepository<Aluguel, Integer> {

    @Query("select new com.projeto.urent.visoes.AluguelSimples(a.dataInicio, a.dataFinal, g.cep, g.numero, g.latitude, g.longitude, u.nome, u.email, u.cpf, v.placa) from Aluguel a join Garagem g on a.garagem = g.id join Veiculo v on a.veiculo = v.id join Usuario u on v.usuario = u.id where u.id = ?1")
    List<AluguelSimples> findAllSimplesLocador(Integer id);

    @Query("select new com.projeto.urent.visoes.AluguelSimples(a.dataInicio, a.dataFinal, g.cep, g.numero, g.latitude, g.longitude, u.nome, u.email, u.cpf, v.placa) from Aluguel a join Garagem g on a.garagem = g.id join Usuario u on g.usuario = u.id join Veiculo v on a.veiculo = v.id where u.id = ?1")
    List<AluguelSimples> findAllSimplesLocatario(Integer id);
}
