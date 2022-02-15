console.log("=== CALCULADORA ===");

function calcular() {
    // entrada (captura) de dados
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    console.log(num1,typeof num1);
    console.log(num2, typeof num2);

    // processamento
    const total = num1 + num2; // adição 
    console.log(total, typeof total);

    // saída dados
    document.getElementById("result").value = total;
}