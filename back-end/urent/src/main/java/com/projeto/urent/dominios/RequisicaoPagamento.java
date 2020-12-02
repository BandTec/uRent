package com.projeto.urent.dominios;

import java.util.UUID;

public class RequisicaoPagamento {
    private UUID chave;
    private Boolean compraStatus;

    public RequisicaoPagamento(UUID chave, Boolean compraStatus) {
        this.chave = chave;
        this.compraStatus = compraStatus;
    }

    public UUID getChave() {
        return chave;
    }

    public void setChave(UUID chave) {
        this.chave = chave;
    }

    public Boolean getCompraStatus() {
        return compraStatus;
    }

    public void setCompraStatus(Boolean compraStatus) {
        this.compraStatus = compraStatus;
    }
}
