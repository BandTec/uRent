package com.projeto.urent.visoes;

public class AnuncioSimplesAluguel {

    private Integer id;
    private Double valorDiaria;
    private String latitude;
    private String longitude;

    public AnuncioSimplesAluguel(Integer id, Double valorDiaria, String latitude, String longitude) {
        this.id = id;
        this.valorDiaria = valorDiaria;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Double getValorDiaria() {
        return valorDiaria;
    }

    public void setValorDiaria(Double valorDiaria) {
        this.valorDiaria = valorDiaria;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }
}
