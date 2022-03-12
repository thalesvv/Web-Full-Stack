/*
Crie uma classe Sorteio que tem o número de pessoas inscritas e um método
sorteiaPremio que sorteia um número que corresponderá ao número de inscrição
do participante e declara o vencedor.
*/

class Sorteio{
    constructor(participantes){
        this.participantes = participantes;
    }
    sorteiaPremio(){
        for (let i = 0; i < this.participantes; i++) {
          console.log( `O ganhador do sorteio é o participante N°${Math.floor(Math.random()*this.participantes + 1)}`);
        }
        
    }
}

const s1 = new Sorteio(44);
// console.log(Sorteio('Thales', 222));
console.log(s1);
console.log(s1.sorteiaPremio());
console.log(s1.numeroSorteado);
console.log(typeof(numeroSorteado));