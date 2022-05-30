//tipos primitivos

//boolean: apenas verdadeiro ou falso
 var ve_ou_fa = false
console.log(ve_ou_fa)
console.log(typeof(ve_ou_fa))

// number: valor numerico 
var numeroQualquer= 3
console.log(numeroQualquer)
console.log(typeof(numeroQualquer))

//string: Uma string em JavaScript é utilizada para armazenar trechos de texto (caracteres)
var nome = 'Renan'
console.log(nome)
console.log (nome.replace("nan","mo")); // retorna Remo
console.log(typeof(nome)) 

//como declarar variaveis
// utilizando var
var variavel; // sera declarado nulo\indefinido(undefined) por nao ter recebido nemhum valor(atribuição)
console.log(variavel)
var variavel1 = "superman" // variavel1 recebe a atribuição de uma string "superman"
variavel1 = "batman" // a atribuiçao anterior ("superman") foi alterado por outra atribuição (batman)
console.log(variavel1)

//utilizando let
let variavel2 = "maravilha"// escopo local de bloco, se não tiver um valor inicial será tratada como null\indefinido(undefined)
variavel2 = "wonder"// tambem pode ter seu valor alterado
console.log(variavel2)

//utilizando o const
const variavel3 = "mutano"//escopo local de bloco, somente leitura, o valor inicial é obrigatório
// variavel3 = "ravena" // não pode ser alterado
console.log(variavel3)
 
// escopo global e local
var escopoGlobal = 'global'
console.log(escopoGlobal) //Escopo global – quando a variável é declarada fora de qualquer bloco, sua visibilidade fica disponível em todo o código.

function escopoLocal(){
    let escopoLocalInterno = "local"   
    console.log(escopoLocalInterno) //Escopo local – quando a variável é declarada dentro de um bloco, sua visibilidade pode ficar disponível ou não.
}
escopoLocal() 

// operadores aritméticos
        // adição
        var adicao = 1 + 1;
        console.log(adicao);

        //subtração
        var subtracao = 2 - 1;
        console.log(subtracao);

        //multiplicação
        var multiplicacao = 2 * 3;
        console.log(multiplicacao);

        //divisão real
        var divisaoReal = 6 / 2;
        console.log(divisaoReal);

        //divisão inteira
        var divisaoInteira = 5 % 2;
        console.log(divisaoInteira);;

        //potenciação
        var potenciacao = 2**10;
        console.log(potenciacao);

  // operadores relacionais
        // maior que
        var maiorQue = 5 > 2;
        console.log(maiorQue);
        
        // menor que
        var menorQue = 5 < 2;
        console.log(menorQue);
        
        // maior ou igual a
        var maiorOuIgual = 5 >= 2;
        console.log(maiorOuIgual);
        
        // menor ou igual a
        var menorOuIgual = 5 <= 2;
        console.log(menorOuIgual);

 // operadores lógicos
        // && - todos os valores devem ser true
        var e = true && true;
        console.log(e);

        // || - somente um valor deve ser true
        var ou = true || false;
        console.log(ou);

        // ! - inverte os valores
        var nao = !true;
        console.log(nao);