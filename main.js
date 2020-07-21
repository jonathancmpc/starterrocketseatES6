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

/* Operações com Array */
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
