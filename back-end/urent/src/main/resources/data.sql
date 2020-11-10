INSERT INTO usuario
(nome, cpf, data_nasc, cnh, cep, email, senha, avaliacao)
VALUES
('Iago Luz', '894.562.457-85', '1999-01-30', '845.954.563-24', '26458-962', 'iago@gmail.com', '987654321', 5.0),
('Vinivius Sobral', '562.459.535-14', '2000-03-05', '545.261.255-25', '05626-315', 'vinicius@gmail.com', '964523648', 3.0);

INSERT INTO usuario
(nome, cpf, data_nasc, cep, email, senha, avaliacao)
VALUES
('Marta Souza', '264.595.632-45', '2001-11-05', '06524-856', 'marta@gmail.com', '932645869', 4.0),
('Nikolly', '632.452.645-23', '2001-08-20', '04526-023', 'nikolly@gmail.com', '962453624', 5.0);

INSERT INTO tipo_veiculo
(tipo)
VALUES
('Carro'),
('Moto'),
('Caminhão');

INSERT INTO veiculo
(placa, tipo_veiculo_id, usuario_id)
VALUES
('2654596', 1, 1),
('9634526', 2, 2),
('2536482', 3, 3);

INSERT INTO garagem
(cep, numero, latitude, longitude, avaliacao, usuario_id)
VALUES
('0231-256', '100', '123456', '654321', 5, 4),
('0231-425', '200', '987456', '541230', 3, 5);

INSERT INTO aluguel
(garagem_id, veiculo_id, data_inicio, data_final)
VALUES
(1, 1, '2020-10-21', '2020-10-22'),
(2, 3, '2020-09-20', '2020-09-21');

insert into anuncio
(titulo, valor_diaria, garagem_id, fk_tipo_veiculo)
values
('Vaga Boa', 20, 1, 3),
('Vaga para Caminhão', 25, 2, 3),
('Vaga para carro', 25, 2, 1);