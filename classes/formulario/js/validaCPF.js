class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      enumerable: false,
      writable: false,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }

  eRepetido() {
    const repetido = this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length);
    return repetido === this.cpfLimpo;
  };

  valida() {
    if (!this.cpfLimpo) return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (typeof this.cpfLimpo !== "string") return false;
    if (this.eRepetido()) return false;
    return this.cpfLimpo === this.geraCPF();
  }

  geraCPF() {
   const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
   const primeiroDigito = this.geraDigito(cpfSemDigitos);
   const segundoDigito = this.geraDigito(cpfSemDigitos + primeiroDigito);
   const cpfGerado = `${cpfSemDigitos}${primeiroDigito}${segundoDigito}`;
   return cpfGerado;
  }

  geraDigito(cpf) {
    let montante = 0;
    let reverso = cpf.length + 1;

    for (let num of cpf) {
      montante += num * reverso;
      reverso--;
    }

   const digito = montante % 11;

   return digito < 2 ? 0 : 11 - digito;
  }
 
}

const validaCPF = new ValidaCPF("709.576.641-09");

