package com.projeto.urent.dominios;

import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Telefone {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer IdTelefone;

    @NotNull
    @Length(min = 11, max = 11, message = "Número inválido")
    private String numero;

    @ManyToOne
    @JoinColumn(nullable = false, name = "Fk_Usuario")
    private Usuario fkUsuario;

    public Telefone() {
    }


    public Telefone(Integer idTelefone, @NotNull @Length(min = 11, max = 11, message = "Número inválido") String numero, Usuario fkUsuario) {
        IdTelefone = idTelefone;
        this.numero = numero;
        this.fkUsuario = fkUsuario;
    }


    public Integer getIdTelefone() {
        return IdTelefone;
    }

    public void setIdTelefone(Integer idTelefone) {
        IdTelefone = idTelefone;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public Usuario getFkUsuario() {
        return fkUsuario;
    }

    public void setFkUsuario(Usuario fkUsuario) {
        this.fkUsuario = fkUsuario;
    }
}
