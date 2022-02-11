console.log("=== VARIAVEIS ===");

// Javascript - Especificação -> EcmaScript (ES)
// até Jun/2015 - ES5 -> var
// em Jul/2015 - ES6 -> let / const

// Padrão ASI - Automatic Semicolon Insert

// Tipos de Daos / Tipos de Variáveis
// Tipagemm Dinâmica
// Tipos Primitivos - string, number, boolean, null, undefined
var nome = "Thales" ; //srting
console.log("nome", nome , typeof nome);

let idade = 28; //number
let altura = 1.75; //
console.log("idade", idade , typeof idade);
console.log("altura", altura, typeof altura);

const magro = false; //boolean
console.log("magro", magro , typeof magro);

var nula = null; // assim, definimos o tipo object para ela
console.log("nula", nula, typeof nula);

var indefinida; // undefined
console.log("indefinida", indefinida, typeof indefinida);

// Diferenças entre var / let / const
// var - permite redeclaração da variável
var nome = 1;
console.log("nome", nome , typeof nome);

// var - permite reatribuição de valor
nome = false;
console.log("nome", nome , typeof nome);

// let - não permite redeclaração de variável
// let idade = 15; // SintaxError

// let - reatribbuição de valor
idade = 15;
console.log("idade", idade , typeof idade);
 
// const - não permite redeclaração de variável
//const magro = true;

// const - não permite reatribuição de valor
// magro = true; // TypeError