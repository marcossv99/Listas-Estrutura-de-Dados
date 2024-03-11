/*Implemente uma fila usando a implementação duas pilhas básicas */

import Pilha from './Pilha.js';

class FilaPilha {
    constructor (tam = 10){
        this.pilha1 = new Pilha(tam);
        this.pilha2 = new Pilha(tam);
        this.tamMax = tam;
    }

    enqueue(x){
        // verifica se as pilhas estão cheias 
        if(this.pilha1.isFull() && this.pilha2.isFull()){
            // lança um erro caso estejam
            throw new Error ("overflow");
        }
        if(this.pilha1.isFull()){
            this.pilha2.enqueue(x);
        }
        else 
        {
            this.pilha1.enqueue(x);
        }
        console.log("pilha 1: ", this.pilha1.toString());
        console.log("pilha 2: ", this.pilha2.toString());

    }
    dequeue(){
        if(!this.isEmpty()){
            throw new Error ("underflow");
        }
        return this.pilha1.pop();
    }
    isEmpty(){
        return this.pilha1.isEmpty();
    }
    isFull(){
        return this.pilha1.isFull();
    }
    front(){
        return this.pilha1.topo();
    }
    length(){
        return this.pilha1.size();
    }
    toString(){
        return this.pilha1.toString();
    }
    clear(){

    }
}

const pFila = new FilaPilha();