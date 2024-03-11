/*. Implemente uma função para intercalar filas, a função ao recebe as duas filas como 
parâmetro e retorna uma fila com os elementos das duas filas intercalados.
 */


class FilaIntercalada {
    constructor(tam = 10) {
        this.tamMax = tam;
        this.dados = [tam];
        this.fim = 0;
        this.inicio = 0;
    }

    enqueue(x) {
        if (!this.isFull()) {
            this.dados[this.fim++] = x;
            return;
        }
        throw new Error("overflow");
    }
    dequeue() {
        if (!this.isEmpty()) {
            let item = this.dados[this.inicio];
            this.inicio++;
            return item;
        }
        throw new Error("underflow");
    }
    isEmpty() {
        return this.inicio === this.fim;
    }
    length() {
        return this.fim - this.inicio;
    }
    isFull() {
        return this.length() === this.tamMax;
    }
    peek() {
        if (!this.isEmpty()) {
            return this.dados[this.inicio];
        }
        throw new Error("empty");
    }
    toString() {
        let res = "";
        for (let i = this.inicio; i < this.fim; i++) {
            res += this.dados[i] + " ";
        }
        return res;
    }
    clear() {
        this.inicio = 0;
        this.fim = 0;
    }
    intercalar(fila1, fila2) {
        // criação de uma fila vazia com os metodos da classe FilaIntercalada
        let fila = new FilaIntercalada();
        // verificação inicial caso as filas estejam cheias
        if (fila1.isFull() && fila2.isFull()) {
            console.log("filas cheias!!");
        } else {
            while (!fila1.isEmpty() && !fila2.isEmpty()) {
                
                if (!fila1.isEmpty()) {
                    fila.enqueue(fila1.dequeue());
                }
                if (!fila2.isEmpty()) {
                    fila.enqueue(fila2.dequeue());
                }
            }
        }
        return fila;
    }
}


let fila1 = new FilaIntercalada();
fila1.enqueue(1);
fila1.enqueue(2);
fila1.enqueue(4);
fila1.enqueue(5);
let fila2 = new FilaIntercalada();
fila2.enqueue(6);
fila2.enqueue(7);
fila2.enqueue(8);
fila2.enqueue(9);

let filaintercalada = new FilaIntercalada().intercalar(fila1,fila2);
console.log("fila intercalada: " + filaintercalada.toString());