import Node from "./Node.js";

class listaLigada {
    constructor() {
        this.head = new Node();
        this.count = 0;
    }
    add(element) {
        const newNode = new Node();
        let current;
        if (this.newNode === null) {
            this.head = newNode;
        } else {
            current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.count++;
    }
    removeAt(index) {
        if (!this.isEmpty()) {
            // verifica valores fora do intervalo
            if (index >= 0 && index < this.count) {
                let current = this.head;
                // remove o primeiro elemento
                if (index === 0) {
                    // a cabeça da lista "pula/remove" o primeiro elemento
                    this.head = current.next;
                } else {
                    // variavel pra guardar o elemento anterior ao current
                    let previous
                    // iterando ate percorrer a lista inteira e remover o elemento do final/ou meio usando o previous/previous.next do current
                    for (let i = 0; i < index; i++) {
                        // previous recebe o elemento atual que deseja excluir
                        previous = current;
                        // o atual pega o nó dele e do proximo (pode ser null ou outro elemento)
                        current = current.next;
                    }
                }
                // faz ligacao de previous com o next de current: pula esse elemento para remove-lo
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        console("empty list");
    }

    getIndexAt(index) {
        if (!this.isEmpty()) {
            if (index >= 0 && index <= this.count) {
                let current = this.head;
                for (let i = 0; i < index && current != null; i++) {
                    current = current.next;
                }
                return current;
            }
        }
        return console.log("empty list");
    }
    insertAt(element, index) {
        if (index >= 0 && index <= this.count) {
            const newNode = new Node(element);
            if (index === 0) { // adicionar na primeira posicao
                const current = this.head;
                newNode.next = current;
                this.head = newNode;
            } else {
                const previous = this.getIndexAt(index - 1);
                const current = previous.next;
                node.next = current;
                previous.next = newNode;
            }
            this.count++; // atualiza o tamanho da lista
            return true;
        }
    }
    indexOf(x) {
        let current = this.head;
        for (let i = 0; i < this.count && current != null; i++) {
            if (this.equalsFn(x, current.element)) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }
    size() {
        return this.count;
    }
    isEmpty() {
        return this.size() === 0;
    }
    getHead() {
        return this.head;
    }
    toString() {
        if (this.head == null) {
            return '';
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for (let i = 1; i < this.size() && current != null; i++) {
            objString = `${objString},${current.element}`;
            current = current.next;
        }
        return objString;
    }



}

const linkedList = new listaLigada();
// lista.push(15);
// lista.push(10);

export default listaLigada;