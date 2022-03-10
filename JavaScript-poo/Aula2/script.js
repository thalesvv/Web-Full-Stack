/*
const variavel = {
    valor: 0,
    conversor: '',
    get moeda () {
        return "R$ " + this.valor.toFixed(2).replace(".", ",");
    },
    get xpto() {
        return this.valor
    },
    set xpto(i){
        this.valor = i
    },
    get conversao () {
        if( this.conversor === 'peso' )
        return 0.046 * this.valor;
    }
}

variavel.xpto = 150;
variavel.conversor = "peso";


console.log(variavel.conversao);
*/

// EX 01
/*
const carro = {
    _cor: '',
    marca: '',
    get pegaCor () {
        return this._cor
    },
    set pegaCor(idCor) {
        this._cor = idCor;
    },
    get pegaMarca (){
        return this.marca;
    },
    set pegaMarca (idMarca){
        this.marca = idMarca;
    },
    get returnMessage(){
        return `A marca do carro é: ${this.idMarca} já a cor é: ${this.idCor}.`;
    }
}

carro.idCor = "amarelo";
carro.idMarca = "Fiat";

console.log(carro.idCor);
console.log(carro.idMarca);
console.log(carro.returnMessage);

console.log(carro.marca)
console.log(carro._cor)

*/


// O que são classes?
/*
// function expression
function xptop() {

}
// function declarations
var x = function () {

}
*/

// CLASSES
 /*

function ConstroiPessoaConstructor (nome, email, idade) {
    this.nome = nome,
    this.email = email,
    this.idade = idade
}

// reescrevendoo ooo método toString que seria encontrado
// no escopo global do js
this.toString = () => {
    return ("Nome da pessoa: " + this.nome + ", idade da pessoa " + this.idade);
}

// instanciando a função construtora
let thales = new ConstroiPessoaConstructor(
    "Thales",
    "thales.v.vieira@gmail.com",
    28
);

console.log(thales);
// console.log(thales.toString());
// console.log(thales.idade.toString());

// Trasformando a função construtora em uma classe
class Pessoa{
    constructor(nome, email, idade, ano){ 
        this.nome = nome,
        this.email = email,
        this.idade = idade,
        this.ano = ano
    }
    get dobraIdade(){
        return this.idade * 2;
    }
    calculaIdade = function (anoAtual, anoNascimento){
        return this.ano = anoAtual - anoNascimento;
     }   
    
}

let Vini = new Pessoa(
    "Vinicius",
    "vinicius@letscode.com.br",
    20
);

console.log(Vini.dobraIdade)

*/

// Extends e Super - POO

class ave {
    constructor(cor, especie){
        this.cor = cor,
        this.especie = especie
    }
}

// instanciar a classe ave
let a = new ave("branco", "galinha");
console.log(a);

// para criar uma nova classe e aumentar uma propriedade (atributo)

class passaro extends ave {
    constructor(cor, especie, voa){
        super(cor, especie)
        this.voa = voa
        /* ou
        super()
        this.voa = voa,
        this.cor = cor,
        this.especie = especia
        */
    }
}

class pinguin extends ave{
    constructor(cor, especie, bica){
        super()
        this.cor = cor,
        this.especie = especie,
        this.bica = bica
    }
}

let b = new passaro("azul", "arara", true);
let g = new pinguin("preto", "arara", true);
console.log(b)
console.log(g)

// usando o extends para um objetoo pré construido

class DataModificada extends Date {
    constructor(){
        super()
    }

    getFormatteDate() {
        var meses =  ['Jan','Feb','Marçoooo0000','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        return this.getDate() + "-" + meses[this.getMonth()] + "-" + this.getFullYear();
}
}

let d = new DataModificada();
let f = new Date();

console.log(d.getFormatteDate());
console.log(f.getFormatteDate());

console.log(this.getDate());