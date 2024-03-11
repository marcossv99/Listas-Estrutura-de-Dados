/*: Implemente uma pilha usando a implementação de duas filas básicas. */

import Fila from './Fila.js';

class PilhaFila {
    constructor(tam = 10) {
        // inicializa as filas com um tamanho determinado 
        this.fila1 = new Fila(tam);
        this.fila2 = new Fila(tam);
        this.tamanhoMaximo = tam;
    }

    // método pra add elemento (x) a pilha
    push(x) {
        // verifica se as pilhas estão cheia 
        if (this.fila1.isFull() && this.fila2.isFull() ) {
            // lançamento de erro caso estejam
            throw new Error("Overflow - A pilha está cheia.");
        }
        // se a fila 1 estiver cheia, adicionar na lista 2
        if(this.fila1.isFull()){
            this.fila2.enqueue(x);
        } 
        // se a fila 1 nao estiver cheia, adiciona na 1
        else 
        {
            this.fila1.enqueue(x);
        }
        
        // impressao dos dados atuais
        console.log("fila 1: ", this.fila1.toString());
        console.log("fila 2: ", this.fila2.toString());
    }

    // método para remover elemento (ultimo adicionado) da lista
    pop() {
        // verifica se a pilha está cheia
        if (!this.isEmpty()) {
            // se nao estiver, remove elemento da fila 1
            return this.fila1.dequeue();
        }
        // lança erro
        throw new Error("Underflow - A pilha está vazia.");
    }

    // método para obter elemento do topo da pilha
    peek() {
        // retorna o primeiro elemento da fila
        return this.fila1.front();
    }

    // método para verificar se a pilha está vazia
    isEmpty() {
        // retorna verdadeiro se a fila 1 estiver vazia
        return this.fila1.isEmpty();
    }

    // método pra verificar o tamanho da pilha
    size() {
        // retorna o tamanho da fila 1 
        return this.fila1.length();
    }

    // método pra verificar se a pilha está cheia
    isFull() {
        // retorna true se a fila estiver cheia
        return this.size() === this.tamanhoMaximo;
    }

    // método para converter a pilha em string
    toString() {    
         // retorna a string
        return this.fila1.toString();
    }
}

const pilha = new PilhaFila(5);

// Testando push
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.pop();

console.log(pilha.toString());