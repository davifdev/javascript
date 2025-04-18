class DispisitivosEletronicos {
  constructor(name) {
    this.name = name;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log("O dispositivo já está ligado!");
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log("O dispositivo já está desligado!");
    }

    this.ligado = false;
  }
}

class Tablet extends DispisitivosEletronicos {
  constructor(name, color, price) {
    super(name);
    this.color = color;
    this.price = price;
  }
}

const tablet = new Tablet("Samsumg Pad", "Preto", 5000);
tablet.ligar();
tablet.desligar();
console.log(tablet); 

class Smartphone extends DispisitivosEletronicos {
  constructor(name, color, price) {
    super(name);
    this.color = color;
    this.price = price;  
  }
}

const iphone = new Smartphone("Iphone 16", "Cinza espacial", 3000);
console.log(iphone);