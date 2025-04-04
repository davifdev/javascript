document.addEventListener("click", (event) => {
  const element = event.target;
  const tag = element.tagName.toLowerCase();

  if (tag === "a") {
    event.preventDefault();
    carregaPagina(element);
  }
});

async function carregaPagina(element) {
  const href = element.getAttribute("href");
  try {
    const response = await fetch(href);
    const html = await response.text();
    carregaResultado(html);
  } catch (err) {
    console.error(err);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}
