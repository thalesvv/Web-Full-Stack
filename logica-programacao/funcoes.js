console.log("=== FUNÇÕES ===");

// Função Nomeada
function soma(n1=0, n2=0) {  // defaut parameter
    return n1 + n2;
}

// NaN - Not a Number
console.log(soma); // Ref Func
console.log(soma()); // 0
console.log(soma(5)); // 5
console.log(soma(5, 10)); // 15

// Declaralção de Função Anônima (Não nomeada)
const sum = function (a=0, b=0) {
    return a + b;
}

console.log( sum ); // ref função
console.log( sum() ); // 0
console.log( sum(5) ); // 5
console.log( sum(5, 10) ); // 15

console.log("=== Arrow Function ===");
// Arrow function
// function () {}  // sintaxe normal
// () => {} // nova sintaxe

function (value){return value;}
value => value;
// Ex 1

// [1,2,3].forEach((value) => {
//     console.log(value);
// });


// function (value) {return value;}  // sintaxe normal
// value => value; // nova sintaxe


// Ex 2
let numbers = [1,2,3];

numbers = numbers.filter(value => value < 3);

// // Ex 3
// function () {return value} // sintaxe normal
// () => value  // sintaxe nova

numbers = numbers.reduce((prev, curr) => prev + curr, 0);

console.log(numbers);