/*QUESTÃO 1: (ENADE 2014, Adaptada) Uma estrutura de dados do tipo pilha pode ser usada 
em um algoritmo que permite imprimir uma palavra de forma invertida. Por exemplo, ABACAXI 
deve ser impresso IXACABA. Utilizando uma pilha e suas operações base, desenvolva a função 
inverte que recebe uma String e, utilizando as funções push e pop da pilha, retorne a palavra de 
forma invertida */

class Pilha {
  constructor() {
    this.items = [];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  push(elemento) {
    this.items.push(elemento);
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }
}
 inverter(palavra) {
  let p = new Pilha();
  for (let i = 0; i < palavra.length; i++) {
    p.push(palavra[i]);
  }

  let pInvertida = "";
  if (!p.isEmpty()) {
    for (let i = 0; i < palavra.length; i++) {
      // tira o elemento do topo da lista
      let cTopo = p.pop();
      // coloca o elemento do topo na variavel concatenando
      pInvertida += cTopo;
    }
  }
  return pInvertida;
}

let palavra = "TADS";
let pInvertida = inverter(palavra);
console.log(`Palavra invertida: ${pInvertida}`); 
