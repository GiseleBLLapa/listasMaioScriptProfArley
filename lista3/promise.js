/*
No código a seguir o objeto p possui uma Promise. Ao executar o código será 
impresso no console somente o texto ok.
Alterar o corpo da Promise para que o mesmo código passe a imprimir 
Boa tarde e Boa noite.
*/

/* 
let p = new Promise( (x, y) => {
console.log('ok');
});
p.then(
() => console.log('Bom dia')
).catch(
() => console.log('Boa tarde')
).finally(
() => console.log('Boa noite')
);
*/
/*
function educado(hora){
    let p = new Promise( (x,y) => {
    
    });
}

educado(8).then(
    () => console.log('Bom dia!')
).catch(
    () => console.log('Boa tarde!')
).finally(
    () => console.log('Boa noite!')
);
*/


let p = new Promise( (x, y) => {
        return p;
    });
    p.then(
    () => console.log('Bom dia')
    ).catch(
    () => console.log('Boa tarde')
    ).finally(
    () => console.log('Boa noite')
    );

    