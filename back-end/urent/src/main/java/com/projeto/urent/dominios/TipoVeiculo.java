package com.projeto.urent.dominios;

import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class TipoVeiculo {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer idTipoVeiculo;

    @NotNull
    @Length(min = 10, max = 20, message = "Nome Inválido")
    @Column(nullable = false, length = 40)
    private String tipo;

    public TipoVeiculo() {
    }

    public TipoVeiculo(Integer idTipoVeiculo, @NotNull @Length(min = 10, max = 20, message = "Nome Inválido") String tipo) {
        this.idTipoVeiculo = idTipoVeiculo;
        this.tipo = tipo;
    }

    public Integer getIdTipoVeiculo() {
        return idTipoVeiculo;
    }

    public void setIdTipoVeiculo(Integer idTipoVeiculo) {
        this.idTipoVeiculo = idTipoVeiculo;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
}
