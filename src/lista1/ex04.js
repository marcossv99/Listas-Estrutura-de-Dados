/*Implemente um conversor de números decimais para binários utilizando uma pilha */


class ConversorBinario {
  constructor(tamMax = 5) {
    this.tamMax = tamMax;
    this.dados = [];
    this.topo = 0;
  }
  push(elemento) {
    if (!this.isFull()) {
      return this.dados[this.topo++] = elemento;
    }
    throw new Error("Stackoverflow");
  }
  pop() {
    if (!this.isEmpty()) {
      return this.dados[--this.topo];
    }
    throw new Error("Stackunderflow");
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.topo;
  }
  isFull() {
    return this.size() === this.tamMax;
  }
  toString() {
    let str = "";
    for (let i = 0; i < this.topo; i++) {
      str += this.dados[i] + " ";
    }
    return str;
  }
  top() {
    if (!this.isEmpty()) {
      return this.dados[this.topo - 1];
    }
    throw new Erro("Empty Stack");
  }

  conversor(num) {
    const pilha = new ConversorBinario();
    let resto;

    while (num > 0) {
      resto = num % 2;
      pilha.push(resto);
      num = (num - resto) / 2;
    }
    let binario = "";
    while (!pilha.isEmpty()) {
      binario += pilha.pop().toString();
    }
    return binario;
  }
}
const pilha = new ConversorBinario();
const numeroDecimal = 25;
const numeroBinario = pilha.conversor(numeroDecimal);
console.log(
  `O numero decimal ${numeroDecimal} tem o binario: ${numeroBinario}`
);
