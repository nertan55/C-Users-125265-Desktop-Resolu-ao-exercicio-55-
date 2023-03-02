
//  Na teoria dos sistemas, define-se como elemento minimax de uma matriz o menor elemento da linha onde se
// encontra o maior elemento da matriz. Escreva  um algoritmo  que leia uma matriz 10 X 10 de números e encontre seu
// elemento minimax, mostrando também sua posiçao.Escreva

const matriz = [];
for (let i = 0; i < 10; i++) {
   matriz[i] = [];
  for (let j = 0; j < 10; j++) {
     matriz[i][j] = Math.floor(Math.random() * 100);
   }
 }

// // Encontra o elemento minimax
 let linhaDoMaximo = 0;
 let indiceDoMaximo = 0;
 let maximo = matriz[0][0];

 for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
     if (matriz[i][j] > maximo) {
       maximo = matriz[i][j];
      linhaDoMaximo = i;
       indiceDoMaximo = j;
   }
   }
 }

let minimax = matriz[linhaDoMaximo][0];
for ( let i = 0; i < 10; i++) {
  if (matriz[linhaDoMaximo][i] < [minimax]) {
     minimax = matriz[linhaDoMaximo][i]; 
  }
}

// Mostra o resultado

console.table(matriz);
 console.log(`O minimax é ${minimax} e está na posição  ${linhaDoMaximo} , ${indiceDoMaximo} `)

