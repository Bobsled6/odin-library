const button = document.getElementById(newBookButton);
const dialog = document.querySelector("dialog");

const myLibrary = [];

function Book(author, title, pages, read) {
    if (!new.target) {
        throw error("You must use the new operator to call the constructor")
    }
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return this.author + "'s " + this.title + ", " + this.pages + " pages, " + this.read
    }

}

function addBookToLibrary(author, title, pages, read) { 
    let libraryBook = new Book(author, title, pages, read);
    myLibrary.push(libraryBook) ;

}

addBookToLibrary('J.R.R. Tolkien', 'The Hobbit', '245', 'not read');
addBookToLibrary('J.K. Rowling', 'Harry Potter', '256', 'read');

console.log(myLibrary);


newBookButton.addEventListener("click", () => {
    dialog.showModal();
});

