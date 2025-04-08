document.addEventListener("click", (event) => {
  const element = event.target;
  const tag = element.tagName.toLowerCase();

  if (tag === "a") {
    event.preventDefault();
    loadPage(element);
  }
});

function loadPage(element) {
  const href = element.getAttribute("href");

  fetch(href)
    .then((response) => response.text())
    .then((response) => loadResult(response))
    .catch((err) => console.log(err));
}

function loadResult(response) {
  const result = document.querySelector(".resultado");
  result.innerHTML = response;
}
