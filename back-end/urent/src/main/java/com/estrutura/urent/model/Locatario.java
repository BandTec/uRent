package com.estrutura.urent.model;

import java.util.ArrayList;
import java.util.List;

public class Locatario extends Usuario {

    String cnh;
    List<Veiculo> veiculoList;

    public Locatario(String nome, String cpf, String email, String senha, String cep, int avaliacao, String cnh) {
        super(nome, cpf, email, senha, cep, avaliacao);
        this.cnh = cnh;
        this.veiculoList = new ArrayList<Veiculo>();
    }

    public void cadastrarVeiculo(Veiculo veiculo) {
        veiculoList.add(veiculo);
    }

    public void listarVeiculos() {
        System.out.println(veiculoList);
    }

    @Override
    public void realizarComentario(Locador locador, Locatario locatario, String mensagem) {
        System.out.println(String.format("Eu %s acredito que o usuário %s foi %s", locatario.getNome(), locador.getNome(), mensagem));
    }

    public double simularAluguel(Garagem garagem, int qtdeDia) {
        return garagem.getDiaria() * qtdeDia;
    }

    public String getCnh() {
        return cnh;
    }

    @Override
    public String toString() {
        return "Locatario{" +
                "cnh='" + cnh + '\'' +
                ", veiculoList=" + veiculoList +
                '}';
    }
}
