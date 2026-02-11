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
    console.log(libraryBook);

}

addBookToLibrary('J.R.R. Tolkien', 'The Hobbit', '245', 'not read');

