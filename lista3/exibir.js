/*
3) Completar o código da Promise para que a chamada da função exibir() 
imprima no console um número aleatório no intervalo [30,50[.
    */

function aleatorio(min, max){
    return new Promise( (x, y) => {
        let nro = Math.floor(Math.random() * (max-min) + min);
        console.log(nro);
    });
}
async function exibir(){
    let a = await aleatorio(30,50);
    console.log(a);
}
exibir();