import Node from "./Node.js";

class listaLigada {
    constructor() {
        this.head = new Node();
        this.count = 0;
    }
    add(element) {
        const newNode = new Node(element);
        let current;
        if (this.head === null) {
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
            if (index >= 0 && index < this.count) {
                let current = this.head;
                let previous;
                if (index === 0) {
                    this.head = current.next;
                } else {
                    previous = this.getIndexAt(index - 1);
                    current = previous.next;
                    previous.next = current.next;
                }
                this.count--;
                return current.element;
            }
        }
        throw new Error("empty list");
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
                newNode.next = current;
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