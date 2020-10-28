package com.projeto.urent.dominios;

import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import java.time.LocalDate;

@Table
@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull(message = "É necessário preencher o nome do usuário")
    @Length(min = 3, max = 45, message = "Nome inválido")
    @Column(nullable = false, length = 45)
    private String nome;

    @NotNull(message = "É necessário preencher o CPF")
    @Length(min = 11, max = 11)
    @Column(nullable = false, length = 11, unique = true)
    private String cpf;

    @NotNull(message = "É necessário informar a data de nascimento")
    @Past
    @Column(name = "data_nasc", nullable = false)
    private LocalDate dataNasc;

    @Length(min = 11, max = 11)
    @Column(length = 11)
    private String cnh;

    @NotNull(message = "É necessário informar o seu CEP")
    @Length(min = 8, max = 8)
    @Column(nullable = false, length = 8)
    private String cep;

    @NotNull(message = "É necessário informar seu e-mail de contato")
    @Length(min = 5, max = 100)
    @Column(nullable = false, length = 100, unique = true)
    private String email;

    @NotNull(message = "É necessário informar sua senha")
    @Length(min = 8, max = 25)
    @Column(nullable = false, length = 25, unique = true)
    private String senha;

    //@Length(max = 5)
    private Double avaliacao;

    public Usuario() {
    }

    public Usuario(Integer id, String nome, String cpf, LocalDate dataNasc, String cnh, String cep, String email, String senha, Double avaliacao) {
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

    public LocalDate getDataNasc() {
        return dataNasc;
    }

    public void setDataNasc(LocalDate dataNasc) {
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

    @Override
    public String toString() {
        return "Usuario{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", cpf='" + cpf + '\'' +
                ", dataNasc=" + dataNasc +
                ", cnh='" + cnh + '\'' +
                ", cep='" + cep + '\'' +
                ", email='" + email + '\'' +
                ", senha='" + senha + '\'' +
                ", avaliacao=" + avaliacao +
                '}';
    }
}
