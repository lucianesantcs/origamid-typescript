"use strict";
// // 0301 Objetos e Interfaces - Instanceof 1
// class Livro {
//   autor: string;
//   constructor(autor: string) {
//     this.autor = autor;
//   }
// }
// class Jogo {
//   jogadores: number;
//   constructor(jogadores: number) {
//     this.jogadores = jogadores;
//   }
// }
// function buscarProduto(busca: string) {
//   if (busca === "O Hobbit") {
//     return new Livro("J. R. R. Tolkien");
//   }
//   if (busca === "Dark Souls") {
//     return new Jogo(1);
//   }
//   return null;
// }
// const produto = buscarProduto("O Hobbit");
// // verificar antes a instância para evitar erros
// if (produto instanceof Livro) {
//   console.log(produto.autor);
// }
// if (produto instanceof Jogo) {
//   console.log(produto?.jogadores);
// }
