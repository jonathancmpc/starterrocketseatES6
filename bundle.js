"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Data = /*#__PURE__*/function () {
  function Data() {
    _classCallCheck(this, Data);

    this.data = [];
  }

  _createClass(Data, [{
    key: "add",
    value: function add(item) {
      this.data.push(item);
      console.log(this.data);
    }
  }]);

  return Data;
}();
/** Recebe a herança da classe Data e utiliza os métodos dela */


var TodoList = /*#__PURE__*/function (_Data) {
  _inherits(TodoList, _Data);

  var _super = _createSuper(TodoList);

  /*Construindo a lista*/
  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _super.call(this);
    /*Devemos sempre passar o super quando trazemos a herança de um construtor*/

    _this.usuario = 'Jonathan';
    return _this;
  }

  return TodoList;
}(Data);
/*Instanciando a lista*/


var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  MinhaLista.add('Novo todo');
  console.log(MinhaLista.usuario);
};
/**
 *  OPERAÇÕES COM ARRAY
 * */


var arr = [1, 3, 4, 5, 8, 10];
/* Percorrendo com array e retornando a soma do item mais a sua posição no array */

var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr);
/* O reduce retorna o total e o valor subsequente no array, neste caso estamos somando tudo que tem no array */

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
/* Filtra tudo aquilo que é diferente de resto 0, ou seja, retorna números ímpares de dentro do array */

var filter = arr.filter(function (item) {
  return item % 2 !== 0;
});
console.log(filter);
/* Procura dentro do array o número 10, se não estiver dentro do array retorna undefined */

var find = arr.find(function (item) {
  return item === 10;
});
console.log(find);
/** 
*   ARROW FUNCTION
*/

/* Podemos ver que substituimo a palavra function pela setinha e quando temos apenas uma variável, no caso o item, podemos retirar o parêntese */

/* Também quando retornarmos apenas uma linha de código podemos retornar diretamente depois da flecha nossa operação */

var newArray = arr.map(function (item) {
  return item * 2;
});
console.log(newArray);
/* Podemos também passar uma variável como função da seguinte maneira */

var teste = function teste() {
  return {
    nome: 'Diego'
  };
};

console.log(teste());
/** 
*   VALORES PADRÕES PARA FUNÇÃO
*/
// Retorna a soma de a + b e caso um ou todos os parâmetros não forem passados, a função assume os valores padrões 3 e 6.

var soma = function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
};

console.log(soma(1));
/** 
*   DESESTRUTURAÇÃO
*/

var usuario = {
  nome: 'Jonathan',
  idade: 29,
  endereco: {
    cidade: 'Gama',
    estado: 'DF'
  }
};
/* const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade; */

/* Podemos extrair as informações do objeto usuario utilizando a desestruturação, ao invés de passar variável por variável como foi feito acima */

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);
/* Podemos utilizar a desestruturação tbm em uma função, neste caso passamos o usuario quando chamamos a função e a função desestrura trazendo somente o nome */

var funcaoUsuario = function funcaoUsuario(_ref) {
  var nome = _ref.nome;
  return console.log(nome);
};

funcaoUsuario(usuario);
