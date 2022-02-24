console.log("=== REPETICAO ===");

// Números - 1 à 10
document.write("<h3>Números - 1 a 10</h3>")
let inicial = 1; // valor inicial
const final = 10; // valor inicial

while (inicial <= final) {  // condição
    document.write(inicial);
    // inicial = inicial + 1; // incremento
    // inicial += 1; // incremento, poderia ser inicial *= 1; para dividir, por exemplo
    inicial++; // incremento
}

document.write("<hr>");
document.write("<h3>Números - 50 a 1</h3>")
// Números - 50 até 1
let inicial2 = 50;
const final2 = 1;

while (inicial2 >= final2) {  // condição
    document.write(inicial2, " ");
    inicial2--; // incremento
}

document.write("<hr>");

// Números Pares - 0 até 100
document.write("<h3>Números Pares - 0 a 100</h3>")
let inicial3 = 0;
const final3 = 100;

while (inicial3 <= final3) {  // condição
    document.write(inicial3, " ");
    inicial3 += 2; // incremento
}

document.write("<hr>");

// Números Ímpares - 99 à 1
// 99 - 97 - 95 - ... - 3 - 1

document.write("<h3>Números Ímpares - 99 a 1</h3>")
let inicial4 = 99;
const final4 = 1;
while (inicial4 >= final4) {
    if (inicial4 == 1) {
        document.write(inicial4);
        break;
    }
    document.write(inicial4, " - ");
    inicial4 -= 2;
}

document.write("<hr>");

// DESAFIO: Criar um programa que recebe números
// DICA: Use o prompt()
// Rodar o programa infinitamente,
// recebendo e mostrando os números digitados
// Quando o número inserido for ZERO (0),
// encerrar o programa!

/*let loop = true;
let num;

while (loop) {
    num = prompt("Digite um número:");
    console.log(num);

    if (num == 0) {
        console.log("FIM!")
        loop = false;
    }
}
*/

document.write("<h3>Números - 1 a 10 - FOR</h3>")
// Sintaxe
// for (valor_inicial; condicao_logica; incremento) {
// }

for (let cont = 1, limit = 10; cont <= limit; cont++ ) {
    document.write(cont, " ");
}

document.write("<hr>");

// DESAFIO: Solicite ao usuário um número e imprima asteriscos na tela referente ao número informado pelo usuário


// const quantidade = parseInt(prompt("Quantos asteríscos você quer que desenhe?"));

// for (let index = 0; index <= quantidade; index++) {
//     document.write("*");
// }

// DESAFIO - 1: imprimir 10 asteriscos por linha, em 5 linhas

for (let index = 0; index < 5; index++) {
    for (let ind = 0; ind < 10; ind++) {
        document.write("*");
    }
    document.write("<br>");
}

document.write("<hr>");

// Desafio 2 - imprime 1 esterisco na primeira linha, imprime 2 na segunda ...

for (let index = 1; index <= 10; index++) {
    for (let ind = 0; ind < index; ind++) {
        document.write("*");
    }
    document.write("<br>");
}

document.write("<hr>");

// Desafio 3 - desenhar um V com asteriscos nas pontas e iguais no meio,
// a primeira linha tem 20 colunas preenchidas e a última tem 1 asterisco centralizado
// &nbsp; para fazer espaços em branco

// *=================*
//  *===============* 
//   *=============*  
//    *===========*   
//     *=========*    
//      *=======*
//       *=====*
//        *===*
//         *=*
//          *

for (let linha = 10; linha > 0; linha--) {
    for (let espaco = 10; espaco >= linha; espaco--) {
        document.write("&nbsp;");
    }
    if (linha==1) {
        document.write("&nbsp;*");
        break;
    }
    document.write("*");
    for (let meio = 0; meio < ((linha-1)*2); meio++) {
        document.write("&nbsp;");
    }
    document.write("*", "<br>");
}
