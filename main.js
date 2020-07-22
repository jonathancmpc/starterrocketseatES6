class Data{
    constructor(){
        this.data = [];
    }

    add(item){
        this.data.push(item);
        console.log(this.data);
    }
}

/** Recebe a herança da classe Data e utiliza os métodos dela */
class TodoList extends Data{
    /*Construindo a lista*/
    constructor(){
        super() /*Devemos sempre passar o super quando trazemos a herança de um construtor*/
        
        this.usuario = 'Jonathan';
    }

}

/*Instanciando a lista*/
const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo todo');
    console.log(MinhaLista.usuario);
}


/**
 *  OPERAÇÕES COM ARRAY
 * */
const arr = [1,3,4,5,8,10];

/* Percorrendo com array e retornando a soma do item mais a sua posição no array */
const newArr = arr.map(function(item, index) {
    return item + index;
});
console.log(newArr);

/* O reduce retorna o total e o valor subsequente no array, neste caso estamos somando tudo que tem no array */
const sum = arr.reduce(function(total, next) {
    return total + next;
});
console.log(sum);

/* Filtra tudo aquilo que é diferente de resto 0, ou seja, retorna números ímpares de dentro do array */
const filter = arr.filter(function(item){
    return item % 2 !== 0;
});
console.log(filter);

/* Procura dentro do array o número 10, se não estiver dentro do array retorna undefined */
const find = arr.find(function(item){
    return item === 10;
});
console.log(find);

/** 
*   ARROW FUNCTION
*/

/* Podemos ver que substituimo a palavra function pela setinha e quando temos apenas uma variável, no caso o item, podemos retirar o parêntese */
/* Também quando retornarmos apenas uma linha de código podemos retornar diretamente depois da flecha nossa operação */
const newArray = arr.map(item => item * 2);
console.log(newArray);

/* Podemos também passar uma variável como função da seguinte maneira */
const teste = () => ({nome: 'Diego'});
console.log(teste());

/** 
*   VALORES PADRÕES PARA FUNÇÃO
*/

// Retorna a soma de a + b e caso um ou todos os parâmetros não forem passados, a função assume os valores padrões 3 e 6.
const soma = (a = 3, b = 6) => a + b;
console.log(soma(1));

/** 
*   DESESTRUTURAÇÃO
*/

const usuario = {
    nome: 'Jonathan',
    idade: 29,
    endereco: {
        cidade: 'Gama',
        estado: 'DF',
    },
};

/* const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade; */

/* Podemos extrair as informações do objeto usuario utilizando a desestruturação, ao invés de passar variável por variável como foi feito acima */
const {nome, idade, endereco: {cidade}} = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

/* Podemos utilizar a desestruturação tbm em uma função, neste caso passamos o usuario quando chamamos a função e a função desestrura trazendo somente o nome */
const funcaoUsuario = ({nome}) => (console.log(nome));
funcaoUsuario(usuario);


/** 
*   REST E SPREAD
*/

//REST
/* O rest é usado para pegar o resto dos parâmetros */
const usuario2 = {
    nome2: 'Jonathan',
    idade: 29,
    empresa: 'DevLove'
};

const { nome2, ...resto } = usuario2;
console.log(nome2);
console.log(resto);

/* Pode ser utilizado tbm em uma função */
function soma2(...params) {
    return params.reduce((total, next) => total + next);
}
console.log(soma2(1,3,4,10,20,50))


// SPREAD

const array01 = [1,2,3,4];
const array02 = [5,6,7,8];

/* O Spread traz tudo que tem dentro do array, neste caso juntamos os arrays */
const array03 = [...array01, ...array02];
console.log(array03);

/* Pode ser utilizado também para substituir um item especídifico de um objeto, neste caso apenas trocamos o nome */
const usuario01 = {
    nome: 'Diego',
    idade: 29,
    empresa: 'Rocketseat',
};

const usuario02 = {...usuario01, nome: 'Jonathan'}
console.log(usuario02);

/** 
*   TEMPLATE LITERALS
*/

const name = 'Jonathan'
const year = 29;

/* Como fazer sem o template Literals */
console.log('My name is ' + name + " and I'm " + year + ' years old');

/* Com Template Literals */
console.log(`Meu nome é ${name} e tenho ${year} anos`);
