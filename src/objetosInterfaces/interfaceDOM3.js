"use strict";
// 0302 Objetos e Interfaces - Interfaces do DOM 3 (Exercício)
// 1 - Selecione os elementos com a classe link.
// 2 - Crie uma função que deve ser executada para cada elemento.
// 3 - Modificar através da função o estilo da color e border.
const links = document.querySelectorAll(".link");
// Ao invés de usar HTMLAnchorElement em ambos parâmetros, usar HTMLElement já que
// HTMLAnchorElement e HTMLButtonElement herdam HTMLElement e evita verificação duplicada
// para cada tipo
links?.forEach(element => {
    if (element instanceof HTMLElement) {
        ativarElemento(element);
    }
});
const ativarElemento = (element) => {
    element.style.color = "red";
    element.style.border = "2px solid red";
};
