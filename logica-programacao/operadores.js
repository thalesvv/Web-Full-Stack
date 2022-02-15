console.log("=== OPERADORES ===");

// Aritiméticos 
console.log("Aritiméticos");
console.log("+ : ", "2 + 2 = ", 2 + 2);    // adição
console.log("- : ", "4 - 2 = ", 4 - 2);    // subtracao
console.log("* : ", "2 * 3 = ", 2 * 3);    // multiplicação
console.log("/ : ", "8 / 2 = ", 8 / 2);    // divisão
console.log("% : ", "9 % 2 = ", 9 % 2);    // resto da divisao

// Comparação
console.log("\nComparação");
console.log("maior que", ">", "4 > 2", 4 > 2);  // true
console.log("menos que", "<", "2 < 8", 2 < 8);  // true
console.log("maior ou igual", ">=", "1 >= 0", 1 >= 0); //true
console.log("menor ou igual", "<=", "2 >= 2", 1 >= 0); //true
console.log("igualdade", "==", "3 == 3", 3 == 3);  // true
console.log("igualdade estrita", "===", "2 === '2'", 2 === '2' ); // false, pois ele compara os valores e os tipos e impede que haja a coerção de tipos
console.log("diferente", "!=", "2 != 3", 2 != 3); // true

// Lógicos
console.log("\nLógicos");
console.log("E", "&&", 1 > 2 && 2 > 1);  // FALSE | TRUE => FALSE true somente para ambos verdadeiros, caso contrário daria false
console.log("OU", "||", 1 > 2 || 2 < 1); // FALSE | TRUE => TRUE true se qualquer uma das duas sejam verdadeiras, a outra n importa
console.log("NÃO", "!", ! 4===4);  // FALSE - inversão de lógica, pois 4 === 4 é com certeza TRUE
