package com.projeto.urent.model;

public class Garagem {

    private String cep;
    private String numero;
    private double diaria;
    private int avaliacao;

    public Garagem(String cep, String numero, double diaria, int avaliacao) {
        this.cep = cep;
        this.numero = numero;
        this.diaria = diaria;
        this.avaliacao = avaliacao;
    }

    public double getDiaria() {
        return diaria;
    }

    public String getCep() {
        return cep;
    }

    public String getNumero() {
        return numero;
    }

    public int getAvaliacao() {
        return avaliacao;
    }

    @Override
    public String toString() {
        return "Garagem{" +
                "cep='" + cep + '\'' +
                ", numero='" + numero + '\'' +
                ", diaria=" + diaria +
                ", avaliacao=" + avaliacao +
                '}';
    }
}
