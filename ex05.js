/*5: Uma fila duplamente terminada (abreviada como Deque, do inglês double ended 
queue) é um tipo de dado abstrato que generaliza uma fila, para a qual os elementos podem ser 
adicionados ou removidos da frente (cabeça) ou de trás (cauda). Sobre o Deque realize as 
seguintes implementações utilizando a linguagem de programação Javascript.
i. Implemente a função para instanciar e inicializar um Deque. (0,5)
ii. Implemente a função de inserir no início de um Deque. (0,5)
iii. Implemente a função de remover do início de um Deque. (0,5)
iv. Implemente a função de inserir no fim de um Deque. (0,5)
v. Implemente a função de remover do fim de um Deque. (0,5) */

class Deque {
    constructor(tam = 10) {
        this.dados = [];
        this.fim = 0;
        this.inicio = 0;
        this.tam = tam;
    }

    isEmpty() {
        return this.inicio === this.fim;
    }
    length() {
        return this.fim - this.inicio;
    }
    clear() {
        this.fim = 0;
        this.inicio = 0;
    }
    toString() {
        let resultado = "";
        for (let i = this.inicio; i < this.fim; i++) {
            resultado += this.dados[i] + " ";
        }
        return resultado;
    }
    addFront(elemento) {
        if (this.isFull()) {
            console.log("Deque cheia");
            return;
        }
        if (this.isEmpty()) {
            this.addBack(elemento);
        } else if (this.inicio === 0) {
            for (let i = this.fim; i > 0; i--) {
                this.dados[i] = this.dados[i - 1];
            }
            this.fim++;
            this.inicio = 0;
            this.dados[0] = elemento;
        } else {
            this.inicio--;
            this.dados[this.inicio] = elemento;
        }
    }
    addBack(elemento) {
        if (this.isFull()) {
            console.log("Deque cheia");
        }
        this.dados[this.fim++] = elemento;

    }
    isFull() {
        return this.length === this.tam;
    }
    removeFront() {
        if (!this.isEmpty()) {
            return this.inicio++;
        }
    }
    removeBack() {
        if (!this.isEmpty()) {
            const elementoRemovido = this.peekBack();
            this.fim--;
            return elementoRemovido;
        }
    }
    peekFront() {
        if (!this.isEmpty()) {
            const elementoRemovido = this.peekFront();
            this.inicio++;
            return elementoRemovido;
        }
    }
    peekBack() {
        if (!this.isEmpty()) {
            return this.fim - 1;
        }
    }

}

const deque = new Deque();

deque.addFront(1);
deque.addFront(2);
deque.addFront(3);
deque.addFront(4);
deque.removeBack();
deque.removeFront();

console.log("deque:", deque.toString());
console.log("removido do início:", deque.removeFront());
console.log("removido do fim:", deque.removeBack());
console.log("deque atualizado:", deque.toString());