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
}