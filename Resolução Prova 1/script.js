function mostrarTabela() {
  const div = document.getElementById("imagem");
  const img = document.createElement("img");
  img.src = "tabela.png";
  img.width = 400;
  div.appendChild(img);
}

function revelar() {
  const img = document.querySelector(".card img");
  img.src = "vinicius_junior.png";

  document.getElementById("Nome").innerText = "Vinicius Junior";
  document.getElementById("Data_Nas").innerText = "12/07/2000 (25 anos)";
  document.getElementById("Altura").innerText = "1,76m";
  document.getElementById("Posicao").innerText = "Ponta-esquerda / Atacante";
  document.getElementById("Rank").innerText = "9.5";

  document.querySelectorAll(".placeholder").forEach(el => {
    el.classList.remove("placeholder");
  });
}
