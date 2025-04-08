axios.get("pessoas.json").then((response) => showPerson(response.data));

function showPerson(data) {
  const table = document.createElement("table");

  data.forEach((person) => {
    const tr = document.createElement("tr");

    let td = document.createElement("td");
    td.innerHTML = person.nome;
    tr.appendChild(td);

    td = document.createElement("td")
    td.innerHTML = person.idade;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = person.salario;
    tr.appendChild(td);
    
    table.appendChild(tr);
  });

  const result = document.querySelector(".resultado");
  result.appendChild(table);
}
