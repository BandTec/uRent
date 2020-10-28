package com.projeto.urent.dominios;

import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Table
@Entity
public class Telefone {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull
    @Length(min = 11, max = 11, message = "Número inválido")
    @Column(nullable = false, length = 11)
    private String numero;

    @ManyToOne
    private Usuario usuario;

    public Telefone() {
    }

    public Telefone(Integer id, String numero, Usuario usuario) {
        this.id = id;
        this.numero = numero;
        this.usuario = usuario;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
}
