package com.estrutura.urent.model;

public class Veiculo {

    private String placa;
    private String tipo;

    public Veiculo(String placa, String tipo) {
        this.placa = placa;
        this.tipo = tipo;
    }

    public String getPlaca() {
        return placa;
    }

    public String getTipo() {
        return tipo;
    }

    @Override
    public String toString() {
        return "Veiculo{" +
                "placa='" + placa + '\'' +
                ", tipo='" + tipo + '\'' +
                '}';
    }
}
