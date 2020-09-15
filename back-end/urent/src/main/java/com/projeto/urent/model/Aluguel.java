package com.projeto.urent.model;

public class Aluguel {

    int data;
    Veiculo veiculo;
    Garagem garagem;

    public Aluguel(int data, Veiculo veiculo, Garagem garagem) {
        this.data = data;
        this.veiculo = veiculo;
        this.garagem = garagem;
    }

    public int getData() {
        return data;
    }

    public Veiculo getVeiculo() {
        return veiculo;
    }

    public Garagem getGaragem() {
        return garagem;
    }

    @Override
    public String toString() {
        return "Aluguel{" +
                "data=" + data +
                ", veiculo=" + veiculo +
                ", garagem=" + garagem +
                '}';
    }
}
