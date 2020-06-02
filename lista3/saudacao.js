/* 2- O problema da Promise é que não podemos passar parâmetros 
    para o objeto. Completar o código a seguir usando o
    mesmo princípio do Exercício 1 e fazer a chamada da função saudacao 
    para imprimir Bom dia e Boa noite.
    */
   function saudacao(hora){
    return new Promise( (x, y) => {
        if (hora > 12){
            x('Boa tarde!');
        }else{
            y('Boa noite!');
        }
    });
    }
    saudacao(9).then(
        x => console.log(x)
    ).catch(
        y => console.log(y)
    ).finally(
        console.log("Boa dia!")
    );