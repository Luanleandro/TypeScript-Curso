class Conta {
  conta: number;
  titular: string;
  constructor(titular: string) {
    this.conta = this.geradorNumeroConta();
    this.titular = titular;
  }

  geradorNumeroConta() {
    return Math.floor(Math.random() * 100000);
  }
}

class ContaPF extends Conta {
  cpf: number;
  constructor(titular: string, cpf: number) {
    super(titular);
    this.cpf = cpf;
  }
}

class ContaPJ extends Conta {
  cnpj: number;
  constructor(titular: string, cnpj: number) {
    super(titular);
    this.cnpj = cnpj;
  }
}

const conta1 = new ContaPF('Luan', 47589028);
const conta2 = new ContaPJ('impacta', 5558490);

console.log(conta1.conta);
console.log(conta2.conta);
