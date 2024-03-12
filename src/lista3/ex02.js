/*mplemente uma fila de tamanho dinâmico usando uma lista simplesmente 
encadeada. */

import listaLigada from "./Lista.js";

class ListaFila {
    constructor() {
        this.lista = new listaLigada();
    }

    enqueue(dado) {
        return this.lista.add(dado);
    }
    dequeue() {
        if (!this.isEmpty()) {
            return this.lista.removeAt();
        }
        throw new Erro("underflow");
    }
    isEmpty() {
        return this.lista.isEmpty();
    }
    length() {
        return this.lista.size();
    }
    toString() {
        return this.lista.toString();
    }
    front() {
        if (!this.isEmpty()) {
            return this.lista.getHead();
        }
    }

}

export default ListaFila;