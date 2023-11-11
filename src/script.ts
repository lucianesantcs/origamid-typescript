// 0201 - EXERCÍCIO 1
// Conserte a função com TypeScript:
// function normalizarTexto(texto: string) {
//   return texto.trim().toLowerCase();
// }

// normalizarTexto(" DesIGn ");

// 0201 - EXERCÍCIO 2 (HTML e TS)
// Conserte a função com TypeScript:
const input = document.querySelector("input");

const total = localStorage.getItem("total");
input.value = total;
calcularGanho(input.value);

function calcularGanho(value) {
  const p = document.querySelector("p");
  p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
}

function totalMudou() {
  const value = Number(input.value);
  localStorage.setItem("total", value);
  calcularGanho(value);
}

input.addEventListener("keyup", totalMudou);
