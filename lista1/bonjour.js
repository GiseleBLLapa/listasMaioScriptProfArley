/* As instruções a seguir produzem o seguinte resultado. 
Reescrever elas para receber o nome de uma pessoa e, desta
forma, o resultado deverá ser Bom dia Fulano e Boa tarde Beltrano.
(function(){
console.log('Bom dia');
})();

Resultado:
Bom dia
Boa tarde

(()=>{
console.log('Boa tarde');
})(); */

let nome = prompt("Digite seu nome:");
(function(){
    console.log('Bom dia, ' + nome + '!');
    })();
    (()=>{
        console.log('Boa tarde, ' + nome + '!');
        })();

