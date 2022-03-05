console.log("=== CARROS ===");

// PREMISSAS
// 1 - ARMAZENAR DADOS EM UM OBJETO
// 2 - COLOCAR OS DADOS DENTRO DE UM ARRAY
// 3 - EXIBIR TUDO O QUE FOR CADASTRADO DENTROO DOO CONSOLE.TABLE

// // minha solução
// let situacao = document.getElementById("situacao");
// const carros = [];

// function addCarro() {
    
//     const carro = {
//         modelo: document.getElementById("modelo").value,
//         ano: document.getElementById("ano").value,
//         cor: document.getElementById("cor").value,
//         situacao: situacao.options[situacao.selectedIndex].value
//     }
//     carros.push(carro);
//     console.table(carros);
//     document.getElementById("modelo").value = "";
//     document.getElementById("ano").value = "";

// }

// resolução professor

const carros = [];

function addCarro() {
  // entrada
  const modelo = document.getElementById("modelo");
  const ano = document.getElementById("ano");
  const cor = document.getElementById("cor");
  const situacao = document.getElementById("situacao");
  // console.log(modelo, ano, cor, situacao);
  console.log(modelo.value, ano.value, cor.value, situacao.value);
  // console.log(situacao);
  // console.log(situacao.options); // array
  // console.log(situacao.options.selectedIndex); // indice
  // console.log(situacao.options[situacao.options.selectedIndex].value);

  // processamento
  const carro = {
    modelo: modelo.value,
    ano: ano.value,
    cor: cor.value,
    situacao: situacao.value
  };

  console.log(carro);
  carros.push(carro); // adiciona no array

  // saida
  console.table(carros);
  const lista = document.getElementById("lista");
 
 /* modo nao eficiente de se resolver
  let array = [];
 
  // lista.innerHTML = ``;

  carros.forEach(function (carro) {
    // lista.innerHTML += `
    array.push(
      `<tr>
        <td>${carro.modelo}</td>
        <td>${carro.ano}</td>
        <td>${carro.cor}</td>
        <td>${carro.situacao}</td>
      </tr>`
    );
  })
  console.log(array);
  lista.innerHTML = array.join("");
}*/

  // exibir a tabela
  lista.innerHTML = carros
  // .filter(function (carro) {
  //   return carro.ano == "2015"
  // })
  .map(function (carro) {
    return  `<tr>
        <td>${carro.modelo}</td>
        <td>${carro.ano}</td>
        <td>${carro.cor}</td>
        <td>${carro.situacao}</td>
      </tr>`;
  })
  .join("");

  // limpar os campos
  modelo.value = "";
  ano.value = "";
  cor.value = "";
  // situacao.value = "";

  // dar foco no primeiro campo
  modelo.focus();

  function ordenar() {
    console.log("click");
    // lista.innerHTML = carros.sort();
  }
}

// AVALIACAO - Entrega dia 21
/*
1 - Fazer uma copia do exercicio da loja de carros
2 - adicionar uma coluna com um id (ao lado do modelo)
3 - Adicionar no formulario um campo para receber o preço
4 - Exibir uma coluna com o preco
5 - exibir o total de todos os veiculos cadastrados (requisito -> usar REDUCE)
*/
