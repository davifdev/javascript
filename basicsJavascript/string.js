// As strings são uma cadeia de caracteres e elas são indexadas

//                012345
const userName = "Davi Fernandes";
const age = 24;

// charAt()
console.log(userName.charAt(2));

// concat()
console.log(userName.concat(24));

// indexOf()
console.log(userName.indexOf("a"));

// lasIndexOf()
console.log(userName.lastIndexOf("a"));

// replace()
console.log(userName.replace(/\D+/g, ""));

// slice()
console.log(userName.slice(0, -1));

// split()
console.log(userName.split(" "))

// toLowerCase()
console.log(userName.toLowerCase());

// toUpperCase()
console.log(userName.toUpperCase());

// endsWith()
console.log(userName.endsWith("s"));
