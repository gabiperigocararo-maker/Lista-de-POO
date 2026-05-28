class Conta {
    #saldo = 0

    get saldo(){
        return this.#saldo;
    }

    set saldo (valor) {
        if (valor >= 0) {
            this.#saldo = valor;
        }
    }
}