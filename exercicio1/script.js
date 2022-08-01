let nome = prompt("Qual seu nome?"); // vai aparecer uma string, porque o prompt sempre vai retornar uma string.
let idade = +prompt("Qual sua idade?"); // vai aparecer um numero, porque tem o "+" antes do prompt fazendo assim com que ele retorne um numero em vez de uma string.

console.log(nome, idade);
console.log(typeof nome, typeof idade);
console.log("Olá", nome,  "você tem", idade, "anos"); //
