class Pessoa{
    constructor(nome, idade){
        this.nome = nome,
        this.idade = idade
    }
    apresentar (){
        return `O meu nome é ${this.nome} e tenho ${this.idade} anos.`
        }
}

/*
// instanciar a classa Pessoa
const p1 = new Pessoa('Thales', 28);
console.log(p1);
console.log(p1.apresentar());
console.log(p1.nome);
console.log(JSON.stringify(p1));
console.log(Object.keys(p1));
console.log(Object.values(p1));
*/

//Transformar alguns em privado, temos que fazer a declaração do que será privado logo na seguencia da classe, antes do construtor
class PessoaPrivada{
    #nome 
    #idade
    email
    constructor(nome, idade, email){
        this.#nome = nome,
        this.#idade = idade,
        this.email = email
    }
    get nome() {
        return this.#nome;
    }
    set nome(u){
        this.nome = u;
    }
    apresentar (){
        // sem a # ele consegue acessar os valores
        // return `O meu nome é ${this.#nome} e tenho ${this.#idade} anos.` 
        return `O meu nome é ${this.nome} e tenho ${this.idade} anos.`
        }
    // para resolver o caso do Json
    toJSON() {
        return{
            nome: this.nome,  // ACESSANDO ATRAVES DO GETTER
            idade: this.#idade, // acessando a PROPRIEDADE PRIVADA
            email: this.email
        }
    }
}

// instanciar a classa Pessoa
const p2 = new PessoaPrivada('Jaque', 30, 'jaque@letscode.com.br');

console.log(p2.nome);
console.log(p2);
console.log(p2.email);
console.log(p2.apresentar());

console.log(JSON.stringify(p2));
console.log(Object.keys(p2));
console.log(Object.values(p2));
