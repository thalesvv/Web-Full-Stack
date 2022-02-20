console.log("=== CALCULADORA IMC ===");

function calcular() {
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const imc = peso / (altura ** 2);
    let texto = null;


    document.getElementById("resultado").value = imc;

    if (imc < 18.5) {
        texto = "Magreza";
    } else if (imc >= 18.5 && imc < 25) {
        texto = "Saudável";
    } else if (imc >= 25 && imc < 30) {
        texto = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        texto = "Obesidade Grau 1";
    } else if (imc >= 35 && imc < 40) {
        texto = "Obesidade Grau2 (Severa)";
    } else {
        texto = "Obesidade grau 3 (Mórbida)";
    }
    
    // olhar a solução da bruna no git hub
    // https://github.com/Luvlore/lets_code/tree/master/logica-da-programacao/imc
    // esta solução abaixo, está errada
    document.getElementById("suaSaude").value = write(texto);
}