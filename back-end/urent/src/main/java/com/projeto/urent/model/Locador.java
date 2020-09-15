package com.projeto.urent.model;

import java.util.ArrayList;
import java.util.List;

public class Locador extends Usuario{

    private List<Garagem> garagemList;

    public Locador(String nome, String cpf, String email, String senha, String cep, int avaliacao) {
        super(nome, cpf, email, senha, cep, avaliacao);
        this.garagemList = new ArrayList<Garagem>();
    }

    public void anunciarGaragem(Garagem garagem) {
        garagemList.add(garagem);
    }

    public void listarGaragens() {
        System.out.println(garagemList);
    }

    @Override
    public void realizarComentario(Locador locador, Locatario locatario, String mensagem) {
        System.out.println(String.format("Eu %s acredito que o usuário %s foi %s", locador.getNome(), locatario.getNome(), mensagem));
    }



    @Override
    public String toString() {
        return "Locador{\n" +
                super.toString() +
                "\nGaragens: " + garagemList +
                "}";
    }
}
