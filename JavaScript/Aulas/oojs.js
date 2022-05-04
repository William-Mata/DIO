class ContaBancaria{

    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
    
        if(valor > 0 && this._saldo >= valor){
            this._saldo -= valor;
            console.log("Saque efetuado, seu saldo atual é: " + this._saldo);

        }else{
            console.log("Seu saldo é insulficiente.");
        }
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
            console.log("Deposito efetuado, seu saldo atual é: " + this._saldo);
        }
    }
}


class ContaCorrente extends ContaBancaria{

    constructor(agencia, numero, saldo, cartaoCredito){
        super(agencia, numero, "corrente", saldo);
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(cartaoCredito){
        this._cartaoCredito = cartaoCredito;
    }
}


class ContaPoupanca extends ContaBancaria{

    constructor(agencia, numero, saldo){
        super(agencia, numero, "poupanca", saldo);
    }
}

class ContaUniversitaria extends ContaBancaria{

    constructor(agencia, numero, saldo){
        super(agencia, numero, "universitaria", saldo);
    }

    
    sacar(valor){
        if(valor < 500){
            this._saldo -= valor;
            console.log("Saque efetuado, seu saldo atual é: " + this._saldo);

        }else{
            console.log("Para esse tipo de conta só é permitido saca até 500 reais.")
        }
    }
}

var contaC = new ContaCorrente(2122, 000551231231, 0, 1412412421412);


contaC.depositar(5000);
contaC.sacar(700);

console.log(contaC);


