

function qualquercoisa(){
    let num = 1;
    return num.toUpperCase();
}

/*
try {
    // invocando a função apenas
    qualquercoisa();
    console.log("quero falzer algo");
} catch (error) {
    console.log("entrei no catch")
    console.log(error)
    console.log(error.message)
    console.log(error.name)
}

*/

// criando varias instrucoes de try catch

function funcaoFunciona(){
    console.log("Turma 837 # Lets Code");
}

/*
try {
    qualquercoisa();
    console.log("Dando sequencia no codigo");
} catch (err) {
    console.log(err);
}
try {
    console.log("mesmo o try acima dando erro, este funciona");
    funcaoFunciona()
} catch (error) {
    console.log(error)
}
*/

/*
try {
    // qualquercoisa();
    funcaoFunciona();
    console.log("Dando sequencia no codigo");
} catch (err) {
    console.log(err);
}
finally{
    console.log("Final do try ou do catch");
}
*/

function ValidaErro(mensagemErro){
    this.erro = mensagemErro;
}


function validaString(nome){
    try {
        if(typeof nome != 'string'){
            // o throw é uma declaração que retorna algo e o código é interrompido no seu escopo 
            // throw new TypeError("O valor do nome do parâmetro deve ser string")
            throw new ValidaErro("Erro no formato")
            console.log("dar sequencia no codigo") // note que o VSCode ja mostra que ele n funciona por estar apos o throw
        } else{
            console.log(`Olá ${nome}`);
        }

    } catch (e) {
        console.log(e);
    }
}

validaString(11)
