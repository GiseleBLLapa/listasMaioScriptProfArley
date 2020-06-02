/* Refazer a função do Exercício 2 usando método reduce (https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce). */

let str = "uma string invertida";
let strvet = [...str];
let inv = faz => strvet.reverse();
let pronta = inv();
let reduz = (acumula, part) => acumula + part;
console.log(pronta.reduce(reduz));
