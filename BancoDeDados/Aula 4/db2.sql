INSERT INTO Cliente ( nome, email, senha, cpf, sexo, data_nascimento) VALUES 
    ('Thales Vanzo Vieira', 'thales.v.vieira@gmail.com',123321123, 12332112301, 'm', '1993-09-21'),
    ('Abner de Siervo', 'abner.siervo@gmail.com', 321123321, 12332112301, 'm', '1963-04-29'),
    ('Joesley Milicianus', 'roouboomermo@hotmail.com', 171171171, 12332112301, 'm', '1930-10-12'),
    ('Hiana Soares', 'hiana.s@ymail.com', 54325432, 12332112301, 'f', '1998-04-13'),
    ('Daniel Orivaldo', 'galo_cego@bol.com', 3213213, 12332112301, 'm', '1920-02-13'),
    ('Mistress Ivete', 'aviaobrutaldoscat@udr66.com', 43211234, 12332112301, 'f', '1956-06-03'),
    ('Bruna Oliveira', 'brunaoliveira@uol.com', 3213123, 12332112301, 'f', '1899-12-04'),
    ('Paulo Costa', 'paulo_costa@gmail.com', 532332, 12332112301, 'm', '1984-07-07'),
    ('Daniela Moreira', 'dani.moreira@email.com', 6546456, 12332112301, 'f', '2000-03-25'),
    ('Paulinha Joana', 'joaninha@buscape.com.br', 65765765, 12332112301, 'f', '2003-03-12'),
    ('Oliver Johnson', 'oliver_johnson2@outlook.com', 54322345, 12332112301, 'm', '2012-12-20'),
    ('Christopher Becklonster', 'chist.beck@email.com', 43214321, 12332112301, 'm', '1999-12-31'),
    ('Vinicius Fujão', 'fuga.vini@gmail.com', 321321, 12332112301, 'm', '1998-02-12'),
    ('Gabriela Fugere Urban', 'fugaurbana@filosofia.com.br', 3213214, 12332112301, 'f', '1997-04-23'),
    ('Vanessa Bella', 'vanessinha_momo@gmail.com', 432234, 12332112301, 'f', '1995-10-15'),
    ('Alexandre Brandão', 'alebrand@outlook.com', 5235342, 12332112301, 'm', '1993-07-06'),
    ('Carlos Gomes', 'carlos.gomes@email.com', 443124321, 12332112301, 'm', '1992-05-14'),
    ('Alexandre Moraes', 'alexx92@hotmail.com', 54325324, 12332112301, 'm', '1997-08-29'),
    ('Poencio Falássico', 'faencio.poassico@inversor.com', 321321, 12332112301, 'm', '1991-08-27'),
    ('Humberto Soares de Camargo', 'humbertinho.sapeca@gmail.com', 321321321, 12332112301, 'm', '1992-01-01');


INSERT INTO Livro (codigo, titulo, num_paginas, preco, formato, quantidade, categoria, descricao, editora, disponivel) VALUES
    (321, 'O Silmarillion', 496, 39.90, 'físico', 45, 'Fantasia', 'O Silmarillion é o relato dos Dias Antigos da Primeira Era do mundo criado por J.R.R. Tolkien. É a história longínqua para a qual os personagens de O Senhor dos Anéis e O Hobbit olham para trás, e em cujos eventos alguns deles, como Elrond e Galadriel, tomaram parte. Os contos de O Silmarillion se passam na época em que Morgoth, o Primeiro Senhor Sombrio, habitava a Terra-média, e os Altos-Elfos guerreavam contra ele pela recuperação das Silmarils, as joias que continham a pura luz de Valinor. O livro começa com o "Ainulindalë", o mito da criação do Universo, seguido pelo "Valaquenta", onde estão descritas a natureza e os poderes de cada um dos deuses. Em o “Quenta Silmarillion” há o início da contagem dos dias em Arda (o mundo onde está inserido o continente da Terra-média), a história dos Elfos na Terra Abençoada do Oeste, seus êxodos e o desenrolar das guerras élficas em Beleriand, que culminaram com o final da Primeira Era. O "Akallabêth" narra o apogeu e a queda do reino da grande ilha de Númenor no final da Segunda Era. Por fim, "Dos Anéis de Poder" fala dos grandes eventos no final da Terceira Era, como narrado em O Senhor dos Anéis. O livro começa com "O Ainulindalë", o mito da criação do Universo, seguido pelo "Valaquenta", onde estão descritas a natureza e os poderes de cada um dos deuses. O "Akallâbeth" narra o apogeu e a queda do reino da grande ilha de Númenor no final da Segunda Era e "Dos Anéis de Poder" fala dos grandes eventos no final da Terceira Era, como narrado em "O Senhor dos Anéis".', 'Harper Coollins Brasil', true),
    (4, 'O Senhor dos Aneis 1', 300, 50.20, 'físico', 10, 'Aventura', 'Muito Bom!', 'Aquela lá', true),
    (5, 'O Senhor dos Aneis 2', 320, 55.20, 'físico', 15, 'Aventura', 'Muito Bom!', 'Aquela lá', true),
    (6, 'O Senhor dos Aneis 3', 420, 65.20, 'físico', 111, 'Aventura', 'Muito Bom!', 'Aquela lá', true),
    (7, 'O Poderoso Chefão 3', 110, 70.30, 'ebook', 2, 'Romance', 'Muito massa!', 'Aquela msm', false),
    (8, 'O Poderoso Chefão 2', 310, 40.30, 'ebook', 24, 'Romance', 'Muito massa!', 'Aquela msm', false),
    (9, 'O Poderoso Chefão 1', 210, 10.30, 'ebook', 5, 'Romance', 'Muito massa!', 'Aquela msm', true),
    (10, 'Coletânea Os pensadores - Hobbes', 2510, 110.30, 'ebook', 5, 'Filosofia', 'Alto Nível', 'Aquela outra', false),
    (11, 'Coletânea Os pensadores - Platão', 150, 20.34, 'físico', 8, 'Filosofia', 'Alto nível', 'Aquela outra', true),
    (12, 'Coletânea Os pensadores - Schopenhauer', 120, 28.79, 'físico', 8, 'Filosofia', 'Alto nível', 'Aquela outra', true),
    (13, 'Coletânea Os pensadores - Sócrates', 154, 21.75, 'ebook', 5, 'Filosofia', 'Alto nível', 'Aquela outra', true),
    (14, 'Coletânea Os pensadores - Leucipo', 432, 51.71, 'ebook', 7, 'Filosofia', 'Alto nível', 'Aquela outra', true),
    (15, 'Ciranda das 6 cordas', 90, 2.71, 'ebook', 7, 'Música', 'Aprenda a tocar violão!', 'Aquela nova', true),
    (16, 'O Hobbit', 90, 31.67, 'Físico', 67, 'Fantasia', 'Triloogia LOTR', 'Aquela nova', true),
    (17, 'A metamorfose', 88, 21.22, 'Físico', 2, 'Romance', 'Cabeçudo', 'Aquela primeira', false),
    (18, 'Jupiter Maçã', 100, 1.22, 'Ebook', 2, 'Biografia', 'Psicodelia', 'Aquela primeira', true),
    (19, 'Rogério Skylab', 310, 119.41, 'Física', 10, 'Biografia', 'Psicodelia', 'Aquela primeira', true),
    (20, 'O andar do bêbado', 90, 89.44, 'Física', 110, 'Matemática', 'Aprendizados', 'Aquela segunda', true);

SELECT * FROM Livro WHERE editora = 'Aquela lá';
SELECT * FROM Livro WHERE descricao = 'Muito bom!';
SELECT * FROM Livro WHERE formato = 'físico';
SELECT * FROM Cliente WHERE nome LIKE 'Thales%';
SELECT * FROM Cliente WHERE email LIKE 'b%';

DELETE FROM Livro WHERE id = 3; -- Deletei Meu Livro Bonito

UPDATE Livro SET descricao = 'Todos deveriam ler' WHERE codigo = 2;

SELECT quantidade, SUM(quantidade) FROM livro GROUP BY livro.id;
SELECT quantidade, SUM(quantidade) FROM livro GROUP BY livro.titulo, livro.id HAVING quantidade > 5;

    