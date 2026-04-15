import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const cart = [];
const myWishlist = [];
console. log("Bem vindo ao carrinho da Shopee");

const item1 = await createItem("fone-bluetooth", 50.55, 1);
const item2 = await createItem("teclado mecânico", 157.73, 4);

//adicionando item
await cartService.addItem(cart, item1);
await cartService.addItem(cart, item2);

//deletando item 
await cartService.deleteItem(cart, item2.name);

console.log("Shopee Cart TOTAL IS:");
await cartService.calculateTotal(cart);