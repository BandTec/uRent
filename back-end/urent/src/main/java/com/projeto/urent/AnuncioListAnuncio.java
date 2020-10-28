package com.projeto.urent;

import java.util.List;

public class AnuncioListAnuncio implements ListAnuncio<com.projeto.urent.dominios.Anuncio> {

    private List<com.projeto.urent.dominios.Anuncio> anuncios;

    public AnuncioListAnuncio(List<com.projeto.urent.dominios.Anuncio> anuncios) {
        this.anuncios = anuncios;
    }

    @Override
    public Iterator<com.projeto.urent.dominios.Anuncio> iterator() {
        return new AnuncioIterator(anuncios);
    }
}
