const _velocidade = Symbol("Velocidade");

class Carro {
  constructor(modelo) {
    this.modelo = modelo;
    this[_velocidade] = 0;
  }

  get velocidade() {
    return this[_velocidade];
  }

  set velocidade(value) {
    if (typeof value !== "number") return;
    if (value >= 100 || value <= 0) return;

    this[_velocidade] = value;
  }

  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  freiar() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const car1 = new Carro("Honda");
car1.velocidade = 80;
car1.acelerar();
car1.acelerar();
car1.acelerar();
car1.acelerar();
console.log(car1.velocidade);

// class Pessoa {
//   constructor(nome, sobrenome) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//   }

//   get nomeCompleto() {
//    return `${this.nome} ${this.sobrenome}`;
//   }

//   set nomeCompleto(valor) {
//     valor = valor.split(" ");
//     this.nome = valor.shift();
//     this.sobrenome = valor.join(" ");
//   }
// }

// const pessoa1 = new Pessoa("Davi", "Fernandes");
// pessoa1.nomeCompleto = "Davi Fernandes de Lima";
// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
