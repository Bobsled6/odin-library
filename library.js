const button = document.getElementById(newBookButton);
const dialog = document.querySelector("dialog");
const bookForm = document.getElementById("form");
const myLibrary = [];



function Book() {
    if (!new.target) {
        throw error("You must use the new operator to call the constructor")
    }
    let bookData = new FormData(bookForm);
    bookAuthor = bookData.get("author");
    bookTitle = bookData.get("title");
    bookPages = bookData.get("pages");
    bookRead = bookData.get("read");
    this.author = bookAuthor;
    this.title = bookTitle;
    this.pages = bookPages;
    this.read = bookRead;
    this.id = crypto.randomUUID();
    
    // this.info = function() {
    //    return this.author + "'s " + this.title + ", " + this.pages + " pages, " + this.read
    // }

}

function addBookToLibrary(){
    let libraryBook = new Book();
    myLibrary.push(libraryBook);
    console.log(myLibrary);
};


newBookButton.addEventListener("click", () => {
    dialog.showModal();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    addBookToLibrary();
    dialog.close();
    bookForm.reset();
});
    







