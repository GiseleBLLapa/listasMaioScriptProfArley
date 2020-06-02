/* 

4) Codificar a classe Pessoa usando a linguagem JavaScript. Observações:
• O método print deverá imprimir no console os valores dos atributos;
• Use a notação de Arrow Function no método print;
• Crie dois objetos do tipo Pessoa para testar a classe.

5) Codificar as classes Pessoa e Cliente usando a linguagem JavaScript.
Observações:
• O método print da subclasse deverá invocar o método da
superclasse para imprimir os atributos nome e idade;
• Teste o seu código usando a notação de Arrow Function e
usando a notação de função tradicional;
• Crie dois objetos do tipo Pessoa para testar a classe.

*/

class Pessoa{
    constructor(nome, idade){
        this.nome=nome;
        this.idade=idade;
    }

    print(){
        console.log(this.nome);
        console.log(this.idade);
    }
}
const p = new Pessoa('Gisele', 58);
p.print();

class Cliente extends Pessoa {
    constructor(nome, idade, fone){
        super(nome, idade); 
        this.fone = fone;
    
    }
    print(){
        super.print();
        console.log(this.fone);
    }
}
const c = new Cliente('Gisele',58,9999999);
c.print();