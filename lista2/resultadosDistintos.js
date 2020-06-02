const aluno = {
    nome:'Paulo',
    print: function(){
    console.log(this.nome);
    }
    }
    const professor = {
    nome:'José',
    print: () => {
    console.log(this.nome);
    }
    }
    aluno.print(); //resultado Paulo
    professor.print(); //resultado undefined


    class Teste {
        constructor() {
        this.nome = 'João';
        }
        testador() {
        const aluno = {
        nome: 'Paulo',
        print: function () {
        console.log(this.nome);
        }
        }
        const professor = {
        nome: 'José',
        print: () => {
        console.log(this.nome);
        }
        }
        aluno.print(); //resultado Paulo
        professor.print(); //resultado João
        }
        }
        
        new Teste().testador();


        /*  Tenho resultados distintos porque Arrow Function não faz 
        "bind", this no 1o arrow function não faz referência a constante, porém 
        no 2o arrow function, por estar em método numa classe, referência quem o chamou
        , quem o chamou, no caso a classe. */