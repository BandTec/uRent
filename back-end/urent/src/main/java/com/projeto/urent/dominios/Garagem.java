package com.projeto.urent.dominios;

import org.hibernate.annotations.ManyToAny;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.NotNull;


@Entity
public class Garagem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull
    @Length(min = 8, max = 8, message = "Cep inválido")
    @Column(nullable = false, length = 8)
    private String cep;

    @NotNull
    @Length(min = 1, max = 5, message = "Número inválido")
    @Column(nullable = false, length = 5)
    private String numero;

    @NotNull
    @Column(nullable = false, length = 10)
    private String latitude;

    @NotNull
    @Column(nullable = false, length = 10)
    private String longitude;

    @NotNull
    @Length(min = 0, max = 5)
    private Double avaliacao;

    @ManyToOne
    private Usuario usuario;

    public Garagem() {
    }

    public Garagem(Integer id, @NotNull @Length(min = 8, max = 8, message = "Cep inválido") String cep, @NotNull @Length(min = 1, max = 5, message = "Número inválido") String numero, @NotNull String latitude, @NotNull String longitude, @NotNull @Length(min = 0, max = 5) Double avaliacao, Usuario usuario) {
        this.id = id;
        this.cep = cep;
        this.numero = numero;
        this.latitude = latitude;
        this.longitude = longitude;
        this.avaliacao = avaliacao;
        this.usuario = usuario;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
}
