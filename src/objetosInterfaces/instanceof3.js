"use strict";
// 0301 Objetos e Interfaces - Instanceof 3 (Exercício)
// 1 - Selecione o link utilizando o método getElementById.
// 2 - Substitua o href do link (HTMLAnchorElement) de http:// para https://.
const anchorLink = document.getElementById("origamid");
if (anchorLink instanceof HTMLAnchorElement) {
    anchorLink.href = anchorLink?.href?.replace("http", "https");
}
