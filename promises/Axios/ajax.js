axios.get("pessoas.json")
  .then((response) => showPersons(response.data));

function showPersons(data) {
  const table = document.createElement("table");
  
  data.forEach((pessoa) => {
    const tr = document.createElement("tr");

    let td = document.createElement("td");
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = pessoa.idade;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = pessoa.salario;
    tr.appendChild(td);

    table.appendChild(tr);
  });

  const resultado = document.querySelector(".resultado");
  resultado.appendChild(table);
}
