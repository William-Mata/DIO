const valores = [5, 1, 4, 6, 7, 8];

console.log(valores.reduce((prev, current) => {
    return prev + current;
}));



const compras = [
    {item: "Feijão",
    preco: 7,} ,
    {item: "Arroz",
    preco: 18,} ,
    {item: "Café",
    preco: 20,} ,
    {item: "Açucar",
    preco: 4,} ,
    {item: "Carne",
    preco: 30,}];

var saldo = 500;

console.log(compras.reduce((prev, current) => {
    return prev - current.preco;
}, saldo));