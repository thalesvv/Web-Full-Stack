console.log("=== CARROS ===");

// DICA 1 : Apenas no Input
// document.getElementById("modelo").value = "Preencher";

// DICA 2: Tags em geral
document.getElementById("quantidade").textContent = "0";

// Critérios de Aceite
/*
PREMISSA: USE ARRAY!!
1 - Ao cadastrar um carros, incrementar a quantidade
2 - Limpar o campo para o próximo preenchimento
3 - Ao alcançar 10 carros, exibí-los na tela
*/

const carros = [];

function addCarro() {
    const campoCarro = document.getElementById("modelo").value
    
    // Aquisição
    if (campoCarro=="" || campoCarro == " ") {
        alert("Digite um nome");
    }
    else {
        carros.push(campoCarro);
        document.getElementById("modelo").value = "";
        document.getElementById("quantidade").innerHTML = carros.length;
    }

    // Saída
    if (carros.length == 10) {
        carros.forEach(function(modelo) {
            const itemLista = document.createElement("li");
            const nome = document.createTextNode(modelo);
            itemLista.appendChild(nome);
            listaCarros.appendChild(itemLista);
        } );
    }
    else if (carros.length > 10) {
            const tamanho = carros.length;
            const itemLista = document.createElement("li");
            const nome = document.createTextNode(carros[tamanho-1]);
            itemLista.appendChild(nome);
            listaCarros.appendChild(itemLista);
    }
};