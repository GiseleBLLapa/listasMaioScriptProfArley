/* Criar um array com 10 elementos. Dica use o construtor da 
   classe Array (https://developer.mozilla.org/pt-
    BR/docs/Web/JavaScript/Reference/Global_Objects/Array);
    
    • O array criado naturalmente será preenchido com valores nulos,
      então use o método fill para preencher o array com um valor 
      qualquer;
    • Use o método forEach para alterar o valor de cada elemento do 
    array para Math.floor(Math.random()*20);
    • Use o método forEach para imprimir o array no console. */

let vetor = new Array(10);
vetor.fill(3);
console.log(vetor);
vetor.forEach( function(item, indice){
               item = Math.floor(Math.random()*20);
               console.log(indice + ' - ' + item);
               });



