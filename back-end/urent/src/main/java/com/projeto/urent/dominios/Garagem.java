package com.projeto.urent.dominios;

import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.NotNull;


@Entity
public class Garagem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer IdGaragem;

    @NotNull
    @Length(min = 8, max = 8, message = "Cep inválido")
    @Column(nullable = false, length = 8)
    private String cep;

    @NotNull
    @Length(min = 1, max = 5, message = "Cep inválido")
    private String numero;

    @NotNull
    private String latitude;

    @NotNull
    private String longitude;


    @NotNull
    @Length(min = 0, max = 5)
    private Double avaliacao;

    private Integer fkUsuario;



    public Garagem() {
    }


    public Garagem(Integer idGaragem, @NotNull @Length(min = 8, max = 8, message = "Cep inválido") String cep, @NotNull @Length(min = 1, max = 5, message = "Cep inválido") String numero, @NotNull String latitude, @NotNull String longitude, @NotNull @Length(min = 0, max = 5) Double avaliacao, Integer fkUsuario) {
        IdGaragem = idGaragem;
        this.cep = cep;
        this.numero = numero;
        this.latitude = latitude;
        this.longitude = longitude;
        this.avaliacao = avaliacao;
        this.fkUsuario = fkUsuario;
    }

    public Integer getIdGaragem() {
        return IdGaragem;
    }

    public void setIdGaragem(Integer idGaragem) {
        IdGaragem = idGaragem;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public Double getAvaliacao() {
        return avaliacao;
    }

    public void setAvaliacao(Double avaliacao) {
        this.avaliacao = avaliacao;
    }

    public Integer getFkUsuario() {
        return fkUsuario;
    }

    public void setFkUsuario(Integer fkUsuario) {
        this.fkUsuario = fkUsuario;
    }
}
