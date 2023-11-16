"use strict";
// 0305 Objetos e Interfaces - Functions - Overload (Exercício)
// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.
function round(value) {
    if (typeof value === "number") {
        return Math.ceil(value);
    }
    else {
        return Math.ceil(Number(value)).toString();
    }
}
console.log(round(3.45));
console.log(round("250.15"));
