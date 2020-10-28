package com.projeto.urent.dominios;

import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Table
@Entity
public class Veiculo {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull
    @Length(min = 7, max = 7, message = "Número inválido de placa")
    @Column(name = "placa", nullable = false, length = 10)
    private String placa;

    @NotNull
    @ManyToOne
    private Usuario usuario;

    @NotNull
    @ManyToOne
    private TipoVeiculo tipoVeiculo;

    public Veiculo() {
    }

    public Veiculo(Integer id, String placa, Usuario usuario, TipoVeiculo tipoVeiculo) {
        this.id = id;
        this.placa = placa;
        this.usuario = usuario;
        this.tipoVeiculo = tipoVeiculo;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPlaca() {
        return placa;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public TipoVeiculo getTipoVeiculo() {
        return tipoVeiculo;
    }

    public void setTipoVeiculo(TipoVeiculo tipoVeiculo) {
        this.tipoVeiculo = tipoVeiculo;
    }
}


