INSERT INTO usuario
(id, nome, cpf, data_nasc, cnh, cep, email, senha, avaliacao)
VALUES
(null, 'Matheus Custódio', '562.645.852-12', '2001-05-21', '256.458.951-24', '07175-060', 'matheus@gmail.com', '123456789', 5.0),
(null, 'Iago Luz', '894.562.457-85', '1999-01-30', '845.954.563-24', '26458-962', 'iago@gmail.com', '987654321', 5.0),
(null, 'Vinicius Sobral', '562.459.535-14', '2000-03-05', '545.261.250-89', '05626-315', 'vinicius@gmail.com', '964523648', 3.0);

INSERT INTO usuario
(id, nome, cpf, data_nasc, cep, email, senha, avaliacao)
VALUES
(null, 'Marta Souza', '264.595.632-45', '2001-11-05', '65248-450', 'marta@gmail.com', '932645869', 4.0),
(null, 'Nikolly', '632.452.645-23', '2001-08-20', '05260-234', 'nikolly@gmail.com', '962453624', 5.0);

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
(null, '0231-256', '100', '123456', '654321', 5, 4),
(null, '0231-425', '200', '987456', '541230', 3, 5);

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
(null, 'Vaga para carro', 25, 2, 1);