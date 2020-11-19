package com.projeto.urent.visoes;

public class AnuncioSimplesAluguel {

    private Double valorDiaria;
    private String latitude;
    private String longitude;

    public AnuncioSimplesAluguel(Double valorDiaria, String latitude, String longitude) {
        this.valorDiaria = valorDiaria;
        this.latitude = latitude;
        this.longitude = longitude;
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
