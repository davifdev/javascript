const request = (obj) => {
  const xhr = new XMLHttpRequest();
  xhr.open(obj.method, obj.url, true);
  xhr.send();

  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      obj.success(xhr.responseText);
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
    loadPage(element);
  }
});

function loadPage(element) {
  const href = element.getAttribute("href");

  const objConfig = {
    method: "GET",
    url: href,
    success(responseText) {
      loadResult(responseText);
    },
    error(errorText) {
      console.log(errorText);
    },
  };

  request(objConfig);
}

function loadResult(responseText) {
  const result = document.querySelector(".resultado");
  result.innerHTML = responseText;
}
