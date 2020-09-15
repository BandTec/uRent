package com.projeto.urent.model;

public abstract class Usuario {

    private String nome;
    private String cpf;
    private String email;
    private String senha;
    private String cep;
    private int avaliacao;

    public Usuario(String nome, String cpf, String email, String senha, String cep, int avaliacao) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
        this.cep = cep;
        this.avaliacao = avaliacao;
    }

    public abstract void realizarComentario(Locador locador, Locatario locatario, String mensagem);

    public String getNome() {
        return nome;
    }

    public String getEmail() {
        return email;
    }

    public String getSenha() {
        return senha;
    }

    public String getCpf() {
        return cpf;
    }

    public String getCep() {
        return cep;
    }

    public int getAvaliacao() {
        return avaliacao;
    }

    @Override
    public String toString() {
        return "Usuario{" +
                "nome='" + nome + '\'' +
                ", cpf='" + cpf + '\'' +
                ", cep='" + cep + '\'' +
                ", avaliacao=" + avaliacao +
                '}';
    }
}
