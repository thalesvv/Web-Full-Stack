CREATE TABLE livro (
    id SERIAL NOT NULL,
	codigo SERIAL NOT NULL,
	titulo VARCHAR(50) NOT NULL,
	formato VARCHAR(20) NOT NULL,
	categoria VARCHAR(40) NOT NULL,
	editora VARCHAR(50),
	preco FLOAT(2) NOT NULL,
	quantidade INTEGER NOT NULL,
	num_paginas INTEGER NOT NULL,
	descricao TEXT,
    PRIMARY KEY (id)
);

CREATE TABLE Cliente (
    id SERIAL NOT NULL,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(40) NOT NULL,
    cpf CHAR(11) NOT NULL,
    sexo CHAR(1) NOT NULL,
    data_nascimento DATE NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Pedido (
    id SERIAL NOT NULL,
    codigo SERIAL NOT NULL,
    status BOOL DEFAULT false, 
    data_Realizacao DATE NOT NULL,
    prazo_Entrega DATE,
    UNIQUE (codigo),
    PRIMARY KEY (id)
);

CREATE TABLE Autor (
    id SERIAL NOT NULL,
    nome VARCHAR(100) NOT NULL,
    nacionalidade VARCHAR(50) NOT NULL, 
    data_Nascimento DATE NOT NULL, 
    data_Falecimento DATE,
    descricao TEXT,
    PRIMARY KEY (id)
);

CREATE TABLE Endereco (
    id SERIAL NOT NULL,
    cep INTEGER NOT NULL, 
    numero INTEGER NOT NULL, 
    logradouro VARCHAR(100) NOT NULL, 
    bairro VARCHAR(50) NOT NULL,
    complemento VARCHAR(100),
    ponto_referencia VARCHAR(100),
    PRIMARY KEY (id)
);

CREATE TABLE Cidade (
    id SERIAL NOT NULL,
    nome VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Estado (
    id SERIAL NOT NULL,
    nome VARCHAR(50) NOT NULL,
    sigla CHAR(2) NOT NULL,
    PRIMARY KEY (id)
);
