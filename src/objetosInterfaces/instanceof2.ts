// 0301 Objetos e Interfaces - Instanceof 2
// class Produto {
//   nome: string;

//   constructor(nome: string) {
//     this.nome = nome;
//   }
// }

// class Livro extends Produto {
//   autor: string;

//   constructor(nome: string, autor: string) {
//     super(nome);
//     this.autor = autor;
//   }
// }

// class Jogo extends Produto {
//   jogadores: number;

//   constructor(nome: string, jogadores: number) {
//     super(nome);
//     this.jogadores = jogadores;
//   }
// }

// function buscarProduto(busca: string) {
//   if (busca === "O Hobbit") {
//     return new Livro("O Hobbit", "J. R. R. Tolkien");
//   }

//   if (busca === "Dark Souls") {
//     return new Jogo("Dark Souls", 1);
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

// interface Carro {
//   nome: string;
// }

// const honda: Carro = {
//   nome: "Honda",
// };

// // retorna erro que Carro não é definido
// console.log(honda instanceof Carro);
