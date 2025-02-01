import { calculateTotal } from './cartUtils.js';

const cart = [
    { name: "Apple", price: 1, quantity: 10 },
    { name: "Banana", price: 3, quantity: 5 },
    { name: "Milk", price: 10, quantity: 2 },
];

console.log("Загальна сума:", calculateTotal(cart)); 
