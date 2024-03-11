import No from "./No.js";
class Lista {
    constructor(){
        this.head = new No();
        this.size = 0;
    }
    add(dado){
        let novo = new No(dado);
        let x = this.head.proximo;
        this.head.proximo = novo;
        novo.proximo = x;
        this.size++;
    }
    addAt(posicao, dado){
        if(posicao < this.size){
            let x = 1;
            let novo = new No(dado);
            let aux = this.head;
            while(x < posicao){
                x++;
                aux = aux.proximo;
            }
            novo.proximo = aux.proximo;
            aux.proximo = novo;
            return;
        }
        return "Posição maior que a lista!";
    }
    append(dado){    
        this.size++;
        let x = this.head;
        while(x.proximo!=null){
            x = x.proximo;
        }
        let no = new No(dado);
        x.proximo = no;
        no.proximo = null;
    }
    search(data){
        if(!this.isEmpty()){
            let x = this.head;
            while(x.proximo !== null){
                if(data === x.dado){
                    return true;
                }
                x = x.proximo;
            }
        }
        return "Lista vazia";
    }
    removeAt(posicao){
        if(!this.isEmpty()){
            if(posicao < this.size){
                this.size--;
                let x = 1;
                let aux = this.head.proximo;
                while(x < posicao){
                    x++;
                    aux = aux.proximo;
                }
                aux.proximo.dado = null;
                aux.proximo = aux.proximo.proximo;
                return;
            }
            return "Posição maior que a lista!";
        }
        return "Lista vazia";
    }

    removeLast(){
        if(!this.isEmpty()){
            this.size--;
            let x = this.head.proximo;
            while(x.proximo!=null){
                x = x.proximo;
            }
            x.proximo = null;
            return x.dado;
        }   
        return "Lista vazia";
    }
    removeFirst(){
        if(!this.isEmpty()){
            this.size--;
            let x = this.head.proximo; 
            if(x.proximo != null){
                this.head.proximo = x.proximo;
                return;
            }
            this.head.proximo == null;
            return this.head.proximo.dado;
        }
        return "Lista vazia";
    }
    length(){
        return this.size;
    }
    isEmpty(){
        return this.head.proximo === null;
    }
}

export default Lista;