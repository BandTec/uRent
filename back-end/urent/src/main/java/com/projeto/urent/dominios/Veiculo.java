package com.projeto.urent.dominios;

import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Veiculo {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull
    @Length(min = 7, max = 7, message = "Número Inválido de Placa")
    @Column(nullable = false, length = 10)
    private String placaCarro;

    private Integer fkTipoVeiculo;

    private Integer fkUsuario;

    public Veiculo() {

    }

    public Veiculo(Integer id, @NotNull @Length(min = 7, max = 7, message = "Número Inválido de Placa") String placaCarro, Integer fkTipoVeiculo, Integer fkUsuario) {
        this.id = id;
        this.placaCarro = placaCarro;
        this.fkTipoVeiculo = fkTipoVeiculo;
        this.fkUsuario = fkUsuario;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPlacaCarro() {
        return placaCarro;
    }

    public void setPlacaCarro(String placaCarro) {
        this.placaCarro = placaCarro;
    }

    public Integer getFkTipoVeiculo() {
        return fkTipoVeiculo;
    }

    public void setFkTipoVeiculo(Integer fkTipoVeiculo) {
        this.fkTipoVeiculo = fkTipoVeiculo;
    }

    public Integer getFkUsuario() {
        return fkUsuario;
    }

    public void setFkUsuario(Integer fkUsuario) {
        this.fkUsuario = fkUsuario;
    }
}


