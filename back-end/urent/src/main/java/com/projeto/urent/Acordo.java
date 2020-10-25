package com.projeto.urent;

import com.projeto.urent.dominios.Aluguel;

import java.util.ArrayList;
import java.util.List;

public class Acordo {

    public Aluguel aluguel;

    public Observer observer;

    public String adicionarAluguel(Aluguel novoAluguel) {
        this.aluguel = novoAluguel;
        return notificarObserver();
    }

    public void adicionaObserver(Observer o) {
        this.observer = o;
    }

    public String notificarObserver() {
        return observer.alertarAluguel(aluguel);
    }

    @Override
    public String toString() {
        return "" + aluguel;
    }
}
