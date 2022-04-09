// Importação via CommonJS
const { func } = require('prop-types');
const [boneco, forca, ...array_numeros] = require('./modulos/boneco.js');
// const {Jogador, categorias_disponiveis: cat_disp} = require('./modulos/jogador'); // n precisa colocar o .js; categorias_disponiveis: cat_disp é uma named exported, assim n temos a necessidade de passar outros parametros. Pondendo entao chamar apenas uma das "propriedades" de um objeto
const {Jogador, ...functions} = require('./modulos/jogador');
const exported = require('./modulos/jogador')
// console.log(exported); // pega o objeto todo, mas n e recomendado. O ideal e explicidar com a descontrução

console.log("//////// main.js ///////\n");
console.log("Olá, tudo bem?");

console.log(boneco);
console.log(forca);
console.log(array_numeros);
console.log(...array_numeros); // spread operator  equivalente a colocar um console.log(1 , 2, 3, 4, 56)

function somatorio(...array_numeros) {
    console.log(array_numeros);
    let total = 0;
    for (let i=0; i<array_numeros.length; i++){
        total += array_numeros[i];
    }
    return total;
}

console.log(somatorio(1, 2, 121, 23234, 90)); // n da pra passar um array pq ele espera um objeto descontruido, como uma sequencia de numeros

console.log(new Jogador("Josue Mateus Vieira", "josue_boladao999@bol.com", "países"));

// console.log(cat_disp);
// console.log(functions.categorias_disponiveis()) // antes de fazer o export cat_disp: categorias_disponiveis
console.log(functions.cat_disp());

// boneco = "Oi, meu nome é Antedegmon";
// console.log(boneco); // da para alterar se usarmoso let boneco ao inves de const