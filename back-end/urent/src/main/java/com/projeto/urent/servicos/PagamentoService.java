package com.projeto.urent.servicos;

import com.projeto.urent.FilaObj;
import com.projeto.urent.dominios.RequisicaoPagamento;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
public class PagamentoService {

    private Map<UUID, Integer> resultados = new HashMap<>();

    FilaObj<RequisicaoPagamento> requisicoes = new FilaObj<>(20);

    public UUID verificarStatusCompra(Boolean statusCompra) {
        UUID identificador = UUID.randomUUID();

        requisicoes.insert(new RequisicaoPagamento(identificador, statusCompra));
        resultados.put(identificador, 0);

        return identificador;
    }

    public Integer buscarResultadoCompra(UUID identificador) {

        if (resultados.containsKey(identificador)) {
            if (resultados.get(identificador) == 0) {
                // Solicitacao nao foi concluida
                return 0;
            } else {
                // Solicitacao foi concluida
                if (resultados.get(identificador) == 1) {
                    resultados.remove(identificador);
                    return 1;
                }else{
                    resultados.remove(identificador);
                    return 2;
                }
            }
        } else {
            // caso o identificador sequer exista!
            return null;
        }
    }

    @Scheduled(fixedRate = 30_000)
    public void processarRequisicoes() {
        System.out.println("INICIANDO SCHEDULE");
        //Verifica se é vazia
        //Se não for, pega o tipo de auth e valida se está aceito ou nao
        //Coloca o aceite em uma lista de respostas

        if (resultados.isEmpty()) {
            System.out.println("-----------------Vish está vazio!!");
        } else {
            System.out.println("-----------------Existem requisicoes!!");

            RequisicaoPagamento requisicao = requisicoes.poll();
            Thread threadSorteio = new Thread() {
                @Override
                public void run() {

                    for (int i = 1; ; i++) {
                        if (!requisicao.getCompraStatus()) {
                            // atualizando a chave do "identificador" no Map
                            resultados.put(requisicao.getChave(), 10);
                            requisicao.setCompraStatus(false);
                            break;
                        } else {
                            resultados.put(requisicao.getChave(), 1);
                            requisicao.setCompraStatus(true);
                            break;
                        }
                    }
                }
            };threadSorteio.start(); // execução em paralelo
        }
    }

}
