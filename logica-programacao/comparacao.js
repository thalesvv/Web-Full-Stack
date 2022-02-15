function comparacao(){
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const comparacao = parseFloat(num1.value) > parseFloat(num2.value);
    document.getElementById("result").value = comparacao;
}


// usar a função switch para ajustar para qualquer tipo de comparação 