function comparar(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let comparacao = num1 > num2;
    document.getElementById("result").value = comparacao;
}