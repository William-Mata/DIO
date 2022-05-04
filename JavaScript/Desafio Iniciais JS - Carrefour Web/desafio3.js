// Desafio
// Você terá o desafio de ler um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

// Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. 

// Entrada
// O arquivo de entrada contém um valor inteiro.

// Saída
// Imprima a saída conforme exemplo fornecido.

 
// Exemplo de Entrada	
// 400

// Exemplo de Saída
// 1 ano(s)
// 1 mes(es)
// 5 dia(s)


// Exemplo de Entrada	
// 800

// Exemplo de Saída
// 2 ano(s)
// 2 mes(es)
// 10 dia(s)

// Exemplo de Entrada	
// 30

// Exemplo de Saída
// 0 ano(s)
// 1 mes(es)
// 0 dia(s)

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar

let totalDeDias = 400;

let qtdAnos, qtdMeses;

qtdAnos = parseInt(totalDeDias / 365);
totalDeDias = totalDeDias % 30 ;

qtdMeses= parseInt(totalDeDias % 30);
// totalDeDias=  totalDeDias %  30;

// let resultado = (qtdAnos + " ano(s) " + '\n' + 
// qtdMeses +" mes(es)" + '\n' +
// totalDeDias + " dia(s)");

// print(resultado);

console.log(qtdAnos);



// let totalDeDias = 30;

// let qtdAnos, qtdMeses;

// qtdAnos = parseInt(Math.abs(totalDeDias / 365));
// totalDeDias -= (qtdAnos * 365) ; 
// qtdMeses= parseInt(Math.abs(totalDeDias / 30));
// totalDeDias = totalDeDias %  30 ;


// let resultado = (qtdAnos + " ano(s) " + '\n' + 
// qtdMeses +" mes(es)" + '\n' +
// totalDeDias + " dia(s)");


// console.log(resultado);