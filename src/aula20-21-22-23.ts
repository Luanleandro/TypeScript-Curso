class Conta {
  private saldoConta: number;
  protected conta: number;
  protected titular: string;
  constructor(titular: string) {
    this.conta = this.geradorNumeroConta();
    this.titular = titular;
    this.saldoConta = 0;
  }
  private geradorNumeroConta(): number {
    return Math.floor(Math.random() * 100000);
  }
  protected info() {
    console.log(`Titular: ${this.titular}`);
    console.log(`Conta: ${this.conta}`);
  }
  saldo() {
    return `Saldo da conta: R$${this.saldoConta}`;
  }
  protected deposito(valor: number) {
    this.saldoConta += valor;
  }

  protected saque(valor: number) {
    if (valor <= 0) {
      console.log('Você não pode sacar nada ou valores negativos.');
    }
    if (valor <= this.saldoConta) {
      this.saldoConta -= valor;
    } else {
      console.log('Saldo insuficiente');
    }
  }
}

class ContaPF extends Conta {
  cpf: number;
  constructor(titular: string, cpf: number) {
    super(titular);
    this.cpf = cpf;
  }

  info() {
    console.log('Tipo da conta: PF');
    super.info();
    console.log(`CPF:${this.cpf}`);
    console.log(`------------------`);
  }

  deposito(valor: number) {
    if (valor > 2000) {
      console.log('Você não pode depositar esse valor');
    } else {
      super.deposito(valor);
    }
  }

  saque(valor: number) {
    if (valor > 1000) {
      console.log('Você não pode depositar esse valor');
    } else {
      super.saque(valor);
    }
  }
}

class ContaPJ extends Conta {
  cnpj: number;
  constructor(titular: string, cnpj: number) {
    super(titular);
    this.cnpj = cnpj;
  }
  deposito(valor: number) {
    if (valor > 50000) {
      console.log('Você não pode depositar esse valor');
    } else {
      super.deposito(valor);
    }
  }

  saque(valor: number) {
    if (valor > 25000) {
      console.log('Você não pode depositar esse valor');
    } else {
      super.saque(valor);
    }
  }

  info() {
    console.log('Tipo da conta: PJ');
    super.info();
    console.log(`CNPJ:${this.cnpj}`);
    console.log(`------------------`);
  }
}

const conta1 = new ContaPF('Luan', 47589028);
const conta2 = new ContaPJ('impacta', 5558490);

conta1.info();
conta2.info();

conta1.deposito(500);
conta1.deposito(2001);
console.log(conta1.saldo());

conta2.deposito(25000);
console.log(conta2.saldo());

conta1.saque(250);
console.log(conta1.saldo());

conta2.saque(5000);
console.log(conta2.saldo());

conta2.deposito(52000);
conta2.saque(0);
