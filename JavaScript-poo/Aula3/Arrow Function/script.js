// Estrutura
// argumentos => {corpo da função}

const soma = (n1,n22) => {
    return n1+n22;
}

console.log(soma(1,2));

// se tiver uma unica instrução
const multiplicacao = (n1,n2) => n1 * n2;
console.log(multiplicacao(2,2));

// retorno implícito
const x1 = () => 'retorno implicito';
console.log(x1());


// Funcionamneto do 'this'
// como o this herda as informações da função pai, assim não pé possível usá-lo numa arrow function

const carro = {
    modelo: 'hb20',
    marca: 'hyundai',
    nomeCompleto: function() {
        return `${this.modelo} ${this.marca}`;
    }
}

console.log(carro.nomeCompleto());

const carro1 = {
    modelo: 'hb20',
    marca: 'hyundai',
    nomeCompleto: () => {
        return `${this.modelo} ${this.marca}`;
    }
}

console.log(carro1.nomeCompleto());


