package com.projeto.urent.dominios;

import javax.persistence.*;
import javax.validation.constraints.Future;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Entity
public class Aluguel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull
    @ManyToOne
    private Garagem garagem;

    @NotNull
    @ManyToOne
    private Veiculo veiculo;

    @NotNull
    @Future
    @Column(name = "data_inicio", nullable = false)
    private LocalDate dataInicio;

    @NotNull
    @Future
    @Column(name = "data_final", nullable = false)
    private LocalDate dataFinal;

    public Aluguel() {
    }

    public Aluguel(Integer id, Garagem garagem, Veiculo veiculo, LocalDate dataInicio, LocalDate dataFinal) {
        this.id = id;
        this.garagem = garagem;
        this.veiculo = veiculo;
        this.dataInicio = dataInicio;
        this.dataFinal = dataFinal;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Garagem getGaragem() {
        return garagem;
    }

    public void setGaragem(Garagem garagem) {
        this.garagem = garagem;
    }

    public Veiculo getVeiculo() {
        return veiculo;
    }

    public void setVeiculo(Veiculo veiculo) {
        this.veiculo = veiculo;
    }

    public LocalDate getDataInicio() {
        return dataInicio;
    }

    public void setDataInicio(LocalDate dataInicio) {
        this.dataInicio = dataInicio;
    }

    public LocalDate getDataFinal() {
        return dataFinal;
    }

    public void setDataFinal(LocalDate dataFinal) {
        this.dataFinal = dataFinal;
    }
}
