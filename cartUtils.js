function calculateTotal(cart) {
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (total > 100) {
        total *= 0.9; // Знижка 10%
    }

    return total;
}

export { calculateTotal };


const cart = [
    { name: "Apple", price: 1, quantity: 10 },
    { name: "Banana", price: 3, quantity: 5 },
    { name: "Milk", price: 10, quantity: 2 },
];

console.log("Загальна сума:", calculateTotal(cart));

