INSERT INTO usuario
(id, nome, cpf, data_nasc, cnh, cep, email, senha, avaliacao)
VALUES
(null, 'Matheus Custódio', '56264585212', '2001-05-21', '25645895124', '07175060', 'matheus@gmail.com', '123456789', 5.0),
(null, 'Iago Luz', '89456245785', '1999-01-30', '84595456324', '26458962', 'iago@gmail.com', '987654321', 5.0),
(null, 'Vinivius Sobral', '56245953514', '2000-03-05', '54526125', '05626315', 'vinicius@gmail.com', '964523648', 3.0);

INSERT INTO usuario
(id, nome, cpf, data_nasc, cep, email, senha, avaliacao)
VALUES
(null, 'Marta Souza', '26459563245', '2001-11-05', '06524856', 'marta@gmail.com', '932645869', 4.0),
(null, 'Nikolly', '63245264523', '2001-08-20', '04526023', 'nikolly@gmail.com', '962453624', 5.0);

INSERT INTO tipo_veiculo
(id, tipo)
VALUES
(null, 'Carro'),
(null, 'Moto'),
(null, 'Caminhão');

INSERT INTO veiculo
(id, placa, tipo_veiculo_id, usuario_id)
VALUES
(null, '2654596', 1, 1),
(null, '9634526', 2, 2),
(null, '2536482', 3, 3);

INSERT INTO garagem
(id, cep, numero, latitude, longitude, avaliacao, usuario_id)
VALUES
(null, '0231256', '100', '123456', '654321', 5, 4),
(null, '0231425', '200', '987456', '541230', 3, 5);

INSERT INTO aluguel
(id, garagem_id, veiculo_id, data_inicio, data_final)
VALUES
(null, 1, 1, '2020-10-21', '2020-10-22'),
(null, 2, 3, '2020-09-20', '2020-09-21');

insert into anuncio
(id, titulo, valor_diaria, garagem_id, fk_tipo_veiculo)
values
(null, 'Vaga Boa', 20, 1, 3),
(null, 'Vaga para Caminhão', 25, 2, 3),
(null, 'Vaga para carro', 15, 2, 1);