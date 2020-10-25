package com.projeto.urent;

import com.projeto.urent.dominios.Usuario;
import com.projeto.urent.visoes.AluguelSimples;

import java.io.*;
import java.text.SimpleDateFormat;
import java.util.*;

public class ListaObj<T> {

    private T[] vetor;
    private int nroElem;

    public ListaObj(int tam) {
        vetor = (T[]) new Object[tam];
        this.nroElem = 0;
    }

    public boolean adiciona(T valor) {
        if(nroElem >= vetor.length) {
            System.out.println("A lista está cheia");
            return false;
        } else {
            vetor[nroElem++] = valor;
            return true;
        }
    }

    public void exibe() {
        System.out.println("\nExibindo elementos da lista:");
        for (int i=0; i< nroElem; i++) {
            System.out.println(vetor[i]);
        }
        System.out.println();
    }

    public int busca(T valor) {
        for (int i=0; i < nroElem; i++) {
            if (vetor[i].equals(valor)) {
                return i;
            }
        }
        return -1;
    }

    public boolean removePeloIndice(int indice) {
        if (indice < 0 || indice >= nroElem) {
            return false;
        }
        else {
            for (int i=indice; i < nroElem-1; i++) {
                vetor[i] = vetor[i+1];
            }
            nroElem--;
            return true;
        }
    }

    public boolean removeElemento(T valor) {
        return removePeloIndice(busca(valor));
    }

    public int getTamanho() {
        return nroElem;
    }

    public T getElemento(int indice) {
        if (indice < 0 || indice >= nroElem) {  // se índice for inválido
            return null;                       // retorna false
        }
        else {
            return vetor[indice];
        }
    }

    public void limpa() {
        nroElem = 0;
    }

    public void gravaListaUsuario(ListaObj<Usuario> listaObj, String nomeArquivo) {

        FileWriter arq = null;              //  FileWriter representa o arquivo
        Formatter saida = null;             //  Fomatter para executar a saída formatada
        boolean erro = false;               //  indica se deu erro

        try {
            arq = new FileWriter("src/main/resources/static/" + nomeArquivo, false);        // Com o append iremos indicar para ele apenas adicionar mais registros
            saida = new Formatter(arq);                             // Vamos usar o Formatter para formatar a saída do arquivo
        }
        catch (IOException e) {
            System.err.println("Erro ao abrir arquivo");           // Antes de gravar no arquivo, ele será aberto, caso não consiga irá cair neste erro
            System.exit(1);
        }

        try {
            saida.format("%s,%s,%s,%s,%s,%s,%s,%s,%s\n", "ID", "NOME", "CPF", "DATA_NASCIMENTO", "CNH", "CEP", "EMAIL", "SENHA", "AVALIACAO");
            for (int i = 0; i < listaObj.getTamanho(); i++) {
                Usuario u = listaObj.getElemento(i);

                saida.format(
                        "%d;%s;%s;%s;%s;%s;%s;%s;%.2f\n",
                        u.getId(), u.getNome(), u.getCpf(), u.getDataNasc(), u.getCnh(), u.getCep(), u.getEmail(), u.getSenha(), u.getAvaliacao());
            }
        }
        catch (FormatterClosedException e) {
            System.err.println("Erro ao gravar no arquivo");
            erro = true;
        }
        finally {
            saida.close();
            try {
                arq.close();
            }
            catch (IOException e) {
                System.err.println("Erro ao fechar o arquivo");
                erro = true;
            }
            if (erro) {
                System.exit(1);
            }
        }
    }

    public void gravaListaAluguel(ListaObj<AluguelSimples> listaObj, String nomeArquivo) {

        FileWriter arq = null;              //  FileWriter representa o arquivo
        Formatter saida = null;             //  Fomatter para executar a saída formatada
        boolean erro = false;               //  indica se deu erro

        try {
            arq = new FileWriter("src/main/resources/static/" + nomeArquivo, false);        // Com o append iremos indicar para ele apenas adicionar mais registros
            saida = new Formatter(arq);                             // Vamos usar o Formatter para formatar a saída do arquivo
        }
        catch (IOException e) {
            System.err.println("Erro ao abrir arquivo");           // Antes de gravar no arquivo, ele será aberto, caso não consiga irá cair neste erro
            System.exit(1);
        }

        try {
            saida.format("%s,%s,%s,%s,%s,%s,%s,%s,%s,%s\n", "DATA_INICIO", "DATA_FINAL", "CEP", "NUMERO", "LATITUDE", "LONGITUDE", "NOME", "EMAIL", "CPF", "PLACA");
            for (int i = 0; i < listaObj.getTamanho(); i++) {
                AluguelSimples u = listaObj.getElemento(i);

                saida.format(
                        "%s;%s;%s;%s;%s;%s;%s;%s;%s\n",
                        u.getDataInicio(), u.getDataFinal(), u.getCep(), u.getNumero(), u.getLatitude(), u.getLongitude(), u.getNome(), u.getEmail(), u.getPlaca());
            }
        }
        catch (FormatterClosedException e) {
            System.err.println("Erro ao gravar no arquivo");
            erro = true;
        }
        finally {
            saida.close();
            try {
                arq.close();
            }
            catch (IOException e) {
                System.err.println("Erro ao fechar o arquivo");
                erro = true;
            }
            if (erro) {
                System.exit(1);
            }
        }
    }

    public void lerExibeArquivo(String nomeArquivo) {
        FileReader arq = null;
        Scanner entrada = null;
        boolean erro = false;

        // Abre o arquivo para leitura
        try {
            arq = new FileReader(nomeArquivo);
            entrada = new Scanner(arq).useDelimiter(";|\\r\\n");
        } catch (FileNotFoundException e) {
            System.err.println("Arquivo não encontrado");
            System.exit(1);
        }

        try {
            System.out.printf("%-6s%-10s%-14s%-16s%-18s\n", "ID", "NOME", "CPF", "DATA NASCIMENTO", "CNH", "CEP", "EMAIL", "SENHA", "AVALIAÇÃO");

            while (entrada.hasNext()) {
                Integer id = entrada.nextInt();
                String nome = entrada.next();
                String cpf = entrada.next();
                String data = entrada.next();
                String cnh = entrada.next();
                String cep = entrada.next();
                String email = entrada.next();
                String senha = entrada.next();
                Double avaliacao = entrada.nextDouble();
                System.out.printf("%-6d%-10s%-14s%-16s%-17s%-18s%-20s%-21s%-22.2f\n", id, nome, cpf, data, cnh, cep, email, senha, avaliacao);
            }
        } catch (NoSuchElementException e) {
            System.err.println("Arquivo com problema");
            erro = true;
        } catch (IllegalStateException e) {
            System.err.println("Erro na leitura do arquivo");
            erro = true;
        } finally {
            entrada.close();
            try {
                arq.close();
            } catch (IOException e) {
                System.err.println("Erro ao fechar arquivo");
                erro = true;

                if (erro) {
                    System.exit(1);
                }
            }
        }
    }

    public void gravaRegistroText (String nomeArq, String registro) {
        BufferedWriter saida = null;
        try {
            // o argumento true é para indicar que o arquivo não será sobrescrito e sim
            // gravado com append (no final do arquivo)
            saida = new BufferedWriter(new FileWriter("src/main/resources/static/" + nomeArq, true));
        } catch (IOException e) {
            System.err.printf("Erro na abertura do arquivo: %s.\n", e.getMessage());
        }

        try {
            saida.append(registro + "\n");
            saida.close();

        } catch (IOException e) {
            System.err.printf("Erro ao gravar arquivo: %s.\n", e.getMessage());
        }
    }

    public void arquivoDeLayoutUsuario(String nomeArquivo, ListaObj<Usuario> listaObj) {
        String header = "";
        String corpo = "";
        String trailer = "";
        int contRegDados = 0;

        // Montagem do header
        Date date = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");

        Date ano = new Date();
        Date mes = new Date();
        Integer semestre = 0;

        if(mes.getMonth() >= 7) {
            semestre = 2;
        } else {
            semestre = 1;
        }

        header += "00USUARIO2020"+semestre;
        header += formatter.format(date);
        header += "01";

        // Grava o registro no header
        gravaRegistroText(nomeArquivo, header);

        // Montagem do corpo

        for(int i = 0; i < listaObj.getTamanho(); i++) {

            Usuario u = listaObj.getElemento(i);

            if(i == 0) {
                corpo += "02";
                corpo += String.format("%-2d", u.getId());
                corpo += String.format("%-45s", u.getNome());
                corpo += String.format("%-11s", u.getCpf());
                corpo += String.format("%-100s", u.getEmail());

                contRegDados++;
                gravaRegistroText(nomeArquivo, corpo);
            } else {
                corpo = "02";
                corpo += String.format("%-2d", u.getId());
                corpo += String.format("%-45s", u.getNome());
                corpo += String.format("%-11s", u.getCpf());
                corpo += String.format("%-100s", u.getEmail());

                contRegDados++;
                gravaRegistroText(nomeArquivo, corpo);
            }
        }

        // Montagem do trailer
        trailer += "01";
        trailer += String.format("%010d", contRegDados);
        gravaRegistroText(nomeArquivo, trailer);
    }

    public void arquivoDeLayoutAluguel(String nomeArquivo, ListaObj<AluguelSimples> listaObj) {
        String header = "";
        String corpo = "";
        String trailer = "";
        int contRegDados = 0;

        // Montagem do header
        Date date = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");

        Date ano = new Date();
        Date mes = new Date();
        Integer semestre = 0;

        if(mes.getMonth() >= 7) {
            semestre = 2;
        } else {
            semestre = 1;
        }

        header += "00ALUGUEL2020"+semestre;
        header += formatter.format(date);
        header += "01";

        // Grava o registro no header
        gravaRegistroText(nomeArquivo, header);

        // Montagem do corpo

        for(int i = 0; i < listaObj.getTamanho(); i++) {

            AluguelSimples a = listaObj.getElemento(i);

            if(i == 0) {
                corpo += "02";
                corpo += String.format("%-10s", a.getDataInicio());
                corpo += String.format("%-10s", a.getDataFinal());
                corpo += String.format("%-11s", a.getCep());
                corpo += String.format("%-5s", a.getNumero());
                corpo += String.format("%-10s", a.getLatitude());
                corpo += String.format("%-10s", a.getLongitude());
                corpo += String.format("%-10s", a.getNome());
                corpo += String.format("%-10s", a.getEmail());
                corpo += String.format("%-10s", a.getPlaca());
                contRegDados++;
                gravaRegistroText(nomeArquivo, corpo);
            } else {
                corpo = "02";
                corpo += String.format("%-10s", a.getDataInicio());
                corpo += String.format("%-10s", a.getDataFinal());
                corpo += String.format("%-11s", a.getCep());
                corpo += String.format("%-5s", a.getNumero());
                corpo += String.format("%-10s", a.getLatitude());
                corpo += String.format("%-10s", a.getLongitude());
                corpo += String.format("%-10s", a.getNome());
                corpo += String.format("%-10s", a.getEmail());
                corpo += String.format("%-10s", a.getPlaca());

                contRegDados++;
                gravaRegistroText(nomeArquivo, corpo);
            }
        }

        // Montagem do trailer
        trailer += "01";
        trailer += String.format("%010d", contRegDados);
        gravaRegistroText(nomeArquivo, trailer);
    }

}