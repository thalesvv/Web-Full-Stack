console.log("boneco Completo")
console.log("////////boneco.js ///////\n");

let forca = {
    tipo_haste: "madeira",
    tipo_corda: "nylon"
}

let boneco = {
    membros:[
        "cabeça",
        "braço esquerdo",
        "braço direito",
        "tronco",
        "perna esquerda",
        "perna direita"
    ],
    nome: "Joosisclayson",
    altura: 1.52,
    peso: 60
};

console.log(boneco);
console.log(forca);

// Exportação via CommonJS
module.exports = [boneco, forca, 1, 2, 3, 4, 56]