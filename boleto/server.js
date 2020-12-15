const express = require('express');
const bodyParser = require('body-parser');
var fs = require('fs');

const cors = require('cors');
const { Bancos, Boletos, streamToPromise } = require('gerar-boletos');

const server = express();
server.use(cors());

server.use(express.json());

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.post('/pagar', (req, res) => {

    let { boletoPagar } = req.body;

    try {
        const boleto = {
            banco: new Bancos.Bradesco(),
            pagador: {
                nome: boletoPagar.pagador.nome,
                RegistroNacional: boletoPagar.pagador.RegistroNacional,
                endereco: {
                    logradouro: boletoPagar.pagador.endereco.logradouro,
                    bairro: boletoPagar.pagador.endereco.bairro,
                    cidade: boletoPagar.pagador.endereco.cidade,
                    estadoUF: boletoPagar.pagador.endereco.estadoUF,
                    cep: boletoPagar.pagador.endereco.cep
                }
            },
            instrucoes: [boletoPagar.instrucoes],
            beneficiario: {
                nome: boletoPagar.beneficiario.nome,
                cnpj: boletoPagar.beneficiario.cnpj,
                dadosBancarios: {
                    carteira: '09',
                    agencia: '0101',
                    agenciaDigito: '5',
                    conta: '0326446',
                    contaDigito: '0',
                    nossoNumero: '00000000061',
                    nossoNumeroDigito: '8'
                },
                endereco: {
                    logradouro: boletoPagar.beneficiario.endereco.logradouro,
                    bairro: boletoPagar.beneficiario.endereco.bairro,
                    cidade: boletoPagar.beneficiario.endereco.cidade,
                    estadoUF: boletoPagar.beneficiario.endereco.estadoUF,
                    cep: boletoPagar.beneficiario.endereco.cep
                }
            },
            boleto: {
                numeroDocumento: '1001',
                especieDocumento: 'DM',
                valor: boletoPagar.boleto.valor,
                datas: {
                    vencimento: '05-12-2020',
                    processamento: '05-12-2019',
                    documentos: '05-12-2019'
                }
            }
        };

        const novoBoleto = new Boletos(boleto);
        novoBoleto.gerarBoleto();

        novoBoleto.pdfFile().then(async ({ stream }) => {
            await streamToPromise(stream);
        }).catch((error) => {
            return error;
        });

        // RETORNAR O ARQUIVO GERADO
        res.status(200).json({ sucess: 'Gerado com sucesso' })

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error })
    }
})

server.get('/dowload', (req, res) => {
    res.download('./boleto.pdf');
})

server.listen(2000, () => console.log('Servidor rodando na porta 2000'));
