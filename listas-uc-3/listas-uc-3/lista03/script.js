// 1- 

function verificarIdade(listaDeIdade) {
    for (let i = 0; i < listaDeIdade.length; i++) {
       if (listaDeIdade[i] < 18) {
        return "ALguém não pode entrar";
       }
        
    }

    return "Todos podem entrar";
}

const idades = [15,22, 19, 15, 26];
console.log(verificarIdade(idades));

console.log("Questão 2")

// 2- contador de numeros pares

function contarPares(){
    let aux = 0;
    let num = 1;

    while (num <= 50) {
        if (num % 2 == 0) {
            aux = aux + 1
        }

        num++
    }

    return aux;
}

console.log(contarPares());

console.log("Questão 3")

// 3- Classificação de cores

let classificacao;

classificacao = 3;

switch (classificacao) {
    case 1:
        console.log('Cor clara')
        break;
    case 2:
        console.log('Cor Média')
        break;
    case 3:
        console.log('Cor Escura')
        break;

    default:
        console.log('Cor Desconhecida')
        break;
}

console.log("Questão 4")

function validarSenha(senha) {
    switch (true) {
        case (senha.length < 8):
            return "Senha Fraca";
        case (senha.length >= 8 && senha.length <= 12):
            return "Senha Média";
        case (senha.length > 12):
            return "Senha Forte";
        default:
            return "Senha inválida";
    }
}

console.log(validarSenha('joaopedro123456789'));

console.log("Questão 5")

function classificarNotas(notas) {
    switch (true) {
        case (notas >= 90 && notas <= 100):
            return "A";
        case (notas >= 80 && notas <= 89):
            return "B";
        case (notas >= 70 && notas <= 79):
            return "C";
        case (notas >= 60 && notas <= 69):
            return "D";
        default:
            return "F"
    }
}

console.log(classificarNotas(100))

console.log("Questão 6")

function exibirFizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0 && i % 3 === 0 && i % 5 === 0) {
           console.log(i, "FizzBuzzBoom") ;
        }else if(i % 2 == 0 && i % 3 == 0){
           console.log(i, "FizzBuzz");
        }else if(i % 3 == 0 && i & 5 == 0){
           console.log(i, "BuzzBoom");
        }else if(i % 2 == 0 && i % 5 == 0){
           console.log(i, "FizzBoom");
        }else if(i % 2 == 0){
           console.log(i, "fizz") 
        }else if(i % 3 == 0){
           console.log(i, "Buzz") 
        }else if(i % 5 == 0){
           console.log(i, "Boom") 
        }else{
            console.log(i)
        }
        
    }
}

exibirFizzBuzz();


function classificarNota(){
    const nota = parseInt(prompt("Digite sua nota de 0 a 100"));
    let resultado;

if (nota > 90) {
    resultado = 'Sua nota é A. Parabéns!'
}else if(nota >= 80){
    resultado = 'B. Ótimo'
}else{
     resultado = 'insuficiente'
}

alert(`Sua nota é ${resultado}`)
}

classificarNota();