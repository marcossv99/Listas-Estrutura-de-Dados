/*Implemente uma função para embaralhar a ordem dos elementos de uma lista 
simplesmente encadeada. */

import listaLigada from "./Lista.js";

class Lista {
    constructor() {
        this.lista = new listaLigada();
    }

    embaralhar() {
        let current = this.lista.head;
        while (current != null && current.next != null) {
            let temp = current.element;
            current.element = current.next.element;
            current.next = temp;
            current = current.next.next;
        }
    }
}
// const linkedList = new listaLigada();

// linkedList.add(1);
// linkedList.add(2);
// linkedList.add(3);
// linkedList.add(4);
// linkedList.add(5);

// console.log("lista original", linkedList.toString());

// linkedList.embaralhar();

// console.log("lista embaralhada", linkedList.toString());