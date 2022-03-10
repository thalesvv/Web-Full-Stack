// const pessoa = {
//     nome: "Thales",
//     idade: 28,
//     cumprimentaPessoa(nome = "Fulano"){
//         return console.log("Seja bem vindo: " + this.nome);
//     },
// };

// const mensagem = pessoa.cumprimentaPessoa("Josue");

/*
C++, Java, PHP, a palavra reservada this ela é a instancia de um objeto

*/

// const counter = {
//     count: 0,
//     next: function() {
//         this.count++;
//         console.log(this);
//         const pessoa = {
//             nome: "Thales",
//             acessaNome: function () {
//                 console.log(this)
//             },
//         }
//         pessoa.acessaNome()
//     },
// }
// console.log(counter.next());

// Uso do this no contexto global

// console.log(this.window);
// se eu atribuiruma prorpiedade pro objetto this
// no contexto global, ele adiciona a propriedade como sendo uma do objeto global

// this.color = "red";
// console.log(window.color);

// Contexto de funções
// Em JS, conseguimos chamar funções de algumas formas:
// Chamada de função (function invocation)
// Chamada de método (method invocation)
// Chamade de Construtor (construttor invocation)
// Chamada indireta (indirect invocation)

/*
function show() {
    console.log(this == window);
    
}

show();

window.show();

console.log(window);
*/

// Invocaç'ao de método
// quando eu chamar o método do objeto, o JS aponta o this para o objeto q possui o métoddo
/*
let carro = {
    marca: "Hyundai",
    getMarca: function() {
        return this.marca;
    }
}

let moto = {
    marca: "Kawazaki"
}

let marca = carro.getMarca;
console.log(marca());

let marcaMoto = carro.getMarca.bind(moto);
console.log(marcaMoto());
*/

// Chamada de construtor
function Carro(placa) {
    this.placa = placa;
    this.marca = "";
}

console.log(Carro);

// Criar uma função dentro do construtor Carro
Carro.prototype.getPlaca = function () {
    return this.placa;
}

console.log(Carro);

let carro1 = new Carro("ddx2018", "bmw");
let carro2 = new Carro("ddx2018", "bmw");

console.log(carro1);
console.log(carro2);
// console.log(carro1.getPlaca());

function Carro2(marca) {
    if (!(this instanceof Carro2)){
        throw Error("Use o operador new para instanciar o objeto:")
    }
    this.marca = marca;
}

let bmw = new Carro2('BMW');
console.log(bmw);

function Carro3(marca) {
    if (!new.target){
        throw Error("Use o operador new para instanciar o objeto:")
    }
    this.marca = marca;
}

let bmw1 = new Carro3('BMW');
console.log(bmw1);




