package com.projeto.urent.visoes;

import java.time.LocalDate;

public class AluguelSimples {

    private LocalDate dataInicio;
    private LocalDate dataFinal;
    private String cep;
    private String numero;
    private String latitude;
    private String longitude;
    private String nome;
    private String email;
    private String cpf;
    private String placa;

    public AluguelSimples(LocalDate dataInicio, LocalDate dataFinal, String cep, String numero, String latitude, String longitude, String nome, String email, String cpf, String placa) {
        this.dataInicio = dataInicio;
        this.dataFinal = dataFinal;
        this.cep = cep;
        this.numero = numero;
        this.latitude = latitude;
        this.longitude = longitude;
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.placa = placa;
    }

    public LocalDate getDataInicio() {
        return dataInicio;
    }

    public LocalDate getDataFinal() {
        return dataFinal;
    }

    public String getCep() {
        return cep;
    }

    public String getNumero() {
        return numero;
    }

    public String getLatitude() {
        return latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public String getNome() {
        return nome;
    }

    public String getEmail() {
        return email;
    }

    public String getCpf() {
        return cpf;
    }

    public String getPlaca() {
        return placa;
    }
}
