// function classificarNota(){
//     const nota = parseInt(prompt("Digite sua nota de 0 a 100"));
//     let resultado;

// if (nota > 90) {
//     resultado = 'Sua nota é A. Parabéns!'
// }else if(nota >= 80){
//     resultado = 'B. Ótimo'
// }else{
//      resultado = 'insuficiente'
// }

// alert(`Sua nota é ${resultado}`)
// }

// executar a função

// classificarNota();

// Questão 2

// function classificarNota2(){
//     const nota = parseInt(prompt("Digite sua nota de 0 a 100"));
//     const limiteA = parseInt(prompt("Digite o valor limite para A"));
//     const limiteB = parseInt(prompt("Digite o valor limite para B"));
//     const limiteC = parseInt(prompt("Digite o valor limite para C"));
    
//     let resultado;

// if (nota > limiteA) {
//     resultado = 'Sua nota é A. Parabéns!'
// }else if(nota >= limiteB){
//     resultado = 'B. Ótimo'
// }else if(nota >= limiteC){
//     resultado = 'C. Ótimo'
// }else{
//      resultado = 'insuficiente'
// }

// alert(`Sua nota é ${resultado}`)

// }

// classificarNota2();

// Questão 3

// function classificarNota3(){
//     const nota = parseInt(prompt("Digite sua nota de 0 a 100"));
    
//     let resultado;

// if(nota <=0 || nota > 100){
//     alert(`Sua nota é insuficiente`)
//     return;
// } 

// const limiteA = parseInt(prompt("Digite o valor limite para A"));
// const limiteB = parseInt(prompt("Digite o valor limite para B"));
// const limiteC = parseInt(prompt("Digite o valor limite para C"));

//     if(nota > limiteA) {
//         resultado = 'Sua nota é A. Parabéns!'
//     }else if(nota >= limiteB){
//         resultado = 'B. Ótimo'
//     }else if(nota >= limiteC){
//         resultado = 'C. Ótimo'
//     }

//     alert(`Sua nota é ${resultado}`)
// }




// classificarNota3();

// Questão 4

// function classificarNota4(){
//         const nota = parseInt(prompt("Digite sua nota de 0 a 100"));
//         let resultado;
    
//     if (nota > 90) {
//         resultado = 'Sua nota é A. Parabéns!'
//     }else if(nota >= 80){
//         resultado = 'B. Ótimo'
//     }else if(nota > 60){
//          resultado = 'insuficiente'
//     }else if(nota < 60 && nota > 40){
//         resultado =  nota + ' Você está quase lá'
//     }
    
//     alert(`Sua nota é ${resultado}`)
//     }
    
//     // executar a função
    
//     classificarNota4();

// Questão 5

// function classificarNota5(){
//         const nota = parseInt(prompt("Digite sua nota de 0 a 100"));
//         let resultado;
//         let sugestao;
    
//     if (nota > 90) {
//         resultado = 'A'
//         sugestao = 'Tu é show';

//     }else if(nota >= 80){
//         resultado = 'B'
//         sugestao = 'Tu é bom';
//     }else if(nota > 60){
//          resultado = 'C';
//          sugestao = 'Estude mais um pouco';
//     }else if(nota < 60 && nota > 40){
//         resultado =  'D'
//         sugestao = 'Você está quase lá';
//     }
    
//     alert(`Sua nota é ${resultado}, ${sugestao}`)
//     }
    
//     // executar a função
    
//     classificarNota5();

// Questão 6

// function classificarNota6(){
//         const nota = parseInt(prompt("Digite sua nota de 0 a 100"));
//         const comentario = prompt('Digite o comentário');
//         let resultado;
//         
    
//     if (nota > 90) {
//         resultado = 'A'

//     }else if(nota >= 80){
//         resultado = 'B'
//     }else if(nota >= 60){
//          resultado = 'C';
//     }else if(nota < 60 && nota > 40){
//         resultado =  'D'
//     }
    
//     alert(`Sua nota é ${resultado}, ${comentario}`)
//     }
    
//     // executar a função
    
//     classificarNota6();


// Questão 7


// function classificarNota7(){
//             const nota = parseInt(prompt("Digite sua nota de 0 a 100"));
//             let resultado;
//             let faixa;
//             // let sugestao;
        
//         if (nota >= 100 && nota <= 90) {
//             faixa = 'A'
    
//         }else if(nota <= 89 && nota >= 80){
//             faixa = 'B'
//         }else if(nota < 80 && nota >= 70){
//              faixa = 'C';
//         }else{
//             faixa = 'D';
//         }
        
//         alert(`Sua nota está na faixa ${faixa}`)
//         }
        
//         // executar a função
        
//         classificarNota7();


    // Questão 8

    // function classificarNota8(){
    //         const nota = parseInt(prompt("Digite sua nota de 0 a 100"));
    //         let resultado;
    //         let faixa;
    //         let minima;
    //         let maxima;
    //         // let sugestao;
        
    //     if (nota <= 100 && nota >= 90) {
    //         faixa = 'A'
    //         minima = 90;
    //         maxima = 100;
    
    //     }else if(nota <= 89 && nota >= 80){
    //         faixa = 'B'
    //         minima = 80;
    //         maxima = 89;
    //     }else if(nota < 80 && nota >= 70){
    //          faixa = 'C';
    //          minima = 70;
    //          maxima = 79;
    //     }else{
    //         faixa = 'D';
    //         minima = 0;
    //         maxima = 78;
    //     }
        
    //     alert(`Sua nota é ${faixa}. A faixa da nota é ${minima} a ${maxima}`)
    //     }
        
    //     // executar a função
        
    //     classificarNota8();

    // Questão 9


// function classificarNota9(){
//         const nota = parseInt(prompt("Digite sua nota de 0 a 100"));
//         let resultado;
//         // let sugestao;
    
//     if (nota > 90) {
//         resultado = 'A'

//     }else if(nota >= 80){
//         resultado = 'B'
//     }else if(nota >= 60){
//          resultado = 'C';
//     }else if(nota < 60){
//         resultado =  'D. Você precisa fazer uma prova de recuperação'
//     }
    
//     alert(`Sua nota é ${resultado}`)
//     }
    
//     // executar a função
    
//     classificarNota9();

// Questão 10
   
// function classificarNota10(){
//             const nota = parseInt(prompt("Digite sua nota de 0 a 100"));
//             let resultado;
//             let faixa;
//             let comentario;
//             // let sugestao;
        
//         if (nota <= 100 && nota >= 90) {
//             faixa = 'A'
//             comentario = 'Muito bom!'
//         }else if(nota <= 89 && nota >= 80){
//             faixa = 'B'
//             comentario = 'precisa estudar mais funções'
//         }else if(nota < 80 && nota >= 70){
//              faixa = 'C';
//             comentario = 'precisa estudar mais funções e arrays'
//         }else{
//             faixa = 'D';
//              comentario = 'Precisar estudar o básico de lógica de programação'
//         }
        
//         alert(`Sua nota é ${faixa}. ${comentario}`)
//         }
        
//         // executar a função
        
//         classificarNota10();


for (let i = 0; i < 3; i++) {
    let materia = prompt('insira a materia');
    let nota = parseInt(prompt('insira a nota'));
    let resultado;

    if(nota >= 6){
        resultado = "Aprovado";
    }else{
        resultado = "Reprovado";
    }

    alert(`Na materia ${materia} você foi ${resultado}`);
}