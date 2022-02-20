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
   
    // PROCESSAMENTO  do meu jeito
    // switch (operador.value) {
    //     case ">":
    //         comparacao = parseFloat(num1.value) > parseFloat(num2.value);
    //         break;
    //     case "<":
    //         comparacao = parseFloat(num1.value) < parseFloat(num2.value);
    //         break;
    //     case "!=":
    //         comparacao = parseFloat(num1.value) != parseFloat(num2.value);
    //         break;
    //     case "=":
    //         comparacao = parseFloat(num1.value) == parseFloat(num2.value);
    //         break;
    //     case ">=":
    //         comparacao = parseFloat(num1.value) >= parseFloat(num2.value);
    //         break;
    //     case "<=":
    //         comparacao = parseFloat(num1.value) <= parseFloat(num2.value);
    //         break;
    
    //     default:
    //         comparacao = "errou";
    //         break;
    // }


    // da forma que o professor fez em aula
    switch (operador.value) {
        case "MaiorQue":
            comparacao = num1.value > num2.value;
            break;
        case "MenorQue":
            //comparacao = eval(num1.value, n2.value);
            break;
        case "MaiorOuIgual":
            comparacao = num1.value >= num2.value;
            break;
        case "MenorOuIgual":
            comparacao = num1.value <= num2.value;
            break;
        case "DiferenteDe":
            comparacao = num1.value != num2.value;
            break;
        case "IgualA":
            comparacao = num1.value == num2.value;
            break;
    
        default:
            comparacao = "errou";
            break;
    }


    // SAÍDA
    document.getElementById("result").value = comparacao;
}
