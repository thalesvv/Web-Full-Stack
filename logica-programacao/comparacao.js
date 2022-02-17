/*
function comparacao(){
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const comparacao = parseFloat(num1.value) > parseFloat(num2.value);
    document.getElementById("result").value = comparacao;
}
*/


function comparacao(){

    // AQUISIÇÃO
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const operador = document.getElementById("operador");
    let comparacao = null;
   
    // PROCESSAMENTO
    switch (operador.value) {
        case ">":
            comparacao = parseFloat(num1.value) > parseFloat(num2.value);
            break;
        case "<":
            comparacao = parseFloat(num1.value) < parseFloat(num2.value);
            break;
        case "!=":
            comparacao = parseFloat(num1.value) != parseFloat(num2.value);
            break;
        case "==":
            comparacao = parseFloat(num1.value) == parseFloat(num2.value);
            break;
        case ">=":
            comparacao = parseFloat(num1.value) >= parseFloat(num2.value);
            break;
        case "<=":
            comparacao = parseFloat(num1.value) <= parseFloat(num2.value);
            break;
    
        default:
            comparacao = "errou";
            break;
    }

    // SAÍDA
    document.getElementById("result").value = comparacao;
}
