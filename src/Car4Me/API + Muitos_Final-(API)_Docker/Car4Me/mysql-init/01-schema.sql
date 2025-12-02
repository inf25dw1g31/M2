USE car4me;

-- ============================================
-- TABELA: categorias
-- ============================================
CREATE TABLE categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    preco_dia DECIMAL(10,2) NOT NULL,
    UNIQUE(nome)
);

-- ============================================
-- TABELA: veiculos
-- ============================================
CREATE TABLE veiculos (
    id_veiculo INT AUTO_INCREMENT PRIMARY KEY,

    marca ENUM(
        'Audi','BMW','Mercedes','Volkswagen','Renault','Peugeot','Citroen','Toyota',
        'Nissan','Honda','Hyundai','Kia','Ford','Opel','Volvo','Fiat','Seat','Skoda',
        'Mazda','Mitsubishi','Jeep','Land Rover','Mini','Porsche','Lexus','Subaru',
        'Alfa Romeo','Dacia','Jaguar','Chevrolet'
    ) NOT NULL,

    modelo VARCHAR(50) NOT NULL,
    matricula VARCHAR(20) UNIQUE NOT NULL,
    ano INT NOT NULL,
    cor VARCHAR(30),
    quilometragem INT DEFAULT 0,

    estado ENUM('Disponivel','Alugado','Manutencao') DEFAULT 'Disponivel',

    id_categoria INT,
    CONSTRAINT fk_veic_categoria
        FOREIGN KEY (id_categoria)
        REFERENCES categorias(id_categoria)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

CREATE INDEX idx_veiculos_categoria ON veiculos(id_categoria);
CREATE INDEX idx_veiculos_estado ON veiculos(estado);

-- ============================================
-- TABELA: clientes
-- ============================================
CREATE TABLE clientes (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    telefone VARCHAR(20),
    nif VARCHAR(20) UNIQUE NOT NULL,
    morada VARCHAR(255)
);

CREATE INDEX idx_clientes_nome ON clientes(nome);

-- ============================================
-- TABELA: funcionarios
-- ============================================
CREATE TABLE funcionarios (
    id_funcionario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    cargo VARCHAR(50),
    telefone VARCHAR(20)
);

CREATE INDEX idx_funcionarios_nome ON funcionarios(nome);

-- ============================================
-- TABELA: reservas
-- ============================================
CREATE TABLE reservas (
    id_reserva INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    id_veiculo INT NULL,
    id_funcionario INT NOT NULL,
    data_inicio DATETIME NOT NULL,
    data_fim DATETIME NOT NULL,
    preco_total DECIMAL(10,2),
    estado ENUM('ativa','concluida','cancelada') DEFAULT 'ativa',

    CONSTRAINT fk_res_cliente
        FOREIGN KEY (id_cliente)
        REFERENCES clientes(id_cliente)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,

    CONSTRAINT fk_res_veiculo
        FOREIGN KEY (id_veiculo)
        REFERENCES veiculos(id_veiculo)
        ON UPDATE CASCADE
        ON DELETE CASCADE,

    CONSTRAINT fk_res_funcionario
        FOREIGN KEY (id_funcionario)
        REFERENCES funcionarios(id_funcionario)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

CREATE INDEX idx_reservas_estado ON reservas(estado);
CREATE INDEX idx_reservas_data ON reservas(data_inicio, data_fim);

-- ============================================
-- TABELA: manutencoes
-- ============================================
CREATE TABLE manutencoes (
    id_manutencao INT AUTO_INCREMENT PRIMARY KEY,
    id_veiculo INT NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    data_manutencao DATETIME NOT NULL,
    custo DECIMAL(10,2),

    CONSTRAINT fk_manu_veiculo
        FOREIGN KEY (id_veiculo)
        REFERENCES veiculos(id_veiculo)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

CREATE INDEX idx_manutencoes_veiculo ON manutencoes(id_veiculo);



-- ==================================================================================
-- >>> AQUI ESTÁ A NOVA TABELA M:N (CLIENTES ⇄ VEÍCULOS)
-- ==================================================================================
CREATE TABLE clientes_favoritos (
    id_cliente INT NOT NULL,
    id_veiculo INT NOT NULL,

    PRIMARY KEY (id_cliente, id_veiculo),

    FOREIGN KEY (id_cliente)
        REFERENCES clientes(id_cliente)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    FOREIGN KEY (id_veiculo)
        REFERENCES veiculos(id_veiculo)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);