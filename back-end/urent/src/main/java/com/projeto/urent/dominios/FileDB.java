package com.projeto.urent.dominios;

import org.hibernate.annotations.Generated;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.context.annotation.Configuration;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Optional;

@Entity(name = "file_db")
@Table(name = "files")
public class FileDB {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;

    private String name;

    private String type;

    @Lob
    private byte[] data;

    @NotNull
    @Column(name = "fk_garagem")
    private Integer garagem;

    public FileDB() {
    }

    public FileDB(String id, String name, String type, byte[] data, @NotNull Integer garagem) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.data = data;
        this.garagem = garagem;
    }

    public FileDB(String name, String type, byte[] data, @NotNull Integer garagem) {
        this.name = name;
        this.type = type;
        this.data = data;
        this.garagem = garagem;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }

    public Integer getGaragem() {
        return garagem;
    }

    public void setGaragem(Integer garagem) {
        this.garagem = garagem;
    }
}
