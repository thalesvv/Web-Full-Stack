/*
polimorfismo e o pricipio pelo qual duas ou mais classes 
derivadas da mesma superclasse podem invocar metodos que 
tem a msm assinatura mas comportamentos distintos
*/

class Pessoa {
    constructor(nome, idade, endereco){
        this.nome = nome,
        this.idade = idade,
        this.endereco = endereco
    }
    cumprimentaPessoa = () => `Olá ${this.nome}`
}

class PessoaFisica extends Pessoa {
    constructor(nome, idade, endereco, rg){
        super(nome, idade, edereco);
            this.rg = rg

    }
    cumprimentaPessoa = () =>  `Olá ${this.nome} e RG: ${this.rg}`
}


const pessoaNormal = new Pessoa(
    "Jaque",
    28,
    "xpto"
)
console.log(pessoaNormal.cumprimentaPessoa())

const PessoaFisica = new Pessoa(
    "Thales",
    28,
    "xpto"
)

console.log(PessoaFisica)


