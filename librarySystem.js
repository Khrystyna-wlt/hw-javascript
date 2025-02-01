class Book {
    #title; 
    #author;
    #isAvailable;

    constructor(title, author) {
        this.#title = title;
        this.#author = author;
        this.#isAvailable = true;  
    }

    getTitle() {
        return this.#title;
    }

    getAuthor() {
        return this.#author;
    }

    isAvailable() {
        return this.#isAvailable;
    }

    checkoutBook() {
        if (this.#isAvailable) {
            this.#isAvailable = false;
            console.log(`Книга "${this.#title}" видана.`);
        } else {
            console.log(`Книга "${this.#title}" вже не доступна.`);
        }
    }
}

export { Book }; 


class Library {
    books = []; 

    addBook(book) {
        this.books.push(book);
        console.log(`Книга "${book.getTitle()}" додана в бібліотеку.`);
    }

    checkoutBook(title) {
        const book = this.books.find(b => b.getTitle() === title);

        if (book) {
            book.checkoutBook();
        } else {
            console.log(`Книга "${title}" не знайдена в бібліотеці.`);
        }
    }

    viewAvailableBooks() {
        const availableBooks = this.books.filter(book => book.isAvailable());

        if (availableBooks.length > 0) {
            console.log("Доступні книги:");
            availableBooks.forEach(book => {
                console.log(`"${book.getTitle()}" автор: ${book.getAuthor()}`);
            });
        } else {
            console.log("Немає доступних книг.");
        }
    }
}

export { Library };  
