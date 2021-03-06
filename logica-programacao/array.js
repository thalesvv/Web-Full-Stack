console.log("=== ARRAY ===")

// array literal
const carros = ["Gol", "Corsa" ,"Fox"];
carros.push("Corolla", "Vectra"); // add item no final do array
carros.unshift("Marea"); // add item no começo
carros.splice(1,1); // remove o item na posição 2, pois começa a contar da 1 e a ação é remover 1 item. Caso fosse 1,2 retiraria o da posição 2 e 3
carros.splice(0,1, "BMW"); // substitui item na posição X
carros.splice(2, 0, "Fusca", "Golf"); // add itetm na posição X
carros.pop(); // remove item do final
carros.shift(); // remove item do início
carros.sort(); // ordena items
carros.reverse(); // inverte items no array

document.write("- ", carros[0], "<br>");
document.write("- ", carros[1], "<br>");
document.write("- ", carros[2], "<br>");
document.write("- ", carros[3], "<br>");
document.write("- ", carros[4], "<br>");
document.write("<hr>");

for(let i = 0; i < carros.length; i++){
    document.write(i+1, " ", carros[i], "<br>");
}

document.write("<hr>");

// Implementação 1
// função nomeada
function pegaCarro(modelo, pos) {
    console.log("pegou?", modelo, pos);
    document.write("Posição ", pos, " => ","Modelo: ", modelo, "<br>");
}

carros.forEach(pegaCarro);
// pegaCarro("Golf", 0); // loop 0
// pegaCarro("Fusca", 1); // loop 1
// pegaCarro("Fox"), 2; // loop 2

document.write("<hr>");

// Implementação 2
// Função Anônima
carros.forEach(function(carro, i) {
    console.log("funfa?", carro, i);
    document.write("Implementação 2 => ", carro, "<br>");
} );


console.log(carros);
console.log(carros.length);

document.write("<hr>");
console.log("====");

const numeros = [2, 3, 4, 32, 21, 25, 17, 1];
console.log(
    numeros.forEach(function (value, index) {
        // document.write(arguments[0], "<br>");
        console.log(value, index);
        document.write(value, " ", index, "<br>");
    })
);

// filter / map / reduce
// filter
console.log(
    numeros.filter(function(numero) {
        console.log("filter?", numero);
        return numero < 25;
    })
);
console.log(numeros);

// map
console.log(
    numeros.map(function(numero) {
        console.log("map?", numero);
        return numero * 5;
    })
); 

console.log(numeros);

// reduce
console.log(
    // numeros.reduce(callback, valorInicial)

    numeros.reduce(function (previous, current, index, array) {
        console.log("prev:", previous,"cur:", current);
        // console.log("index", index, "array", array);
        return previous + current;
        // previous.push(current * 2);
        // return previous;
    }, 0)
)





