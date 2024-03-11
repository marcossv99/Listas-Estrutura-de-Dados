/*É possível analisar se uma sequência parêntesis e colchetes está bem-formada, 
ou seja, parênteses e colchetes são fechados na ordem inversa àquela em que foram abertos 
utilizando uma pilha. Por exemplo, a sequência [ ( ) [ ( ) ] ] ( ) está bem-formada, enquanto ( ( ) 
] está malformada. Implemente um programa que recebe um texto e analisa se ele está bem 
formado em termos de ordem de parêntesis e colchetes. */

class Sequencia {
  constructor() {
    this.caracteres = [];
    this.topo = 0;
  }
  push(elemento) {
    return (this.caracteres[this.topo++] = elemento);
  }
  pop() {
    if (!this.isEmpty()) {
      return this.caracteres[--this.topo];
    }
    throw new Error("Stackunderflow");
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.topo;
  }
  top() {
    if (!this.isEmpty()) {
      return this.caracteres[this.topo - 1];
    }
    throw new Error("Empty stack");
  }
  toString() {
    let str = "";
    for (let i = 0; i < this.topo(); i++) {
      str += this.caracteres[i] + "";
    }
    return str;
  }

  verificadorDeFechamento(char) {
    let stack = new Sequencia();
    // percorre a pilha de caracteres
    for (let i = 0; i < char.length; i++) {
      // verifica se existe caracteres de abertura, se existir adiciona a pilha
      if (char[i] === "(" || char[i] === "[") {
        stack.push(char[i]);
        // se for um caractere de fechamento retorna false
      } else if (char[i] === ")" || char[i] === "]") {
        if (stack.isEmpty()) {
          return undefined;
        }
        // guarda o topo pra verificar se
        let top = stack.pop();
        // se o caracter do top corresponder ao caractere atual, remove o elemento do topo da pilha
        if (
          (top === "(" && char[i] !== ")") ||
          (top === "[" && char[i] !== "]")
        )
         {
          return undefined;
        }
      }
    }
  }
}

const sequencia1 = "([])([][])())";
const sequencia2 = "[]";

const instancia = new Sequencia();
console.log(instancia.verificadorDeFechamento(sequencia1));
console.log(instancia.verificadorDeFechamento(sequencia2));
