// testLibrary.js

import { Book } from './librarySystem.js';  
import { Library } from './librarySystem.js'; 


const book1 = new Book("Володар перснів", "Дж. Р. Р. Толкін");
const book2 = new Book("1984", "Джордж Орвелл");
const book3 = new Book("Гаррі Поттер", "Дж. К. Роулінг");


const library = new Library();


library.addBook(book1);
library.addBook(book2);
library.addBook(book3);


console.log("Доступні книги:");
library.viewAvailableBooks();


library.checkoutBook("1984");


console.log("\nДоступні книги після видачі:");
library.viewAvailableBooks();


console.log("\nСпроба видати книгу, яка вже не доступна:");
library.checkoutBook("1984");



