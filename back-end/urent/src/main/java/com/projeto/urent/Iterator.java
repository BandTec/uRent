package com.projeto.urent;

public interface Iterator<E> {

    E next();

    E currentItem();

    Boolean hasNext();
}
