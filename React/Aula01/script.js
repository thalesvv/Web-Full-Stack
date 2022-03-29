// Paradigma procedural 

/*
let estaLigado = false;

const iniciar = () => {
    estaLigado = true;
}

const desligar = () => {
    estaLigado = false;
}

*/

// Paradigma da Proogramação Orientada a objetos


// O que é uma classe e o que é um objeto?
// Classe: Estrutura, é como uma receita de bolo

// Objeto: Referencia ao ponto de memória, é como se fosse o bolo em si
/*
var Carro = {
    ligar: () => {

    }
}

class CarroClasse {
    constructor() {

    }
}

new CarroClasse()
*/

// Paradigma da Programação funcional - principio da imutabilidade. Não se altera muito os objetos, variáveis e afins, para que tenhamos previsibilidade no codigo
// funcoes matematicas, colocadas em uma ordem logica que resolvera um problema especifico

/*
var Carro = {
    mudaCor: () => {

    }
}

Carro.mudaCor("Azul") // alterou a caracteristica do objeto. Que e a orientada a objeto

// Ja no funcional, devemos duplicar o objeto e entao alterar a cor de um deles
*/


// Princípio da Imutabilidade

let numero = 0;
const somarDezNoNumero = () => numero = numero + 10; // Isso nao deveria acontecer, pois as coisas nao devem se alterar, como foi feito agora
somarDezNoNumero();

// Deve ser feito assim:
const numero1 = 0;
const somarDezNoNumero1 = () => numero1 + 10;

/**
 * Funções não tem estado: STATELESS
 */

const somar = (x, y) => x + y;

// Funcção independente, tem entrada, saída mas n tem loop

// Exemplo
// Fibonacci = antepenultimo + ultimo
const calcularFibonacci = (contador) => {
    let resultado = [0, 1];

    for (let i = 2; i < contador; i++) {
        const valorSomado = somar(resultado[i - 2], resultado[i - 1])
        resultado.push(valorSomado);
    }
    return resultado
}
console.log(calcularFibonacci(10));

// Este código funciona mas não obedece a imutabilidade/FunçãoIndependente

// Refatorando e utilizando Recursão

const calcularValorFibonacci = (posicao) => {
    if(posicao < 1){
        return 0
    }
    else if (posicao <= 2){
        return 1
    }
    else 
        return calcularValorFibonacci(posicao - 2) + calcularValorFibonacci(posicao - 1);
} 

const obterSequenciaFibonacci = (contagem) => {
    return [...Array(contagem)].map((valor, index) => calcularValorFibonacci(index))
    // os tres pontinhos funcionam como um desconstrutor, pois pega um obejto e o desconstroi mantendo sua estrutura
}

const obterSequenciaFibonacci2 = (posicao) => 
    posicao < 1 ? 0
        : posicao <= 2 ? 1
            : calcularValorFibonacci2(posicao - 2) +
            calcularValorFibonacci2(posicao - 1)

/**
 * Funções Puras - não podem depender de nada, apenas do que está no seu escopo
 */

const trabalharComPI = (lado) => Math.PI * lado * lado // Essa não é pura (impura) porque depende da função PI que é externa
const trabalharComPI2 = (pi, lado) => pi * lado * lado // essa é pura pois possui todos os parâmetros necessários para se executada

// Composição de Função - Funções concatenadas  (padrão builder)
[1, 2, 3, 4, 5]
    .filter(o => o != 2)
    .map(o => o + 1)


// Fatorial: Ele * ele -1
const fatorial =  (numero) => {
    if (numero == 0 || numero == 1)
        return 1
    else
        return numero * fatorial(numero - 1)
}

const fatorialRef = (numero) => {
    (numero == 0 || numero == 1) 
}

/** fatorial(4)
 * 4 * fatorial(3) [6] = 24
 * 3 * fatorial(2) [2] = 6
 * 2 * fatorial(1) [1] = 2
 * 1
 * 
 * 1
 * 2 * 1 = 2
 * 3 * 2 = 6
 * 6 * 4 = 24
 * 
 */

/**
 * Estado Compartilhado - variável global
 */

const PI = 3.14;

const somarPI = () => 3.14 * PI 

/**
 * Função de primeira classe - é uma função que se comporta como variável
 * 
 * Serem atribuidas a variáveis
 * Podem ser passadas por parametro
 * Podem ser retornadas como resultado
 */

// Serem atribuidas a variáveis
const primeiraClasseComArrow = () => {}
const primeiraClasseComFunction = function (){
    return primeiraClasseComArrow
}
primeiraClasseComFunction()
primeiraClasseComArrow()

// Podem ser passadas por parametro
function obterNomeUsuario(){
    return 'Thales'
}

function olaUsuario(funcaoObterNome) {
    console.log(funcaoObterNome);
    console.log(`Olá, ${funcaoObterNome()}`);
}

olaUsuario(function () {
    return `Thales`
})

// Podem ser retornadas como resultado
function obterMensagem() {
   return function(){
       console.log("Oi")
   }
}

function obterMensagem() {
   return () => "Oi";
}

let ola = obterMensagem()
ola()

/**
 * Função de alta ordem
 * 
 * Podem receber outras funções como argumentos
 * Podem retornar funções
 */

// * Podem receber outras funções como argumentos
function olaUsuarioAltaOrdem(funcaoObterNome){
    console.log(`Olá, ${funcaoObterNome}`);
}

olaUsuarioAltaOrdem(function () {
    return `Alta Ordem`
})

// podem retornar funções
function obterMensagemAltaOrdem(){
    return () => `Olá`;
}
