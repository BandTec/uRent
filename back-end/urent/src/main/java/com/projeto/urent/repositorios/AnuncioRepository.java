package com.projeto.urent.repositorios;

import com.projeto.urent.dominios.Anuncio;
import com.projeto.urent.visoes.AnuncioSimplesAluguel;
import com.projeto.urent.visoes.AnuncioSimplesFeed;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AnuncioRepository extends JpaRepository<Anuncio, Integer> {

    @Query("select a from Anuncio a join Garagem g on a.garagem = g.id join Usuario u on g.usuario = u.id where u.id = ?1")
    List<Anuncio> findAllByUsuario(Integer id);

    @Query("select new com.projeto.urent.visoes.AnuncioSimplesAluguel(a.valorDiaria, g.latitude, g.longitude) from Anuncio a join Garagemg g on a.garagem = g.id")
    List<AnuncioSimplesAluguel> findLatLong();

    @Query("select new com.projeto.urent.visoes.AnuncioSimplesFeed(a.id, a.titulo, a.valorDiaria, t.tipo, g.cep, g.numero, g.avaliacao) from Anuncio a join Garagem g on a.garagem = g.id join TipoVeiculo t on a.tipoVeiculo = t.id")
    List<AnuncioSimplesFeed> findFeed();
}