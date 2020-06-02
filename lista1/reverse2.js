/*Criar uma Arrow Function de nome reverse2 que recebe uma string 
e retorna uma string invertida. Observações:
• O Spread Operator [...] permite espalhar uma string num array 
de string, assim como pode ser observado a
seguir (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/
    Reference/Operators/Spread_syntax):
const entrada = 'abcde';
console.log([entrada]);
console.log([...entrada]);

Resultado:
[ 'abcde' ]
[ 'a', 'b', 'c', 'd', 'e' ]

• A classe Array possui o método reverse para inverter os elementos 
 um array
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/
    Reference/Global_Objects/Array/reverse);
• A classe Array possui o método join para transformar um array 
de strings numa string
(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/
    Reference/Global_Objects/Array/join).
• Use o Spread Operator e os métodos reverse e join para codificar 
a sua função;
• A função deverá ser codificada na notação condensada, 
assim como:
const msg = txt => console.log(txt);  */


let str = "uma string invertida";
let strvet = [...str];
let inv = faz => console.log(strvet.reverse().join(''));
inv();
