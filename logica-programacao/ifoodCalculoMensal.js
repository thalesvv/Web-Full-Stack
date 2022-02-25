/*
Paulo quer fazer entregas com seu carro e precisa saber se vale a pena de acordo com o custo.
Seu carro possui um taque de 40 litros de gasolina.
O carro faz 12km/L de gasolina em media
A distancia entre sua casa e o local onde retira as encomendas eh de 10km.
As entregas em media variam entre 5 e 15km de distancia do centro de distribuicao.
ele vai receber entre 5 e 10 encomendas por dia para entregar.
A valor da gasolina esta R$ 5,50
Dado essas condicoes faca um programa que calcule o gasto mensal

para mais exercicios
https://www.hackerrank.com/ 
*/



function custos() {

    // dados fixos
    const diasTrabalhados = 20; //dias
    const precoGas = 5.5;
    const volumeTanqueGas = 40.0; // litros
    const distIdaVolta = 20.0; //km
    const kmLitroDoCarro = 12.0;

    // dados variaveis
    let totalValorGastoMes = 0.0;

    // dados de aquisição;
    let numEntregas = parseFloat(document.getElementById("numEntregas").value); // por semana
    let distEntregas = parseFloat(document.getElementById("distEntregas").value);


    // analise
    const totalKmDia = (numEntregas * (distEntregas *2)) + distIdaVolta;
    const totalKmMes = totalKmDia * diasTrabalhados;
    const custoGasIni = volumeTanqueGas * precoGas;
    const quantoOCarroAnda = volumeTanqueGas * kmLitroDoCarro; // Km

    // if (totalKmDia > quantoOCarroAnda) {
    //     const abasteceu = (totalKmDia - quantoOCarroAnda)/kmLitroDoCarro; // Litros
    //     const texto = (`Teve que abastecer ${abasteceu} litros de gasolina a mais por dia.`);
    //     document.getElementById("abasteceuDia").innerHTML = texto;
    // }
    // else if (totalKmDia <= quantoOCarroAnda ) {
    //     const restouCombustivel = volumeTanqueGas - (totalKmDia/kmLitroDoCarro); // Litros
    //     const texto = (`Sobraram ${restouCombustivel} litros de gasolina por dia.`);
    //     document.getElementById("abasteceuDia").innerHTML = texto;
    // }

    totalValorGastoMes = ((totalKmMes/quantoOCarroAnda) * precoGas) + custoGasIni;

    const ganhoPorEntrega = parseFloat(document.getElementById("ganhoPorEntrega").value);
    const lucroOuPreju = (ganhoPorEntrega * numEntregas * diasTrabalhados) - totalValorGastoMes;
    
    if (lucroOuPreju >= 0) {
        const respostaFinal = `Lucro de ${lucroOuPreju} reais no mês `;
        document.getElementById("resultado").innerHTML = respostaFinal;
    }
    else {
        const respostaFinal = `Prejuízo de ${lucroOuPreju} reais no mês `;
        document.getElementById("resultado").innerHTML = respostaFinal;
    }
    

    console.log("totalKmDia", totalKmDia);
    console.log("totalKmMes", totalKmMes);
    console.log("custoGasInicial", custoGasIni);
    console.log("quantoOCarroAnda", quantoOCarroAnda);
    console.log("totalValorGastoMes", totalValorGastoMes);

}

// para terminar em casa
// queremos quanto vai ser gasto no mes
// utilize a função Randon - https://www.w3schools.com/js/tryit.asp?filename=tryjs_random_0_9

