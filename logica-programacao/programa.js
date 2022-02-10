// armazenando dados (EcmaScript 5 - Até Julho/2015: ex uso do var)
// entrada de dados
var nome = prompt("Escreva seu nome"); 
var email = prompt("Digite seu email");
var telefone = prompt("Digite seu telefone");

// Executando instruções
// contexto.comando(param1, param2);

// saída de dados (console)
console.log("nome" ,nome);
console.log("email", email)
console.log("telefone", telefone);

// saída de dados (tela)
document.write("<hr><p>Nome: ", nome, "</p>");
document.write("Email: ", email,"<br>");
document.write("<p>Telefone: ", telefone, "</p><hr>");