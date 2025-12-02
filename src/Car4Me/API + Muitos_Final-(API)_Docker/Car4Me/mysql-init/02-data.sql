-- ============================================
-- INSERÇÃO DE DADOS - CATEGORIAS (30)
-- ============================================
INSERT INTO categorias (nome, preco_dia) VALUES
('Elétrico', 55.00),
('Diesel', 45.00),
('Gasolina', 35.00),
('Híbrido', 50.00),
('GPL', 30.00);


-- ============================================
-- INSERÇÃO DE DADOS - CLIENTES (40)
-- ============================================
INSERT INTO clientes (nome, email, telefone, nif, morada) VALUES
('João Silva', 'joao.silva@email.com', '912345678', '123456789', 'Rua das Flores, 12, Porto'),
('Maria Santos', 'maria.santos@email.com', '934567890', '234567891', 'Avenida Central, 45, Lisboa'),
('Carlos Pereira', 'carlos.pereira@email.com', '916789012', '345678912', 'Travessa do Sol, 8, Braga'),
('Ana Costa', 'ana.costa@email.com', '925678901', '456789123', 'Rua Nova, 23, Coimbra'),
('Pedro Oliveira', 'pedro.oliveira@email.com', '913456789', '567891234', 'Praça da República, 5, Aveiro'),
('Sofia Rodrigues', 'sofia.rodrigues@email.com', '932123456', '678912345', 'Rua do Comércio, 67, Faro'),
('Miguel Ferreira', 'miguel.ferreira@email.com', '918765432', '789123456', 'Avenida da Liberdade, 100, Setúbal'),
('Beatriz Alves', 'beatriz.alves@email.com', '927654321', '891234567', 'Rua das Acácias, 34, Viseu'),
('Ricardo Gomes', 'ricardo.gomes@email.com', '914567890', '912345678', 'Largo do Município, 2, Évora'),
('Catarina Martins', 'catarina.martins@email.com', '936789012', '123456780', 'Rua da Paz, 56, Leiria'),
('Bruno Fernandes', 'bruno.fernandes@email.com', '919876543', '234567892', 'Avenida dos Aliados, 78, Guimarães'),
('Inês Sousa', 'ines.sousa@email.com', '928765432', '345678913', 'Rua do Porto, 90, Viana do Castelo'),
('Tiago Ribeiro', 'tiago.ribeiro@email.com', '915432109', '456789124', 'Praça do Comércio, 12, Bragança'),
('Mariana Carvalho', 'mariana.carvalho@email.com', '933210987', '567891235', 'Rua da Estação, 45, Castelo Branco'),
('André Lopes', 'andre.lopes@email.com', '917654321', '678912346', 'Avenida 25 de Abril, 23, Santarém'),
('Francisca Dias', 'francisca.dias@email.com', '926543210', '789123457', 'Rua Dom Pedro, 67, Portalegre'),
('Gonçalo Pinto', 'goncalo.pinto@email.com', '912098765', '891234568', 'Travessa da Saudade, 8, Vila Real'),
('Leonor Marques', 'leonor.marques@email.com', '935432109', '912345679', 'Rua do Relógio, 34, Beja'),
('Rui Tavares', 'rui.tavares@email.com', '918543210', '123456781', 'Avenida da República, 56, Funchal'),
('Teresa Cardoso', 'teresa.cardoso@email.com', '929876543', '234567893', 'Rua da Igreja, 78, Ponta Delgada'),
('Vasco Reis', 'vasco.reis@email.com', '916432109', '345678914', 'Largo Central, 90, Guarda'),
('Helena Neves', 'helena.neves@email.com', '931234567', '456789125', 'Rua das Oliveiras, 12, Lamego'),
('Diogo Correia', 'diogo.correia@email.com', '913210987', '567891236', 'Avenida Principal, 45, Chaves'),
('Marta Antunes', 'marta.antunes@email.com', '924567890', '678912347', 'Rua do Monte, 23, Torres Vedras'),
('Nuno Machado', 'nuno.machado@email.com', '917890123', '789123458', 'Praça da Independência, 67, Sintra'),
('Joana Monteiro', 'joana.monteiro@email.com', '938765432', '891234569', 'Rua do Castelo, 8, Cascais'),
('Fábio Teixeira', 'fabio.teixeira@email.com', '915678901', '912345670', 'Avenida Marginal, 34, Estoril'),
('Rita Moreira', 'rita.moreira@email.com', '926789012', '123456782', 'Rua da Praia, 56, Albufeira'),
('Hugo Barbosa', 'hugo.barbosa@email.com', '919012345', '234567894', 'Travessa do Mar, 78, Lagos'),
('Liliana Freitas', 'liliana.freitas@email.com', '932345678', '345678915', 'Rua dos Pescadores, 90, Olhão'),
('Daniel Rocha', 'daniel.rocha@email.com', '934112233', '456789126', 'Rua das Laranjeiras, 14, Porto'),
('Patrícia Amaral', 'patricia.amaral@email.com', '926554433', '567891237', 'Avenida do Atlântico, 120, Lisboa'),
('Rafael Figueiredo', 'rafael.figueiredo@email.com', '912667788', '678912348', 'Rua do Miradouro, 33, Braga'),
('Sara Monteiro', 'sara.monteiro@email.com', '933998877', '789123459', 'Travessa do Parque, 9, Coimbra'),
('Eduardo Matos', 'eduardo.matos@email.com', '918223344', '891234560', 'Rua da Liberdade, 76, Setúbal'),
('Inês Barros', 'ines.barros@email.com', '927334455', '912345671', 'Avenida do Mar, 42, Faro'),
('Tomás Correia', 'tomas.correia@email.com', '915889900', '123456783', 'Rua das Escolas, 3, Aveiro'),
('Carolina Fonseca', 'carolina.fonseca@email.com', '936221144', '234567895', 'Rua da Fonte, 27, Viseu'),
('Luís Azevedo', 'luis.azevedo@email.com', '918776655', '345678916', 'Avenida Europa, 88, Évora'),
('Margarida Henriques', 'margarida.henriques@email.com', '924443322', '456789127', 'Rua da Serra, 5, Leiria');


-- ============================================
-- INSERÇÃO DE DADOS - FUNCIONARIOS (40)
-- ============================================
INSERT INTO funcionarios (nome, email, cargo, telefone) VALUES
('Carlos Mendes', 'carlos.mendes@car4me.pt', 'Gestor de Frota', '913456789'),
('Ana Ribeiro', 'ana.ribeiro@car4me.pt', 'Atendimento', '932998877'),
('Paulo Costa', 'paulo.costa@car4me.pt', 'Mecânico', '918765432'),
('Sandra Lopes', 'sandra.lopes@car4me.pt', 'Atendimento', '927654321'),
('Fernando Silva', 'fernando.silva@car4me.pt', 'Supervisor', '914567890'),
('Cristina Almeida', 'cristina.almeida@car4me.pt', 'Vendas', '936789012'),
('José Santos', 'jose.santos@car4me.pt', 'Mecânico', '919876543'),
('Patrícia Fernandes', 'patricia.fernandes@car4me.pt', 'Atendimento', '928765432'),
('António Rodrigues', 'antonio.rodrigues@car4me.pt', 'Gestor Operacional', '915432109'),
('Mónica Pereira', 'monica.pereira@car4me.pt', 'Recursos Humanos', '933210987'),
('Manuel Ferreira', 'manuel.ferreira@car4me.pt', 'Mecânico', '917654321'),
('Isabel Martins', 'isabel.martins@car4me.pt', 'Vendas', '926543210'),
('Rui Gomes', 'rui.gomes@car4me.pt', 'Atendimento', '912098765'),
('Carla Sousa', 'carla.sousa@car4me.pt', 'Contabilidade', '935432109'),
('Jorge Pinto', 'jorge.pinto@car4me.pt', 'Mecânico', '918543210'),
('Vera Marques', 'vera.marques@car4me.pt', 'Atendimento', '929876543'),
('Luís Tavares', 'luis.tavares@car4me.pt', 'Supervisor', '916432109'),
('Susana Cardoso', 'susana.cardoso@car4me.pt', 'Vendas', '931234567'),
('Alberto Reis', 'alberto.reis@car4me.pt', 'Mecânico', '913210987'),
('Elizabete Neves', 'elizabete.neves@car4me.pt', 'Atendimento', '924567890'),
('Vitor Correia', 'vitor.correia@car4me.pt', 'Gestor de Frota', '917890123'),
('Paula Antunes', 'paula.antunes@car4me.pt', 'Recursos Humanos', '938765432'),
('Armando Machado', 'armando.machado@car4me.pt', 'Mecânico', '915678901'),
('Gabriela Monteiro', 'gabriela.monteiro@car4me.pt', 'Vendas', '926789012'),
('Joaquim Teixeira', 'joaquim.teixeira@car4me.pt', 'Atendimento', '919012345'),
('Rosa Moreira', 'rosa.moreira@car4me.pt', 'Contabilidade', '932345678'),
('Sérgio Barbosa', 'sergio.barbosa@car4me.pt', 'Mecânico', '911234567'),
('Teresa Freitas', 'teresa.freitas@car4me.pt', 'Supervisor', '923456789'),
('Daniel Cunha', 'daniel.cunha@car4me.pt', 'Atendimento', '914567891'),
('Amélia Ramos', 'amelia.ramos@car4me.pt', 'Vendas', '935678912'),
('Hélder Martins', 'helder.martins@car4me.pt', 'Atendimento', '936110220'),
('Raquel Sousa', 'raquel.sousa@car4me.pt', 'Vendas', '927220330'),
('Filipe Moreira', 'filipe.moreira@car4me.pt', 'Mecânico', '918330440'),
('Patrícia Luz', 'patricia.luz@car4me.pt', 'Supervisor', '932440550'),
('Bruno Nunes', 'bruno.nunes@car4me.pt', 'Gestor Operacional', '915550660'),
('Helena Faria', 'helena.faria@car4me.pt', 'Contabilidade', '934660770'),
('Tiago Marques', 'tiago.marques@car4me.pt', 'Mecânico', '917770880'),
('Carolina Cruz', 'carolina.cruz@car4me.pt', 'Recursos Humanos', '929880990'),
('Gustavo Almeida', 'gustavo.almeida@car4me.pt', 'Atendimento', '912990110'),
('Tânia Fonseca', 'tania.fonseca@car4me.pt', 'Vendas', '936001221');



INSERT INTO veiculos (marca, modelo, matricula, ano, cor, quilometragem, estado, id_categoria) VALUES
('Fiat', '500', 'AA-10-BB', 2022, 'Branco', 15000, 'Disponivel', 3),
('Renault', 'Clio', 'BB-20-CC', 2023, 'Vermelho', 8000, 'Disponivel', 3),
('Volkswagen', 'Golf', 'CC-30-DD', 2021, 'Preto', 25000, 'Disponivel', 3),
('Nissan', 'Qashqai', 'DD-40-EE', 2022, 'Azul', 18000, 'Alugado', 2),
('Toyota', 'RAV4', 'EE-50-FF', 2023, 'Prata', 12000, 'Disponivel', 4),
('BMW', 'Série 3', 'FF-60-GG', 2023, 'Cinzento', 5000, 'Disponivel', 2),
('Mercedes', 'Classe C', 'GG-70-HH', 2024, 'Branco', 3000, 'Disponivel', 2),
('Audi', 'A4', 'HH-80-II', 2023, 'Azul Escuro', 10000, 'Alugado', 2),
('Porsche', '911', 'II-90-JJ', 2023, 'Vermelho', 2000, 'Disponivel', 3),
('Volkswagen', 'Transporter', 'JJ-11-KK', 2022, 'Branco', 30000, 'Disponivel', 2),
('Ford', 'Transit', 'KK-22-LL', 2021, 'Branco', 45000, 'Disponivel', 2),
('Citroen', 'Berlingo', 'LL-33-MM', 2023, 'Cinzento', 12000, 'Disponivel', 2),
('Toyota', 'Hilux', 'MM-44-NN', 2022, 'Preto', 28000, 'Disponivel', 2),
('Mercedes', 'GLA', 'NN-55-OO', 2020, 'Prata', 35000, 'Manutencao', 3),
('Toyota', 'Model 3', 'OO-66-PP', 2023, 'Azul', 8000, 'Disponivel', 1),
('BMW', 'iX3', 'PP-77-QQ', 2023, 'Branco', 6000, 'Disponivel', 1),
('Toyota', 'Prius', 'QQ-88-RR', 2022, 'Prata', 22000, 'Disponivel', 4),
('BMW', 'Z4', 'RR-99-SS', 2023, 'Vermelho', 4000, 'Disponivel', 3),
('Renault', 'Scenic', 'SS-00-TT', 2022, 'Azul', 19000, 'Alugado', 2),
('Peugeot', '208', 'TT-12-UU', 2024, 'Branco', 2000, 'Disponivel', 3),
('Volkswagen', 'Passat', 'UU-23-VV', 2023, 'Preto', 15000, 'Disponivel', 2),
('Jeep', 'Wrangler', 'VV-34-WW', 2022, 'Verde', 20000, 'Disponivel', 3),
('Audi', 'A3', 'WW-45-XX', 2023, 'Cinzento', 9000, 'Disponivel', 3),
('Mercedes', 'Classe E', 'XX-56-YY', 2024, 'Preto', 1000, 'Disponivel', 2),
('Mercedes', 'Classe S', 'YY-67-ZZ', 2024, 'Branco', 500, 'Disponivel', 2),
('Audi', 'A5', 'ZZ-78-AA', 2023, 'Azul', 7000, 'Disponivel', 3),
('Volvo', 'V60', 'AB-89-BC', 2022, 'Prata', 24000, 'Disponivel', 2),
('Mazda', 'CX-5', 'BC-90-CD', 2023, 'Vermelho', 11000, 'Disponivel', 3),
('Ford', 'Galaxy', 'CD-01-DE', 2022, 'Azul', 26000, 'Manutencao', 2),
('Porsche', 'Huracan', 'DE-12-EF', 2023, 'Amarelo', 1200, 'Disponivel', 3),
('Fiat', 'Panda', 'EF-21-GH', 2023, 'Branco', 5000, 'Disponivel', 3),
('Renault', 'Megane', 'FG-32-HI', 2022, 'Preto', 18000, 'Disponivel', 2),
('Volkswagen', 'Tiguan', 'GH-43-IJ', 2023, 'Cinza', 9000, 'Disponivel', 3),
('Nissan', 'Leaf', 'HI-54-JK', 2024, 'Branco', 2000, 'Disponivel', 1),
('Toyota', 'Yaris Hybrid', 'IJ-65-KL', 2022, 'Vermelho', 15000, 'Disponivel', 4),
('BMW', 'Série 1', 'JK-76-LM', 2023, 'Azul', 7000, 'Disponivel', 3),
('Mercedes', 'CLA', 'KL-87-MN', 2024, 'Branco', 3000, 'Disponivel', 2),
('Audi', 'Q3', 'LM-98-NO', 2023, 'Cinza', 12000, 'Disponivel', 3),
('Porsche', 'Cayenne', 'MN-09-OP', 2023, 'Preto', 6000, 'Disponivel', 3),
('Mazda', 'Mazda 3', 'NO-10-PQ', 2023, 'Azul', 8000, 'Disponivel', 3);

INSERT INTO veiculos (marca, modelo, matricula, ano, cor, quilometragem, estado, id_categoria) VALUES
('Audi', 'A6', 'AA-31-AA', 2022, 'Preto', 23000, 'Manutencao', 3),
('BMW', 'X1', 'BB-32-BB', 2023, 'Branco', 12000, 'Manutencao', 3),
('Mercedes', 'GLC', 'CC-33-CC', 2024, 'Cinza', 8000, 'Manutencao', 3),
('Volkswagen', 'Polo', 'DD-34-DD', 2022, 'Vermelho', 15000, 'Manutencao', 3),
('Renault', 'Captur', 'EE-35-EE', 2023, 'Azul', 11000, 'Manutencao', 3),
('Peugeot', '3008', 'FF-36-FF', 2022, 'Prata', 21000, 'Manutencao', 3),
('Citroen', 'C4', 'GG-37-GG', 2021, 'Preto', 27000, 'Manutencao', 3),
('Toyota', 'Corolla', 'HH-38-HH', 2023, 'Branco', 9000, 'Manutencao', 3),
('Nissan', 'Juke', 'II-39-II', 2024, 'Amarelo', 5000, 'Manutencao', 3),
('Honda', 'Civic', 'JJ-40-JJ', 2023, 'Azul', 13000, 'Manutencao', 3),

('Hyundai', 'Tucson', 'KK-41-KK', 2022, 'Vermelho', 25000, 'Manutencao', 3),
('Kia', 'Sportage', 'LL-42-LL', 2021, 'Preto', 30000, 'Manutencao', 3),
('Ford', 'Focus', 'MM-43-MM', 2024, 'Branco', 7000, 'Manutencao', 3),
('Opel', 'Astra', 'NN-44-NN', 2023, 'Cinza', 8000, 'Manutencao', 3),
('Volvo', 'XC60', 'OO-45-OO', 2022, 'Preto', 19000, 'Manutencao', 3),
('Fiat', 'Tipo', 'PP-46-PP', 2021, 'Branco', 21000, 'Manutencao', 3),
('Seat', 'Leon', 'QQ-47-QQ', 2022, 'Vermelho', 18000, 'Manutencao', 3),
('Skoda', 'Octavia', 'RR-48-RR', 2023, 'Prata', 16000, 'Manutencao', 3),
('Mazda', 'MX-30', 'SS-49-SS', 2023, 'Branco', 9000, 'Manutencao', 3),
('Mitsubishi', 'ASX', 'TT-50-TT', 2021, 'Cinzento', 24000, 'Manutencao', 3),

('Jeep', 'Compass', 'UU-51-UU', 2023, 'Preto', 12000, 'Manutencao', 3),
('Land Rover', 'Discovery', 'VV-52-VV', 2022, 'Verde', 35000, 'Manutencao', 3),
('Mini', 'Cooper', 'WW-53-WW', 2024, 'Amarelo', 5000, 'Manutencao', 3),
('Porsche', 'Macan', 'XX-54-XX', 2023, 'Cinza', 6000, 'Manutencao', 3),
('Lexus', 'UX', 'YY-55-YY', 2022, 'Branco', 15000, 'Manutencao', 3),
('Subaru', 'Outback', 'ZZ-56-ZZ', 2023, 'Azul', 13000, 'Manutencao', 3),
('Alfa Romeo', 'Giulia', 'AB-57-CD', 2024, 'Vermelho', 4000, 'Manutencao', 3),
('Dacia', 'Duster', 'BC-58-DE', 2022, 'Laranja', 21000, 'Manutencao', 3),
('Jaguar', 'XE', 'CD-59-EF', 2023, 'Preto', 8000, 'Manutencao', 3),
('Chevrolet', 'Camaro', 'DE-60-FG', 2024, 'Amarelo', 3000, 'Manutencao', 3);





INSERT INTO reservas (id_cliente, id_veiculo, id_funcionario, data_inicio, data_fim, preco_total, estado) VALUES
(1, 1, 2, '2025-01-10', '2025-01-15', 125.00, 'concluida'),
(2, 2, 4, '2025-01-12', '2025-01-18', 180.00, 'concluida'),
(3, 3, 8, '2025-01-15', '2025-01-20', 200.00, 'concluida'),
(4, 4, 13, '2025-01-20', '2025-01-25', 250.00, 'ativa'),
(5, 6, 16, '2025-01-22', '2025-01-28', 510.00, 'ativa'),
(6, 7, 20, '2025-01-25', '2025-02-01', 840.00, 'ativa'),
(7, 9, 25, '2025-02-01', '2025-02-05', 600.00, 'ativa'),
(8, 11, 30, '2025-02-03', '2025-02-10', 525.00, 'ativa'),
(9, 12, 31, '2025-02-05', '2025-02-08', 135.00, 'ativa'),
(10, 15, 39, '2025-02-08', '2025-02-15', 665.00, 'ativa'),
(11, 16, 2, '2025-02-10', '2025-02-17', 700.00, 'ativa'),
(12, 17, 4, '2025-02-12', '2025-02-16', 200.00, 'ativa'),
(13, 20, 8, '2025-02-15', '2025-02-20', 110.00, 'ativa'),
(14, 21, 13, '2025-02-18', '2025-02-25', 336.00, 'ativa'),
(15, 22, 16, '2025-02-20', '2025-02-27', 560.00, 'ativa'),
(16, 23, 20, '2025-02-22', '2025-03-01', 520.00, 'ativa'),
(17, 24, 25, '2025-02-25', '2025-03-04', 679.00, 'ativa'),
(18, 25, 30, '2025-03-01', '2025-03-05', 720.00, 'ativa'),
(19, 26, 31, '2025-03-03', '2025-03-10', 665.00, 'ativa'),
(20, 27, 39, '2025-03-05', '2025-03-12', 364.00, 'ativa'),
(1, 5, 2, '2024-12-10', '2024-12-15', 350.00, 'concluida'),
(3, 8, 4, '2024-12-12', '2024-12-19', 595.00, 'concluida'),
(5, 10, 8, '2024-12-15', '2024-12-20', 300.00, 'concluida'),
(7, 13, 13, '2024-12-18', '2024-12-22', 220.00, 'cancelada'),
(9, 18, 16, '2024-12-20', '2024-12-27', 385.00, 'concluida'),
(11, 19, 20, '2024-12-22', '2024-12-28', 330.00, 'concluida'),
(13, 1, 25, '2024-11-10', '2024-11-17', 175.00, 'concluida'),
(15, 3, 30, '2024-11-15', '2024-11-20', 200.00, 'concluida'),
(17, 6, 31, '2024-11-18', '2024-11-25', 595.00, 'concluida'),
(19, 9, 39, '2024-11-20', '2024-11-24', 600.00, 'cancelada');


INSERT INTO manutencoes (id_veiculo, descricao, data_manutencao, custo) VALUES
(30, 'Revisão dos 10.000 km', '2024-12-10', 120.00),
(31, 'Troca de óleo sintético', '2024-12-12', 90.00),
(32, 'Substituição filtros A/C', '2024-12-14', 45.00),
(33, 'Reparação suspensão traseira', '2024-12-15', 300.00),
(34, 'Troca de pneus dianteiros', '2024-12-16', 200.00),
(35, 'Correia alternador', '2024-12-17', 140.00),
(36, 'Revisão eletrónica', '2024-12-18', 180.00),
(37, 'Limpeza EGR', '2024-12-19', 150.00),
(38, 'Substituição bateria', '2024-12-20', 180.00),
(39, 'Alinhamento completo', '2024-12-21', 70.00),

(40, 'Troca velas ignição', '2024-12-22', 95.00),
(41, 'Revisão dos 20.000 km', '2024-12-23', 250.00),
(42, 'Reparação do A/C', '2024-12-24', 220.00),
(43, 'Troca líquido de travões', '2024-12-26', 85.00),
(44, 'Revisão geral premium', '2024-12-27', 400.00),
(45, 'Polimento completo', '2024-12-28', 150.00),
(46, 'Substituição disco travão', '2024-12-29', 280.00),
(47, 'Revisão dos 12.000 km', '2024-12-30', 160.00),
(48, 'Troca de pneus traseiros', '2025-01-01', 210.00),
(49, 'Revisão sistema híbrido', '2025-01-02', 200.00),

(50, 'Atualização central multimédia', '2025-01-03', 50.00),
(51, 'Reparação direção assistida', '2025-01-04', 320.00),
(52, 'Revisão de inverno', '2025-01-05', 180.00),
(53, 'Troca do filtro de ar', '2025-01-06', 40.00),
(54, 'Pintura parcial', '2025-01-07', 500.00),
(55, 'Revisão elétrica', '2025-01-08', 100.00),
(56, 'Troca amortecedores', '2025-01-09', 600.00),
(57, 'Limpeza dos bicos injetores', '2025-01-10', 120.00),
(58, 'Revisão dos 18.000 km', '2025-01-11', 230.00),
(59, 'Substituição do escape', '2025-01-12', 450.00),
(60, 'Super revisão desportiva', '2025-01-13', 1500.00);


INSERT INTO clientes_favoritos (id_cliente, id_veiculo) VALUES
    (1, 1),
    (1, 2),
    (1, 3),

    (2, 2),
    (2, 3),
    (2, 4),

    (3, 1),
    (3, 4),
    (3, 5),

    (4, 3),
    (4, 5),
    (4, 6),

    (5, 1),
    (5, 6),
    (5, 7),

    (6, 7),
    (6, 8),
    (6, 9),

    (7, 2),
    (7, 8),
    (7, 10),

    (8, 9),
    (8, 10),
    (8, 11),

    (9, 5),
    (9, 11),
    (9, 12),

    (10, 4),
    (10, 12),
    (10, 13);

-- ============================================
-- INSERÇÃO DE DADOS - MANUTENCOES (30)
-- (Todas referenciam veiculos 1..30 existentes)
-- ============================================
-- IMPORTANTE:
-- Estas manutenções usam APENAS veículos 1 a 30.
-- Veículos 31-40 ficam sem ligação à tabela e podem ser apagados livremente.




DELIMITER $$

CREATE TRIGGER veiculo_criado_gera_manutencao
AFTER INSERT ON veiculos
FOR EACH ROW
BEGIN
    IF NEW.estado = 'Manutencao' THEN
        INSERT INTO manutencoes (
            id_veiculo, descricao, data_manutencao, custo
        ) VALUES (
            NEW.id_veiculo,
            'Manutenção automática gerada ao criar veículo',
            NOW(),
            0
        );
    END IF;
END $$

DELIMITER ;



DELIMITER $$

CREATE TRIGGER veiculo_sai_de_manutencao_apaga_manutencoes
AFTER UPDATE ON veiculos
FOR EACH ROW
BEGIN
    -- Veículo estava em Manutencao e saiu desse estado
    IF OLD.estado = 'Manutencao'
       AND NEW.estado IN ('Disponivel', 'Alugado') THEN

        DELETE FROM manutencoes
        WHERE id_veiculo = NEW.id_veiculo;

    END IF;
END $$

DELIMITER ;



DELIMITER $$

CREATE TRIGGER manutencao_criada_muda_estado
AFTER INSERT ON manutencoes
FOR EACH ROW
BEGIN
    UPDATE veiculos
    SET estado = 'Manutencao'
    WHERE id_veiculo = NEW.id_veiculo;
END $$

DELIMITER ;

DELIMITER $$

CREATE TRIGGER manutencao_atualizada_muda_estado
AFTER UPDATE ON manutencoes
FOR EACH ROW
BEGIN
    UPDATE veiculos
    SET estado = 'Manutencao'
    WHERE id_veiculo = NEW.id_veiculo;
END $$

DELIMITER ;