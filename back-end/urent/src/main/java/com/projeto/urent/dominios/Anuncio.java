package com.projeto.urent.dominios;

import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Anuncio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull
    @Length(min = 3, max = 200)
    @Column(nullable = false)
    private String titulo;

    @NotNull
    @Column(name = "valor_diaria", nullable = false)
    private Double valorDiaria;

    @NotNull
    @ManyToOne
    private Garagem garagem;

    @NotNull
    @Column(name = "fk_tipo_veiculo")
    private Integer tipoVeiculo;

    public Anuncio() {
    }

    public Anuncio(Integer id, String titulo, Double valorDiaria, Garagem garagem, Integer tipoVeiculo) {
        this.id = id;
        this.titulo = titulo;
        this.valorDiaria = valorDiaria;
        this.garagem = garagem;
        this.tipoVeiculo = tipoVeiculo;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public Double getValorDiaria() {
        return valorDiaria;
    }

    public void setValorDiaria(Double valorDiaria) {
        this.valorDiaria = valorDiaria;
    }

    public Garagem getGaragem() {
        return garagem;
    }

    public void setGaragem(Garagem garagem) {
        this.garagem = garagem;
    }

    public Integer getTipoVeiculo() {
        return tipoVeiculo;
    }

    public void setTipoVeiculo(Integer tipoVeiculo) {
        this.tipoVeiculo = tipoVeiculo;
    }
}
