function Product(name, price, storage) {
  this.name = name;
  this.price = price;
  this.storage = storage;
}

Product.prototype.discount = function (percentage) {
  this.price = this.price - this.price * (percentage / 100);
};

Product.prototype.increase = function (percentage) {
  this.price = this.price + this.price * (percentage / 100);
};

const camisa = new Product("Camisa", 50.5, 600);
console.log(camisa);
camisa.discount(30);
console.log(camisa.price);

const p2 = {
  name: "Carregador",
  price: 50.5,
};

Object.setPrototypeOf(p2, Product.prototype);
console.log(p2);

const p3 = Object.create(Product.prototype, {
  name: {
    enumerable: true,
    writable: false,
    configurable: false,
    value: "Relógio",
  },
  price: {
    enumerable: true,
    writable: false,
    configurable: false,
    value: 50.5,
  },
});

console.log(p3);
