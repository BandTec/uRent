package com.projeto.urent.visoes;

public class AnuncioSimplesFeed {

    private Integer id;
    private String titulo;
    private Double valorDiaria;
    private String tipo;
    private Integer idGaragem;
    private String cep;
    private String numero;
    private Double avaliacao;

    public AnuncioSimplesFeed(Integer id, String titulo, Double valorDiaria, String tipo, Integer idGaragem, String cep, String numero, Double avaliacao) {
        this.id = id;
        this.titulo = titulo;
        this.valorDiaria = valorDiaria;
        this.tipo = tipo;
        this.idGaragem = idGaragem;
        this.cep = cep;
        this.numero = numero;
        this.avaliacao = avaliacao;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public Double getValorDiaria() {
        return valorDiaria;
    }

    public void setValorDiaria(Double valorDiaria) {
        this.valorDiaria = valorDiaria;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Integer getIdGaragem() {
        return idGaragem;
    }

    public void setIdGaragem(Integer idGaragem) {
        this.idGaragem = idGaragem;
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

    public Double getAvaliacao() {
        return avaliacao;
    }

    public void setAvaliacao(Double avaliacao) {
        this.avaliacao = avaliacao;
    }
}
