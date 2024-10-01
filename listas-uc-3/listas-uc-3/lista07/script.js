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

// 9
// let num = [];
// for (let i = 0; i < 10; i++) {
//     num.push(Math.floor(Math.random() * 101));
// }

// console.log(num);

// let filtro = num.filter(function(n){
//     return n > 50;
// });

// console.log(filtro);

// let ordenado = filtro.sort(function(a,b){
//     return b-a;
// });

// console.log(ordenado);

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

// let texto = "javascript é incrível";

// let palavrasSeparados = texto.split(" ");
// console.log(palavrasSeparados);
// let palavrasInvertidas = palavrasSeparados.reverse();
// console.log(palavrasInvertidas);

//  Converter a primeira letra de cada palavra para maiúscula
// let palavrasCapitalizadas = palavrasInvertidas.map(palavra => {
//     return palavra.charAt(0).toUpperCase() + palavra.slice(1);
// });

// Unir as palavras em uma string novamente e imprimir o resultado
// let resultado = palavrasCapitalizadas.join(" ");
// console.log(resultado);


// 13 

// let mes = 6;

// switch (mes) {
//     case 1:
//         console.log('Janeiro');
//         break;
//     case 2:
//         console.log('Fevereiro');
//         break;
//     case 3:
//         console.log('Março');
//         break;
//     case 4:
//         console.log('Abril');
//         break;
//     case 5:
//         console.log('Maio');
//         break;
//     case 6:
//         console.log('Junho');
//         break;
//     case 7:
//         console.log('Julho');
//         break;
//     case 8:
//         console.log('Agosto');
//         break;
//     case 9:
//         console.log('Setembro');
//         break;
//     case 10:
//         console.log('Outubro');
//         break;
//     case 11:
//         console.log('Novembro');
//         break;
//     case 12:
//         console.log('Dezembro');
//         break;
//     default:
//         console.log('Mês inválido');
// }

// if (mes >= 1 && mes <= 6) {
//     console.log('Primeiro semestre')
// }else{
//     console.log('Segundo semestre');
// }

// 14

// let numeroStr = "45.67";
// let numInt = parseFloat(numeroStr);
// console.log(numInt);
// let numAround = Math.floor(numInt);
// console.log(numAround);
// let numCeil = Math.ceil(numInt);
// console.log(numCeil);

// 15

// let palavra = "programador";

// let terceiroCaractere = palavra.charAt(3);
// console.log(terceiroCaractere);
// let posicaoA = palavra.indexOf('a');
// console.log(posicaoA);
// let primeiraMetade = palavra.slice(0, 5);
// console.log(primeiraMetade);

// 16

// let frase = "Estudar programação é ótimo!"
// let contador = 0;
// for (let i = 0; i < frase.length; i++) {
//     if (frase.charAt(i) == "a") {
//         contador++;
//     }
    
// }

// console.log(contador);

// 17

// let letras = ["a", "b", "c", "d", "e"];

// let letrasInvertidas = letras.reverse();
// console.log(letrasInvertidas);
// let letrasUnidas = letrasInvertidas.join(",");
// console.log(letrasUnidas);

// 18

// let numeros = [5, 12, 8, 130, 44];

// let maiorqueDez = numeros.filter(function(numero){
//     return numero > 10;
// });

// console.log(maiorqueDez);

// let soma = numeros.reduce(function(acumulador, numero){
//     return acumulador + numero;
// });

// console.log(soma);

// if (numeros.length == 5) {
//     console.log("tamanho: 5 elememntos")
// }else{
// //     console.log("Não tem 5 elementos")
// }

// 19

// let nome = "Alice";

// let letrasMinusculas = nome.toLocaleLowerCase();
// console.log(letrasMinusculas);
// let reconhecimento = letrasMinusculas == "alice" ?  "Nome Reconhecido" : "Nome não Reconhecido"

// console.log(reconhecimento);

// 20

let numeros = [];
for (let i = 0; i < 5; i++) {
    numeros.push(Math.floor(Math.random() * 21));
}

console.log(numeros);


// 21

// let frase = "Aprender JavaScript é divertido e recompensador";

// let fraseDividida = frase.split(" ");
// console.log(fraseDividida);
// console.log(fraseDividida.length);
// let verificacao = fraseDividida.length > 5 ? "Mais que 5" : "Menos que 5";
// console.log(verificacao);

// 22

// let pergunta = prompt("Qual o seu nome?");
// let confirmar = confirm(`O seu nome é ${pergunta}?`);
// if (confirmar) {
//     alert(`Seja bem-vindo, ${pergunta}`)
// }else{
//     alert("Nome incorreto");
// }

// 23

//  let texto = "JavaScript";

//  let contador = 0;

//  for (let i = 0; i < texto.length; i++) {
//     if (texto.charAt(i) == "a") {
//         contador++;
//     }
//  }

//  console.log(contador);

// 24

// let cores = ["Vermelho", "Verde", "Azul"];
// cores.push("Amarelo");
// console.log(cores);
// cores.splice(1,1);
// console.log(cores);
// cores.unshift("Roxo");
// console.log(cores);

// 25

// let str1 = "casa";
// let str2 = "CASA";

// if (str1.toLowerCase() === str2.toLowerCase()) {
//     console.log("iguais");
// }

// if (str1.toUpperCase() === str2.toUpperCase()) {
//     console.log("iguais");
// }

// 26

// let num = [];
// for (let i = 0; i < 5; i++) {
//     num.push(Math.floor(Math.random() * 51));
// }

// let crescente = num.sort(function(a,b){
//     return a-b;
// });

// console.log(crescente);

// let decrescente = num.sort(function(a,b){
//     return b-a;
// });

// console.log(decrescente);

// 27

// const carros = [
//     {
//         marca: "Toyota", 
//         modelo: "Corolla", 
//         ano: 2020
//     }, 
//     {
//         marca: "Honda",
//         modelo: "Civic", 
//         ano: 2018
//     },
//     {
//         marca: "Ford",
//         modelo: "Mustang",
//         ano: 2021 
//     },
//     {
//         marca: "Chevrolet",
//         modelo: "Camaro", 
//         ano: 2019
//     },
//     {
//         marca: "BMW", 
//         modelo: "X5",
//         ano: 2022
//     }
// ]

// let marcaCarro = "Ford";

// let filtro = carros.filter(function(carro){
//     return carro.marca == marcaCarro;
// });

// console.log(marcaCarro);

// 28

// let animais = ["Cachorro", "Gato", "Leão", "Tigre"];

// animais.splice(2, 1, "Panda");
// console.log(animais);
// animais.splice(2, 0, "Coelho");
// console.log(animais);

// 29

// let numeros = [10, 5, 15, 7, 20];

// let ordenados = numeros.sort(function(a,b){
//     return a - b;
// });
// console.log(ordenados);
// ordenados.unshift(1);
// console.log(ordenados);

// let comparacao = ordenados.length == 6 ? "true" : "false";
// console.log(comparacao)

// 30

// let part1 = "Aprender ";
// let part2 = "Programação";

// let concatenar = part1.concat(part2);
// console.log(concatenar);
// let letrasInvertidas = concatenar.split('').reverse().join('.');
// console.log(letrasInvertidas);
