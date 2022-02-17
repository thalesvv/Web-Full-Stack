console.log("=== FAIXA ETÁRIA ===")

// Aquisição


// Processamento


/*
function faixaEta() {
    const idade =  parseInt(document.getElementById("idade").value);
    let texto = null;
    if (idade >= 18) {
        texto = "você é um adulto";
        document.getElementById("result").value = texto;
    } else {
        texto = "você não é um adulto";
        document.getElementById("result").value = texto;
    }
    console.log(idade, typeof idade);
}
*/

function faixaEta() {
    const idade =  parseInt(document.getElementById("idade").value);
    let texto = null;
    
    if (idade >= 0 && idade <= 12) {
        texto = "você é uma criança";
        document.getElementById("result").value = texto;
    } else if (idade >= 13 && idade <= 17) {
        texto = "você é um adolescente";
        document.getElementById("result").value = texto;
    } else if (idade >= 18 && idade <= 64) {
        texto = "você é um adulto";
        document.getElementById("result").value = texto;
    } else if (idade >= 65) {
        texto = "você é um idoso";
        document.getElementById("result").value = texto;
    } else {
        texto = "não se aplica"
        document.getElementById("result").value = texto;
    }

    console.log(idade, typeof idade);
}