package com.projeto.urent;

import java.util.List;

public class AnuncioIterator implements Iterator<com.projeto.urent.dominios.Anuncio> {

    private List<com.projeto.urent.dominios.Anuncio> anuncios;
    private int posicao;

    public AnuncioIterator(List<com.projeto.urent.dominios.Anuncio> anuncios) {
        this.anuncios = anuncios;
        posicao = 0;
    }

    @Override
    public com.projeto.urent.dominios.Anuncio next() {
        return anuncios.get(posicao++);
    }

    @Override
    public com.projeto.urent.dominios.Anuncio currentItem() {
        return anuncios.get(posicao);
    }

    @Override
    public Boolean hasNext() {
        if(posicao >= anuncios.size()) {
            return false;
        }
        return true;
    }
}
