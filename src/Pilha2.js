class Pilha {

    // construtor da classe Pilha
    constructor(tam = 5) {
        this.dados = [];
        this.tam = tam;
        this.topo = 0;
    }

    // método para adicionar um elemento à pilha
    push(dado) {
        // verifica se a pilha não está cheia
        if (!this.isFull()) {
            // adiciona o dado ao array na posição topo e incrementa o topo
            this.dados[this.topo++] = dado;
            return; // Retorna sem fazer mais nada
        }
        // se a pilha estiver cheia, lança um erro
        throw new Error("Stackoverflow");
    }

    // método para remover e retornar o elemento do topo da pilha
    pop() {
        // verifica se a pilha está vazia
        if (this.isEmpty()) {
            // se a pilha estiver vazia, lança um erro
            throw new Error("Stackunderflow");
        } else {
            // se a pilha não estiver vazia, decrementa o topo
            this.topo--;
        }
    }

    // método para retornar o elemento do topo da pilha sem removê-lo
    top() {
        // Verifica se a pilha não está vazia
        if (!this.isEmpty()) {
            // retorna o elemento na posição topo - 1 do array (elemento do topo)
            return this.dados[this.topo - 1];
        }
        // se a pilha estiver vazia, lança um erro
        throw new Error("Empty stack");
    }

    // método para limpar todos os elementos da pilha
    clear() {
        // define o topo como 0, removendo todos os elementos
        this.topo = 0;
    }

    // método para retornar o número de elementos na pilha
    size() {
        // retorna o valor do topo, que é o número de elementos na pilha
        return this.topo;
    }

    // método para retornar uma representação em string dos elementos na pilha
    toString() {
        let resultado = "";
        // itera sobre os elementos no array até o topo
        for (let i = 0; i < this.topo; i++) {
            // concatena os elementos em uma string
            resultado += this.dados[i];
        }
        // retorna a string resultante
        return resultado;
    }

    // método para verificar se a pilha está vazia
    isEmpty() {
        // retorna true se o topo for igual a 0 (pilha vazia), caso contrário, retorna false
        return this.topo === 0;
    }

    // método para verificar se a pilha está cheia
    isFull() {
        // retorna true se o topo for igual ao tamanho máximo da pilha, caso contrário, retorna false
        return this.topo === this.tam;
    }
}

export default Pilha;
