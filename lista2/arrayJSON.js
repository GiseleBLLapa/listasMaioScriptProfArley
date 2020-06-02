/* Fazer um array de objetos JSON (JavaScript Object Notation) 
para armazenar os dados a seguir. Observações: 
. idiomas é um array;
. características é um objeto.

nome      idiomas                        caracteristicas
Ana Maria espanhol e francês              peso altura
                                           62.5 1.67

Carlos    inglês                          sexo altura doador
                                            M    1.8    true

Rodrigo     Espanhol, francês e inglês    desportista voluntario
                                            true        true 
*/

const idiomas = ['espanhol', 'francês', 'inglês'];
var ana = {altura:1.67, peso:62.5};
var carlos = {sexo:'M', altura:1.80, doador:true};
var rodrigo = {desportista:true, voluntario:true};
var arrayJson = [{"nome":"Ana Maria", 
                  "idiomas1": idiomas[0], 
                  "idiomas2": idiomas[1], 
                  "peso": ana.peso,
                  "altura": ana.altura},
                  {"nome":"Carlos", 
                   "idiomas1": idiomas[2],
                   "sexo": carlos.sexo, 
                   "altura": carlos.altura,
                   "doador": carlos.doador},
                  {"nome": "Rodrigo",
                   "idiomas1": idiomas[0],
                   "idiomas2": idiomas[1],
                   "idiomas3": idiomas[2],
                   "desportista":rodrigo.desportista,
                   "voluntario": rodrigo.voluntario}];
/* 
Codificar uma função que recebe como parâmetro o array do Exercício 2 e
imprime no console os pares de key:value da propriedade
características, assim como é mostrado ao lado.
Observe que nem todos os elementos do array possui as mesmas
propriedades.
*/

function imprime (array){
    console.log('nome: ' + array[0].nome);
    console.log('idioma: ' + array[0].idiomas1);
    console.log('idioma: ' + array[0].idiomas2);
    console.log('peso: ' + array[0].peso);
    console.log('altura: ' + array[0].altura);
    
    console.log('nome: ' + array[1].nome);
    console.log('idioma: ' + array[1].idiomas1);
    console.log('sexo: ' + array[1].sexo);
    console.log('altura: ' + array[1].altura);
    console.log('doador: ' + array[1].doador);

    console.log('nome: ' + array[2].nome);
    console.log('idioma: ' + array[2].idiomas1);
    console.log('idioma: ' + array[2].idiomas2);
    console.log('idioma: ' + array[2].idiomas3);
    console.log('desportista: ' + array[2].desportista);
    console.log('voluntário: ' + array[2].voluntario);

}
 
imprime(arrayJson);
