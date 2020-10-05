package com.projeto.urent.dominios;

import javax.persistence.*;

@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, length = 45)
    private String nome;

    @Column(nullable = false, length = 11, unique = true)
    private String cpf;

    @Column(name = "data_nasc", nullable = false)
    private String dataNasc;

    @Column(length = 11)
    private String cnh;

    @Column(nullable = false, length = 8)
    private String cep;

    @Column(nullable = false, length = 100, unique = true)
    private String email;

    @Column(nullable = false, length = 25, unique = true)
    private String senha;

    private Double avaliacao;

    public Usuario() {
    }

    public Usuario(Integer id, String nome, String cpf, String dataNasc, String cnh, String cep, String email, String senha, Double avaliacao) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNasc = dataNasc;
        this.cnh = cnh;
        this.cep = cep;
        this.email = email;
        this.senha = senha;
        this.avaliacao = avaliacao;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getDataNasc() {
        return dataNasc;
    }

    public void setDataNasc(String dataNasc) {
        this.dataNasc = dataNasc;
    }

    public String getCnh() {
        return cnh;
    }

    public void setCnh(String cnh) {
        this.cnh = cnh;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public Double getAvaliacao() {
        return avaliacao;
    }

    public void setAvaliacao(Double avaliacao) {
        this.avaliacao = avaliacao;
    }
}
