/*

ENUNCIADO 1

Crie um objeto de nome aluno e adicione as seguintes propriedades:
    nome, matricula e idade.
Crie neste mesmo objeto aluno, uma função que receba como parâmetro
    o curso do aluno, o parâmetro deverá ter um default, adicione
    esse parâmetro recebido em uma propriedade do objeto aluno.

Retorne o objeto aluno ANTES da chamada da função.

Retorne o objeto aluno APÓS a chamada da função
*/

let curso = "";

const nomeAluno = {
    nome: 'Thales',
    matricula: '137695',
    idade: 28,
    recebeCurso: function (idCurso = "Nenhum"){
        return this.curso = idCurso;
    }
}   

console.log(nomeAluno);
nomeAluno.recebeCurso("Física");
console.log(nomeAluno)