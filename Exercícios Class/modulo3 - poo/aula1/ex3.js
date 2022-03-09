function Aluno(nome, idade, email, matricula, curso) {
    this.nome = nome,
    this.idade = idade,
    this.email = email,
    this.matricula = matricula,
    this.curso = curso
};

Aluno.prototype.getCurso = function () {
    return this.curso;
}


// instanciamento
const aluno1 = new Aluno(
    "Thales",
    28,
    "thales.v.vieira@gmail.com",
    123456,
    "POO"
);

//printei o resultado
console.log(aluno1);
console.log(aluno1.getCurso())