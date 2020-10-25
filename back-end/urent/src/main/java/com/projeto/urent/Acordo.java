package com.projeto.urent;

import java.util.ArrayList;
import java.util.List;

public class Lista {

    public List<Aluguel> aluguel = new ArrayList<>();

    public Observer observer;

    public void adicionarAluguel(Aluguel novoAluguel) {
        this.aluguel.add(novoAluguel);
        notificarObserver();
    }

    public void removeAluguel(Aluguel aluguel) {
        this.aluguel.remove(aluguel);
    }

    public void adicionaObserver(Observer o) {
        this.observer = o;
    }

    public void notificarObserver() {
        observer.alertarAluguel(aluguel);
    }

    @Override
    public String toString() {
        return "" + aluguel;
    }
}
