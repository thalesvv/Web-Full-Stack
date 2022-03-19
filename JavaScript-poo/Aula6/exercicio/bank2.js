/*
- Crie um método de Leasing para o cliente
considerando as seguintes condições:
- Se cliente PJ, considerar Juros diário de 1%
- Se cliente PF, considerar juros diário de 0.5 %

- Sempre que o usuário for fazer um saque, pagar uma conta, ou realizar 
transferência e o saldo disponível em conta for menor que o valor da operação,  
verificar se o mesmo quer fazer uso do Leasing, se sim, liberar o saque e informar o 
valor negativo e a taxa de juros a ser aplicada.

- Implementar um método que calc
- Implementar um método que calcule e armazene o saldo do juros do leasing da conta, 
sendo separado por data, para ser possível ver o quanto de juros de leasing o cliente 
esta acumulando diariamente.
[Saldo negativo:
Juros Diário:
Data:
Juros Total Acumulado:]

OBS: Sempre que o cliente entrar no cheque especial o metodo precisa ser invocado
- Crie um método que irá verificar se o cliente está com cheque especial, 
e se ocorrer um depósito em conta, é necessário abater o valor do cheque especial
 */

  class Conta {
    #saldo
  
    constructor(cliente, conta, agencia, saldo = 0) {
      this.cliente = cliente;
      this.conta = conta;
      this.agencia = agencia;
      this.#saldo = saldo;
      this.lan = []
    }
  
    sacar(dinheiro) {
      if (dinheiro > this.#saldo) {
        return 'Saldo insuficiente!';
      }
      this.#saldo -= dinheiro;
  
      const tipo = 'Saque';
      this.lan.push(this.lancamentos(this.cliente, tipo, dinheiro, this.#saldo));
  
    }
  
    depositar(dinheiro) {
      this.#saldo += dinheiro;
  
      const tipo = 'Depósito';
      this.lan.push(this.lancamentos(this.cliente, tipo, dinheiro, this.#saldo));
    }
  
    // transferir(conta, dinheiro) {
    //   if (dinheiro > this.#saldo || dinheiro > this.limite) {
    //     return 'Saldo insuficiente!';
    //   }
    //   this.sacar(dinheiro);
    //   conta.depositar(dinheiro);
    // }
  
    lancamentos(nome, operacao, valor, saldo) {
      const data = `${new Date().getDate()}/${('0' + (new Date().getMonth() + 1)).slice(-2)}/${new Date().getFullYear()}`; // DD/MM/AA
      const hora = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`; // HH/MM/SS
  
      return {
        cliente: nome,
        operacao: operacao,
        valor: `R$${valor.toFixed(2)}`,
        saldo: `R$${saldo.toFixed(2)}`,
        horario: `${data} ${hora}`,
      }
    }
  
    pag(vencimento, pagamento) {
      const data1 = new Date(vencimento);
      const data2 = new Date();
      const tempoVencimento = data1.getTime() - data2.getTime();
      let diasVencimento = Math.ceil(tempoVencimento / (1000 * 3600 * 24)) - 1;
  
  
      if (diasVencimento < 0) {
        if (diasVencimento === 1) {
          pagamento += pagamento * 0.01;
        } else if (diasVencimento === 2) {
          pagamento += pagamento * 0.025;
        } else {
          pagamento += (1 + 0.025) ** diasVencimento;
        }
  
        return `O valor que você deve pagar é R$${pagamento.toFixed(2)}, seu boleto está ${Math.abs(diasVencimento)} dias atrasados.`;
      }
  
  
      try {
        if (pagamento > this.#saldo) {
          throw new Error('Saldo insuficiente!')
        }
  
        this.#saldo -= pagamento;
        return `O valor que você deve pagar é R$${pagamento.toFixed(2)}.`
  
      } catch (e) {
        return e.message;
      }
    }
  }
  
  class PessoaFisica extends Conta {
    constructor(cliente, conta, agencia, saldo, cpf, rg) {
      super(cliente, conta, agencia, saldo);
      this.cpf = cpf;
      this.rg = rg;
    }
  }
  
  class PessoaJuridica extends Conta {
    constructor(cliente, conta, agencia, saldo, cnpj) {
      super(cliente, conta, agencia, saldo);
      this._cnpj = cnpj;
    }
  
    get cnpj() {
      return this._cnpj;
    }
  
  }
  
  // const cpf = new PessoaFisica('Bruna', 1234, 098, 200, 12345678900);
  // const cnpj = new PessoaJuridica('Bruna', 1234, 098, 200, 1234567809011);
  
  const conta = new Conta('Fulano de Tal', 1234, 123, 400)
  
  conta.depositar(500)
  conta.depositar(500)
  conta.sacar(500)
  console.log(conta.lan)
  console.log(conta.pag('04/12/2022', 1500))