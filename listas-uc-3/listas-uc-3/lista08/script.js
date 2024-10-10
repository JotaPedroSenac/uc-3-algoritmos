// 1-

// let frutas = ["Maçã", "Banana", "Laranja"];
// function addRemoveElements(){
//     frutas.push("Manga");
//     console.log(frutas);
//     frutas.unshift("Uva");
//     console.log(frutas);
//     frutas.splice(3, 1);
//     console.log(frutas);
// }

// addRemoveElements(frutas);

// 2- 

// let saudacao = "Olá";
// let nome = "Maria";

// let concat = `${saudacao}, ${nome}`;
// console.log(concat);

// 3
// let numero = 10;

// function verificarPar(numero){
//     let result = numero % 2 == 0 ? console.log("Par") : console.log("Impar")
// }

// verificarPar(numero);

// 4

    // let numeros = [5, 12, 8, 130, 44];
    // let filtro = numeros.filter(function(numero){
    //     return numero > 10;
    // });

    // console.log(filtro);

    // 5

    // let valores = [10, 20, 30, 40];

    // let soma = valores.reduce(function(numero, acumulador){
    //     return numero + acumulador;
    // });

    // console.log(soma);

    // 6- 

    // let texto = "javascript é legal";
    // let upper = texto.toUpperCase();
    // console.log(upper);

    // 7

    // let nome = "Carlos";

    // let vertificar = nome.includes("a");
    // console.log(vertificar);

    // 8

    // let cores = ["Azul", "Verde", "Amarelo", "Roxo"];

    // cores.splice(1, 2);
    // console.log(cores);

    // // 9

    // let numeros = [10, 20, 30];

    // numeros.push(40);
    // numeros.unshift(5);
    // console.log(numeros);
    // numeros.shift();
    // numeros.pop();
    // console.log(numeros);

    // 10

    // let frase = "Programação é divertida";

    // console.log(frase.length);

    // 11

    //  let frase = "Aprender JavaScript é muito bom";

    //  let palavras = frase.split(" ");
    //  console.log(palavras);

    //  12

    //  let texto = "Eu gosto de JavaScript"
    //  let separar = texto.split(" ");
    //  console.log(separar);
    //  let inverter = separar.reverse();
    //  console.log(inverter);
    //  let juntar = inverter.join();
    //  console.log(juntar);

    // let separar = texto.split(" ").reverse().join(" ");
    // console.log(separar);

    // 13

    // let numeros = [1, 2, 3, 4, 5];

    // let dobrar = numeros.map((numero) => {
    //     return numero * 2;
    // });

    // console.log(dobrar);

    // 14

    // let num = [];
    // for (let i = 0; i < 10; i++) {
    //     num.push(Math.floor(Math.random() * 101))
    // }

    // let filtrado = num.filter((n) => {
    //     return n > 50;
    // })
    // console.log(filtrado);

    // 15

    // let num = [];
    // for (let i = 0; i < 5; i++) {
    //         num.push(Math.floor(Math.random() * 101))
    //     }

    //     let soma = num.reduce((acumulador, num) => {
    //         return acumulador + num;
    //     })


    //     console.log(!isNaN(soma));

    // 16

    // let frase = "O clima está ensolarado";
    // let substituir = frase.replace("ensolarado", "chuvoso");
    // console.log(substituir);

    // 17

    // let numeros = [40, 10, 30, 20, 50];

    // let ordenar = numeros.sort((a,b) => {
    //     return a-b;
    // });

    // console.log(ordenar);

    // 18

    // let notas = [7.5, 8.0, 6.5, 9.0, 7.0];

    // let media = notas.reduce((acumulado, numero) => {
    //     return acumulado + numero;
    // });

    // let med = media / notas.length;

    // if (med >= 7) {
    //     console.log("Aprovado");
    // }else{
    //     console.log("Reprovado");
    // }

    // 19

    // let numeroStr = "45.67";
    // let num = parseFloat(numeroStr);
    // console.log(Math.floor(num));
    // console.log(Math.ceil(num));

    // 20

    // let palavra = "programador";

    // let contador = 0;

    // for (let i = 0; i < palavra.length; i++) {
    //     if (palavra.charAt(i) === "a") {
    //         contador++;
    //     }
    // }

    // console.log(contador);

    // 21
    // let str1 = "casa";
    // let str2 = "CASA";

    // let igualdade = str1 === str2 ? "true" : "False";
    // console.log(igualdade);

    // 22

    // let numeros = [15, 20, 25, 30];

    // let maiorDez = true;

    // for (let i = 0; i < numeros.length; i++) {
    //     if (numeros[i] <= 10) {
    //         maiorDez = false;
    //         break;
    //     }
        
    // }

    // console.log(maiorDez);

    
    // 23

    // let numeros = [5, 8, 12, 3];
    // some?

    let numeros = [5, 8, 12, 3];

    let menorCinco = true;

    for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] < 5) {
                menorCinco = false;
                break;
            }
            
        }

        console.log(menorCinco);

    // 24

    // Não passou esse comando
    //  let frase = " JavaScript é divertido! ";

    //  let result = frase.trim();
    //  console.log(result);

    // 25

    // let numero = 7;
    // if (numero > 10) {
    //     console.log("Maior que 10");
    // }else{
    //     console.log("Menor ou igual a 10");
    // }

    // 26

    // let palavras = ["Eu", "amo", "JavaScript"];

    // let resultado = palavras.join(" ");
    // console.log(resultado);

    // 27

    // let palavra = "JavaScript";

    // let resultado = palavra.split('');
    // console.log(resultado);

    // 28

    // let numero = 25;
    // let resultado = numero > 10 && numero < 50 ? "Dentro do intervalo" : "Fora do Intervalo";

    // console.log(resultado);

    // 29

    // let numeros = [2, 4, 6];

    // let resultado = numeros.map((num) => {
    //     return num * 3;
    // });

    // console.log(resultado);

    // 30

    //  let str1 = "João";
    //  let str2 = "joão"

    //  let iguais = str1.toLowerCase === str2.toLowerCase;
    //  console.log(iguais);

    // 31

    // let nomes = ["Pedro", "Maria", "José"];

    // nomes.unshift("Ana");
    // console.log(nomes);

    // 32

    // let cidades = ["Natal", "Recife", "Fortaleza"];

    // cidades.pop();
    // console.log(cidades);

    // 33

    // let numero =-8;

    // let resultado = numero > 0 ? "Positivo" : "Negativo";

    // console.log(resultado);

    // 34

    // let nome = "JavaScript";

    // let minuscula = nome.toLowerCase();
    // let maiuscula = nome.toUpperCase();

    // console.log(`Minuscula: ${minuscula}, Maiuscula: ${maiuscula}`);

    // 35

    // let numeros = [2, 4, 6, 8];

    // let resultado = numeros.map((num) => {
    //     return num * 2;
    // });

    // console.log(resultado);

    // 36

    // let texto = "JavaScript é divertido";

    // let resultado = texto.split(' ');
    // console.log(resultado);
    // let result = resultado.join('');
    // console.log(result);

    // 37

    // let numero = 16;
    // let quadrado = Math.sqrt(numero);
    // console.log(quadrado);

    // 38

    // let itens = [];

    // if (itens.length == 0) {
    //     console.log("true")
    // }else{
    //     console.log("false")
    // }

    // 39

    // let numero = 5;
    // let fatorial = 1;

    // for (let i = 1; i <=  numero; i++) {
    //     fatorial = i * fatorial;
    // }

    // console.log(fatorial);

    // 40

    // let valores = [1, 2, 3, 4, 5];

    // let mult = valores.map((valor) => {
    //     return valor * 2;
    // });

    // // console.log(mult);

    // let resultado = mult.reduce((acumulador, numero) => {
    //     return acumulador + numero;
    // });

    // console.log(resultado);

    // 41

    // let texto = "JavaScript";

    // let resultado = texto.split('');
    // console.log(resultado);

    // 42

    //  let parte1 = "Olá ";
    //  let parte2 = "mundo!"

    //  let resultado = parte1.concat(parte2);
    //  console.log(resultado);

    // 43

    //  let numeroStr = "25";
    //  let resultado = parseInt(numeroStr);
    //  console.log(resultado);

    // 44

    // let cores = ["Vermelho", "Verde", "Azul"];
    // cores.splice(1,1);
    // console.log(cores);

    // 45

    // let palavra = "JavaScript";

    // let tamanho = palavra.length;
    // console.log(tamanho);

    // 46

    // let a = 5;
    // let b = 7;

    // let multiplicar = a*b;

    // let resultado = multiplicar > 30 ? "Maior que 30" : "Menor ou igual a 30";

    // console.log(resultado);

    // 47

    // let palavra = "JavaScript";

    // let dividir = palavra.split('');
    // let inverter = dividir.reverse().join('');
    // console.log(inverter);

    // 48

    // let cidades = ["Natal", "Recife", "Fortaleza"];
    // cidades.shift();
    // console.log(cidades);

    // 49

    // let numero = 9;

    // let resultado = numero % 2 == 0 ? "Par" : "Impar";
    // console.log(resultado);

    // 50

    // let numeros = [1, 2, 3, 4, 5];

    // let mult = numeros.map((numero) => {
    //     return numero * 10;
    // });

    // console.log(mult);