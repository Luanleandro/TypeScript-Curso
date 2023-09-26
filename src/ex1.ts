// Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso contrário escrever NÃO É MAIOR QUE 10!

// let numero: number;
// numero = 10;

// if (numero > 10) {
//   console.log('É MAIOR QUE 10');
// } else {
//   console.log('NÃO É MAIOR QUE 10');
// }

//  Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo).

// let numero: number;
// numero = -5000.50

// if (numero < 0) {
//   console.log("é negativo ")
// } else {
//   console.log("é positivo")
// }

// As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem
// compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e
// escreva o custo total da compra.

// let maca: number;
// maca = 6;

// if (maca < 12) {
//   maca = maca * 1.3
//   console.log(`O preço a pagar pelas maçãs é ${maca.toFixed(2)}`);
// } else {
//   console.log(`O preço a pagar é ${maca}`);
// }

// Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever
// uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o
// aluno é aprovado). Escrever também a média calculada.

// let nota1: number = 5;
// let nota2: number = 3;
// const media: number = (nota1 + nota2) / 2;

// if (media >= 6) {
//   console.log('Aprovado');
// } else {
//   console.log('Reprovado');
// }

// Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
// poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).

// const data: Date = new Date();
// const anoNascimento = 2008;

// let idade = data.getFullYear() - anoNascimento

// if (idade < 16) {
//   console.log("Você não pode votar")
// } else {
//   console.log("Você poderá votar esse ano")
// }

// Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.
// const numero1: number = 5550;
// const numero2: number = 20;
// let maior: number;

// if (numero1 > numero2) {
//   maior = numero1;
// } else {
//   maior = numero2;
// }

// console.log(maior);

// Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.

// const numero1: number = 1000;
// const numero2: number = 90;

// if (numero1 < numero2) {
//   console.log(numero1, numero2);
// } else {
//   console.log(numero2, numero1);
// }

// Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os
//   minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é
//   de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.

// const horaInicio: number = 1;
// const horaFim: number = 23;
// let horasJogadas: number = horaInicio - horaFim;

// console.log(Math.abs(horasJogadas));

// A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais
// de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%.
// Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva
// o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas
// (considere que o mês possua 4 semanas exatas).

// let horasTrabalhadasMes: number = 130;
// let salarioPorHora: number = 10;
// let salarioTotal: number = 120 * salarioPorHora;

// if (horasTrabalhadasMes > 120) {
//   let horasExtra = horasTrabalhadasMes - 120;
//   let acrescimo: number = salarioPorHora * 0.5;
//   console.log(salarioTotal + acrescimo * horasExtra);
//   let salarioHoraExtra = salarioTotal + acrescimo * horasExtra;

//   salarioTotal = salarioHoraExtra;
// }

// console.log(salarioTotal);
