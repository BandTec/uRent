package com.projeto.urent;

import com.projeto.urent.dominios.Aluguel;

import java.util.List;

public class Alertar implements Observer {

    public Alertar() {
    }

    @Override
    public String alertarAluguel(Aluguel aluguel) {
            System.out.println("ALUGUEL REALIZADO!!!");
            return "Aluguel agendado para dia: " + aluguel.getDataInicio() + " - " + aluguel.getDataFinal();
    }
}
