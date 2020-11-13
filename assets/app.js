(async () => {
  const response = await fetch("./tmp/instagram.json");
  const data = await response.json();

  const htmlList = data
    .map(({ src }) => `<li><img src="${src}"></li>`)
    .join("");

  document.querySelector("main").innerHTML = htmlList;
})();
