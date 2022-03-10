/*

Crie um objeto de nome Ave e adicione um atributo de nome espécie.

Dentro do objeto Ave crie uma função, que retorno o atributo espécie.

Retorne o objeto invocando a função criada.

Após o retorno do objeto invocando a função, crie um objeto de nome
    Peixe e através do bind faça ele retornar a espécie do objeto peixe.

*/

const ave = {
    especie: "Elanus leucurus",
    pegaEspecie: function (){
        return this.especie;
    }
}

console.log(ave.pegaEspecie());

const peixe = {
    especie: "Corydoras spp"
}

// METODO 1
// const especiePeixe = ave.pegaEspecie.bind(peixe);
// console.log(especiePeixe());

// METODO 2
console.log(ave.pegaEspecie.bind(peixe)())