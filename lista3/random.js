/*
4) Chamar a função random para imprimir na tela um valor aleatório no 
   intervalo [0,20]. Observação: não alterar a função
    random.

5) Usando a função random, do Exercício 4, gerar dois números aleatórios no 
   intervalo [0,20[ e imprimir na tela a soma deles. 
   Observação: não alterar a função random.
*/

// 4 - 
const random = async max => Math.floor(Math.random() * max);

console.log(random(20));

// 5 - 
async function ex5 () {
    let a = await random(20);
    console.log(a);
    let b = await random(20);
    console.log(b);
    let c = await a+b;
    console.log(c);
}
ex5();