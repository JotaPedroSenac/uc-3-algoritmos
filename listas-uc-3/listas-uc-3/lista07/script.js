// 1

// let numeros = [34, 7, 23, 32, 5, 62];
// numeros.push(9, 12);
// console.log(numeros)
// numeros.unshift(1);
// console.log(numeros);
// numeros.sort((a,b) => a - b);
// console.log(numeros);
// numeros.reverse();
// console.log("array resultante: " ,numeros);

// 2

// let saudacao = "Olá";
// let nome = " Mundo";

// let concat = saudacao.concat(nome);
// console.log(concat);
// let upper = concat.toUpperCase();
// console.log(upper);
// let mundo = upper.slice(3, 9);
// console.log(mundo);

// 3

// let valores = [10, 25, 30, 45, 50, 60];

// let valorFiltrado = valores.filter(function(valor){
//     return valor > 30;
// });

// console.log(valorFiltrado);

// let soma = valorFiltrado.reduce(function(acumulador, numero){
//     return acumulador + numero;
// });

// console.log(soma);

// console.log(isNaN(soma));

// 4-

// let numeros = [1, 2, 3, 4, 5];

// let dobro = numeros.map(function(numero){
//     return numero * 2;
// });

// console.log(dobro);

// let soma = dobro.reduce(function(acumulador, numero){
//     return acumulador + numero;
// });

// console.log(soma);

// 5

// let frase = "A programação é divertida e desafiadora."

// console.log(frase.length);
// let upper = frase.toUpperCase();
// console.log(upper);
// let palavras = upper.split(" ");
// console.log(palavras);
// let novaString = palavras.join("-");
// console.log(novaString);

// 6- 
// let frutas = ["Maçã", "Banana", "Laranja", "Manga",
//     "Uva"];

//     frutas.splice(2, 1, "Abacaxi");
//     console.log(frutas);

// let frutaExtraida = frutas.slice(0, 3);
// console.log(frutaExtraida);
// frutaExtraida.push("Melancia");
// console.log(frutaExtraida);

// 7-

// let nomes = ["Ana", "Carlos", "João", "Maria"];
// console.log(nomes.indexOf("Carlos"));
// nomes.splice(2, 1, "José");
// console.log(nomes);
// nomes.unshift("Fernanda");
// nomes.push("Rafael");
// console.log(nomes);

// 8- 

// let precos = [15.5, 10.0, 20.75, 30.0, 8.0];

// let precosDezPorCento = precos.map(function(numero){
//     return numero * 1.1;
// });

// console.log(precosDezPorCento);

// let precosFiltrados = precosDezPorCento.filter(function(num){
//     return num > 20;
// });

// console.log(precosFiltrados);

// let soma = precosFiltrados.reduce(function (acumulador, numero){
//     return acumulador + numero;
// })

// console.log(soma);

// 10

// let notas = [7.5, 8.0, 6.5, 9.0, 7.0]

// let media = notas.reduce(function (acumulador, numero){
//     return acumulador + numero
// })

// console.log(media/5);

// let mediaNum = media / notas.length;

// console.log(mediaNum);

// let result = mediaNum >= 7 ? "Aprovado" : "reprovado";

// console.log(result);

// 11

// let cidade = "São Paulo";
// let clima = "ensolarado";

// let frase = `Hoje em ${cidade} está ${clima}`;
// console.log(frase);
// let novaFrase = frase.replace("ensolarado", "chuvoso");
// console.log(novaFrase);

// 12

let texto = "javascript é incrível";

let palavrasSeparados = texto.split(" ");
console.log(palavrasSeparados);
let palavrasInvertidas = palavrasSeparados.reverse();
console.log(palavrasInvertidas);