const request = (obj) => {
  const xhr = new XMLHttpRequest();
  xhr.open(obj.method, obj.url, true);
  xhr.send();

  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      obj.sucess(xhr.responseText);
    } else {
      obj.error(xhr.statusText);
    }
  });
};

document.addEventListener("click", (event) => {
  const element = event.target;
  const tag = element.tagName.toLowerCase();

  if (tag === "a") {
    event.preventDefault();
    carregaPagina(element);
  }
});

function carregaPagina(element) {
  const href = element.getAttribute("href");

  const objConfig = {
    method: "GET",
    url: href,
    sucess(response) {
      carregaResultado(response);
    },
    error(errorText) {
      console.log(errorText);
    },
  };

  request(objConfig);
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}
