function Product(name, price, stock) {
  this.name = name;
  this.price = price;
  this.stock = stock;
}

Product.prototype.discount = function () {
  this.price -= 10;
};

Product.prototype.increase = function () {
  this.price += 10;
};

function Camisa(name, price, stock, color) {
  Product.call(this, name, price, stock);
  this.color = color;
}

Camisa.prototype = Product.prototype;
Camisa.prototype.constructor = Camisa;

const camisa = new Camisa("Polo Seven", 200, 500, "preta");
camisa.discount();
console.log(camisa);

function Caderno(name, price, stock, folha) {
  Product.call(this, name, price, stock);
  this.folha = folha;
}

Caderno.prototype.discount = function (percentage) {
  this.price = this.price - this.price * (percentage / 100);
};

Caderno.prototype.constructor = Caderno;

const caderno = new Caderno("Pianini", 30, 400, "A4");
caderno.discount(50);
console.log(caderno);
