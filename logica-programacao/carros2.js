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
  carros.push(carro);

  // saida
  console.table(carros);
}