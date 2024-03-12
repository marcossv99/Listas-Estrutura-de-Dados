import ListaFila from "./ex02.js";

function testListaFilha(){
    const fila = new ListaFila();


    fila.enqueue(1);
    fila.enqueue(2);
    fila.enqueue(3);
    fila.enqueue(4);
    fila.enqueue(5);

    console.log("lista com fila dinamicamente implementada ", fila.toString());

}

// let fila;

// beforeEach(() => {
//     fila = new ListaFila();
// });

// test("Inicialização", () => {
//     expect(fila.isEmpty()).toBe(true);
//     expect(fila.length()).toBe(0);
// });

// test("Enfileirar e Desenfileirar elementos", () => {
//     fila.enqueue("A");
//     expect(fila.isEmpty()).toBe(false);
//     expect(fila.length()).toBe(1);
//     expect(fila.front().element).toBe("A");

//     fila.enqueue("B");
//     fila.enqueue("C");
//     expect(fila.length()).toBe(3);

//     expect(fila.dequeue()).toBe("A");
//     expect(fila.length()).toBe(2);
//     expect(fila.front().element).toBe("B");

//     expect(fila.dequeue()).toBe("B");
//     expect(fila.length()).toBe(1);
//     expect(fila.front().element).toBe("C");

//     expect(fila.dequeue()).toBe("C");
//     expect(fila.isEmpty()).toBe(true);
//     expect(fila.length()).toBe(0);
// });

// test("Testes com Fila Vazia", () => {
//     expect(() => fila.dequeue()).toThrowError("underflow");
//     expect(fila.front()).toBeUndefined();
// });

// test("Testes Diversos", () => {
//     fila.enqueue(10);
//     fila.enqueue(20);
//     fila.enqueue(30);
//     expect(fila.asArray()).toStrictEqual([10, 20, 30]);
//     expect(fila.length()).toBe(3);

//     fila.dequeue();
//     expect(fila.asArray()).toStrictEqual([20, 30]);
//     expect(fila.length()).toBe(2);

//     fila.enqueue(40);
//     expect(fila.asArray()).toStrictEqual([20, 30, 40]);
//     expect(fila.length()).toBe(3);

//     fila.dequeue();
//     expect(fila.asArray()).toStrictEqual([30, 40]);
//     expect(fila.length()).toBe(2);
// });