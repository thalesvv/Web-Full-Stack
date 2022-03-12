/*
Crie uma classe Restaurante com as propriedades cidade, delivery
(verdadeiro ou falso), pedidosPendentes e tempo de entrega estimado
(calculado com base nos pedidos pendentes, sendo 10 + 2 * pedidosPendentes em minutos).
Os restaurantes devem ser capazes de realizar entregas desde que o cliente esteja
localizado na mesma cidade e, para isso, precisamos de um método entregaPedido que devolve
como resultado se é possível realizar a entrega para um determinado cliente ou não e,
em caso positivo, o tempo estimado de entrega
*/

// Meu método
/*

class Restaurante{
    #cidade
    #delivery
    #pedidosPendentes
    #tempoEntregaEstimado
    constructor(cidade, delivery=false, pedidosPendentes=0, tempoEntregaEstimado){
        this.#cidade = cidade;
        this.#delivery = delivery;
        this.#pedidosPendentes = pedidosPendentes;
        this.#tempoEntregaEstimado = 10 + (this.#pedidosPendentes*2)
    }
    fazEntrega(){
        if (this.#cidade == 'Mogi Mirim') {
            this.#delivery = true;
            return `A entrega é ${this.#delivery}, então o tempo previsto é de ${this.#tempoEntregaEstimado}`;
        }
        else {
            return `Esse Restaurante não atende a sua cidade!`
        }
    }
}

console.log(Restaurante.tempoEntregaEstimado)
const r1 = new Restaurante('Mogi Mirim', 'levar à casa', 3);

console.log(r1);
// console.log(Restaurante);

console.log(r1.cidade)
console.log(r1.fazEntrega())
console.log(r1.tempoEntregaEstimado)

*/

// MÉTODO PROFESSORA
// Sem variáveis privados
/*
class Restaurante {
    constructor(nome, cidade, delivery = false, pedidosPendentes = 0){
        this.nome = nome,
        this.cidade = cidade,
        this.delivery = delivery,
        this.pedidosPendentes = pedidosPendentes,
        this.tempoEntregaEstimado = 10 + 2 * this.pedidosPendentes
    }
    entregaPedido(cidadeCliente){
        if(cidadeCliente != this.cidade){
            return 'Entrega não pode ser realizada!'
        }

        // acrescentando sempre que incovar o método entrega pedido
        this.pedidosPendentes += 1;
        this.tempoEntregaEstimado = 10 + 2 * this.pedidosPendentes;

        // retorno a mensagem do tempo estimado
        return `Tempo de entrega estimado: ${this.tempoEntregaEstimado}`
    }
}

const churrascaria = new Restaurante('João e Maria','SP', true, 1);

console.log(churrascaria.entregaPedido("SP"))
console.log(churrascaria.entregaPedido("SP"))
console.log(churrascaria.entregaPedido("SP"))
console.log(churrascaria.entregaPedido("SP"))
console.log(churrascaria.entregaPedido("RJ"))

*/

// Utilizando variáveis privadas
class RestaurantePrivado {
    #tempoEntregaEstimado
    constructor(nome, cidade, delivery = false, pedidosPendentes = 0, numeroPedido){
        this.nome = nome,
        this.cidade = cidade,
        this.delivery = delivery,
        this.pedidosPendentes = pedidosPendentes,
        this.#tempoEntregaEstimado = this.#formulaTempoEntrega(),
        this.numeroPedido = 0
    }
    entregaPedido(cidadeCliente){
        if(cidadeCliente != this.cidade){
            return 'Entrega não pode ser realizada!'
        }

        // acrescentando sempre que incovar o método entrega pedido
        this.pedidosPendentes += 1;
        this.#tempoEntregaEstimado = 10 + 2 * this.pedidosPendentes;

        // retorno a mensagem do tempo estimado
        return `Tempo de entrega estimado: ${this.#tempoEntregaEstimado}`
    }
    #formulaTempoEntrega = () => {
        return 10 + 2 * this.pedidosPendentes;
    }
    iniciarPedido(){
        return this.numeroPedido += 1;
    }
}

const churrascariaPrivado = new RestaurantePrivado('João e Maria','SP', true, 1, 'teste');

console.log(churrascariaPrivado)
console.log(churrascariaPrivado.iniciarPedido())
console.log(churrascariaPrivado.iniciarPedido())
console.log(churrascariaPrivado.iniciarPedido())