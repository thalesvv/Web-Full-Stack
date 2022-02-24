console.log("=== CARROS ===");

// DICA 1 : Apenas no Input
document.getElementById("modelo").value = "Preencher";

// DICA 2: Tags em geral
document.getElementById("quantidade").textContent = "Preencheer";

// Critérios de Aceite
/*
PREMISSA: USE ARRAY!!
1 - Ao cadastrar um carros, incrementar a quantidade
2 - Limpar o campo para o próximo preenchimento
3 - Ao alcançar 10 carros, exibí-los na tela
*/

const carros = [];

function addCarro() {
    carros.push = document.getElementById("modelo").value;
    document.getElementById("modelo").value = " ";
    console.log(carros, carros.length);
    
    document.getElementById("quantidade").textContent = carros.length;

};