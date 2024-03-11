/* Questao 02 Uma Pilha pode ser  definida como um conjunto ordenado de dados, no qual os 
dados podem ser inseridos ou removidos a partir de uma extremidade chamada topo da pilha. 
Duas  pilhas  A  e  B  podem  ser  implementas  a  partir  do  compartilhamento  do  mesmo  vetor  de 
tamanho determinado, como apresentado na figura a seguir. Escreva as seguintes funções em 
Javascript. 
i. Declarações de constantes e procedimento de inicializar as pilhas (os valores de 
topoA e topoB). 
ii. As funções ÉVaziaA e ÉVaziaB. 
iii. As  funções  empilhaA,  empilhaB,  desempilhaA  e  desempilhaB.  Só  deve  ser 
emitida uma mensagem de pilha cheia se todas as posições do vetor estiverem ocupadas. */

class PilhaCompartilhada {
  constructor(tam) {
    this.tam = tam;
    this.vetor = new Array(tam);
    this.topoA = -1;
    this.topoB = tam;
  }
  vaziaA() {
    return this.topoA === -1;
  }
  vaziaB() {
    return this.topoB === this.tam;
  }
  empilhaA(elemento) {
    if (this.topoA - 1 === this.topoB) {
      console.log("Pilha A cheia");
    }
    this.vetor[++this.topoA] = elemento;
  }
  empilhaB(elemento) {
    if (this.topoB === this.topoA + 1) {
      console.log("Pilha B cheia");
    }
    this.vetor[--this.topoB] = elemento;
  }
  desempilhaA() {
    if (!this.vaziaA()) {
      return this.vetor[this.topoA--];
    } else {
      return null;
    }
  }

  desempilhaB() {
    if (!this.vaziaB()) {
      return this.vetor[this.topoB--];
    } else {
      return null;
    }
  }
}

const pilha = new PilhaCompartilhada(10);
pilha.empilhaA(5);
pilha.empilhaB(10);
console.log(pilha.desempilhaA()); // Saída: 5
console.log(pilha.desempilhaB()); // Saída: 10
