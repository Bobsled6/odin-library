const button = document.getElementById(newBookButton);
const dialog = document.querySelector("dialog");
const bookForm = document.getElementById("form");
const myLibrary = [];
const authorHeader = document.getElementById("authorHeader");
const pagesHeader = document.getElementById("pagesHeader");
const readHeader = document.getElementById("readHeader");
const bookTable = document.getElementById("bookTable");





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
    for (let i = 0; i < myLibrary.length; i++)
{
    document
    .getElementById("tableDiv")
    .innerHTML = genTable(myLibrary);
     clickEvents();
}};

function genTable(myLibrary) {
    let bookTable = `
        <table id = "bookTable">
            <tr>
                <th id = "titleHeader"> Title </th>
                <th id = "authorHeader" > Author </th>
                <th id = "pagesHeader"> Pages </th>
                <th id = "readHeader"> Read? </th>
            </tr>`;
    for (const book of myLibrary) {
        bookTable += `
            <tr>
                <td> ${book.title} </td>
                <td> ${book.author} </td>
                <td> ${book.pages} </td>
                <td> ${book.read} </td>
            </tr> `;
    }
    bookTable += "</table>";
    return bookTable;
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


sortArrayTitle = function () {
     myLibrary.sort((a, b) => {
        const titleA = a.title.toUpperCase(); 
        const titleB = b.title.toUpperCase(); 
        if (titleA < titleB) {
        return -1;
    }
        if (titleA > titleB) {
        return 1;
  }
        return 0;
})}

sortArrayAuthor = function () {
     myLibrary.sort((a, b) => {
        const authorA = a.author.toUpperCase(); 
        const authorB = b.author.toUpperCase(); 
        if (authorA < authorB) {
        return -1;
    }
        if (authorA > authorB) {
        return 1;
  }
        return 0;
})}


clickEvents = function(){
    const authorHeader = document.getElementById("authorHeader");
    const titleHeader = document.getElementById("titleHeader");

     titleHeader.addEventListener("click", () => {

        sortArrayTitle();
        document
        .getElementById("tableDiv")
        .innerHTML = genTable(myLibrary);
         clickEvents();
})
     authorHeader.addEventListener("click", () => {
        sortArrayAuthor();
        document
        .getElementById("tableDiv")
        .innerHTML = genTable(myLibrary);
        clickEvents();
     })
}

