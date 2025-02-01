function calculateTotal(cart) {
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (total > 100) {
        total *= 0.9; // Знижка 10%
    }

    return total;
}

export { calculateTotal };
