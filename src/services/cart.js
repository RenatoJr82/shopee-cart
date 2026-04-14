//Quais ações meu carrnho pode fazer

//CASOS DE USO
// adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

// deletar item do carrinho
async function deleteItem(userCart, name) {
    
}

// remover um item - diminui a quantidade de itens
async function removeItem(userCart, index) {
    
}

// calcular o total de itens
async function calculateTotal(userCart) {
    console.log (userCart.reduce((total, item) => total + item.subtotal(), 0));
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem
}