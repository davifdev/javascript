function Product(name, price, storage) {
  let valueStorage = storage;

  Object.defineProperty(this, "name", {
    enumerable: true,
    configurable: false,
    writable: false,
    value: name,
  });

  Object.defineProperty(this, "price", {
    enumerable: true,
    configurable: false,
    writable: false,
    value: price,
  });

  Object.defineProperty(this, "storage", {
    enumerable: true,
    configurable: false,
    get: function () {
      return valueStorage;
    },

    set: function (value) {
      if (typeof value !== "number") {
        console.log("Bad Value!");
        return;
      }
      valueStorage = value;
    },
  });
}

const product = new Product("Caderno", 19.9, 500);
product.storage = "600";
console.log(product.storage);

function car(brand) {
  return {
    get brand() {
      return brand;
    },
    set brand(value) {
      brand = value;
    },
  };
}

const brandCar = car("Fiat");
console.log(brandCar.brand);
