/*Implemente uma pilha de tamanho dinâmico usando uma lista simplesmente 
encadeada. */

import Lista from "./Lista.js";


class PilhaLista {
    constructor() {
        this.lista = new listaLigada();
    }

    push(dado) {
        this.lista.add(dado); // adicionando um elemento ao final da lista ligada (equivalente a adicionar no topo da pilha)
    }
    pop() {
        if (!this.isEmpty()) {
            return this.lista.removeAt(this.lista.size() - 1); // remove o elemento retornando ele 
        }
        throw new Error("underflow");
    }
    top() {
        if (!this.isEmpty()) {
            return this.lista.getHead().element; // retorna o elemento da cabeça da lista
        }
        console.log("empty stack");
    }
    isEmpty() {
        return this.lista.isEmpty();
    }
    size() {
        return this.lista.size();
    }
    clear() {
        this.lista = new listaLigada();
    }
    toString() {
        return this.lista.toString();
    }
}

import Pilha from "../Pilha";

const pilha = new PilhaLista();

console.log("adicionando...");
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.push(5);

console.log("elemento do topo: ", pilha.topo());

console.log("tamanho da pilha: ", pilha.size());

console.log("pilha vazia: ", pilha.isEmpty());

pilha.pop();
pilha.pop();
pilha.pop();

console.log("pilha depois dos pop: ", pilha.toString());