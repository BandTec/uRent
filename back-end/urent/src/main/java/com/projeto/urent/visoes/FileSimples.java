package com.projeto.urent.visoes;

import com.projeto.urent.message.ResponseFile;

public class FileSimples {

    private String fileUri;
    private Integer idGaragem;

    public FileSimples(String fileUri, Integer idGaragem) {
        this.fileUri = fileUri;
        this.idGaragem = idGaragem;
    }


    public String getFileUri() {
        return fileUri;
    }

    public void setFileUri(String fileUri) {
        this.fileUri = fileUri;
    }

    public Integer getIdGaragem() {
        return idGaragem;
    }

    public void setIdGaragem(Integer idGaragem) {
        this.idGaragem = idGaragem;
    }
}
