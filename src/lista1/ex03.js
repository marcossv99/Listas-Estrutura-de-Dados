/*Implemente uma função que troca de lugar o elemento que está no topo da pilha 
com o elemento que está na base da pilha. Usar apenas uma pilha como auxiliar. */

import ex03 from "../Lista 1/ex03";

class PilhaTroca {
  constructor(tam) {
    this.topo = 0;
    this.vetor = [];
    this.tam = tam;
  }
  push(elemento) {
    if (!this.isFull()) {
      return (this.vetor[this.topo++] = elemento);
    } else {
      throw new Error("Stackoverflow");
    }
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stackunderflow");
    }
    return this.vetor[--this.topo];
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.topo;
  }
  isFull() {
    return this.size() === this.tam;
  }
  top() {
    if (!this.isEmpty()) {
      return this.vetor[this.topo - 1];
    }
    throw new Error("Empty stack");
  }
  clear() {
    this.topo = 0;
  }
  toString() {
    let resultado = "";
    for (let i = 0; i < this.topo; i++) {
      resultado += this.vetor[i] + " ";
    }
    return resultado;
  }

  trocar() {
    // criação de uma pilha auxiliar
    const stackAux = [];

    // move todos os elementos da merda da pilha original para a merda da pilha auxiliar
    while (!this.isEmpty()) {
      stackAux.push(this.pop());
    }

    // guarda a porra do elemento do topo da pilha temporaria(que era o elemento da base da merda da pilha original) 
    const topo = stackAux.pop();

    // move todas as caralha dos elementos de volta para a pilha original
    while (stackAux.length > 0) {
      this.push(stackAux.pop());
    }

    // adiciona o elemento da base ao topo da pilha original
    this.push(topo);
  }
}

const pilha = new PilhaTroca();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.push(5);

console.log("pilha antes da troca:", pilha.toString());
pilha.trocar();
console.log("pilha depois da troca:", pilha.toString());