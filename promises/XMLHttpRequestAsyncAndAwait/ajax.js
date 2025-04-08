document.addEventListener("click", (event) => {
  const element = event.target;
  const tag = element.tagName.toLowerCase();

  if (tag === "a") {
    event.preventDefault();
    loadPage(element);
  }
});

async function loadPage(element) {
  const href = element.getAttribute("href");

  const response = await fetch(href);
  const responseText = await response.text();
  
  loadResult(responseText);
}

function loadResult(responseText) {
  const result = document.querySelector(".resultado");
  result.innerHTML = responseText;
}