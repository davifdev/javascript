const pessoas = [
  { id: 3, name: "Davi" },
  { id: 2, name: "Robson" },
  { id: 1, name: "Camila" },
];

const novasPessoas = new Map();

for (let pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas);

for (let [uid, { id, name }] of novasPessoas) {
  console.log(uid, id, name);
}
