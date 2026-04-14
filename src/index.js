import createItem from "./services/item.js";

const cart = [];
console. log("Bem vindo ao carrinho da Shopee");

const item1 = await createItem("fone-bluetooth", 50.55, 1);
const item2 = await createItem("teclado mecânico", 157.73, 4);

console.log(item2.subtotal());