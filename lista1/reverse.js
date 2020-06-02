/* Criar uma Arrow Function de nome reverse que recebe uma string 
e retorna uma string invertida. Observações:
• Não é permitido usar funções prontas da linguagem JavaScript;
• Use a estrutura de repetição for para percorrer a string de 
entrada;
• Use o método charAt para acessar cada caractere da string.  */

let x = "uma string invertida";
let tamanho = x.length-1;
let w;
let reverse = elemento => {
for ( let i = tamanho; i >= 0 ; i--){
    w += (x.charAt(i));   
}};
reverse(x);
console.log(w);
