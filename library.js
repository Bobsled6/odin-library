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
    this["data-id"] = crypto.randomUUID();
    
    
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
                <th id = "removeHeader">Remove </th>
            </tr>`;
    for (const book of myLibrary) {
        bookTable += `
            <tr>
                <td> ${book.title} </td>
                <td> ${book.author} </td>
                <td> ${book.pages} </td>
                <td> <input  class = "readCheckbox" id = "${book["data-id"] + 1}" type = "checkbox"> </td>
                <td> <button class = "removeButton" id = "${book["data-id"]}"> Delete </button> </td>
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

sortArrayPages = function () {
     myLibrary.sort((a, b) => {
        const pagesA = a.pages;
        const pagesB = b.pages;
        if (pagesA < pagesB) {
        return -1;
    }
        if (pagesA > pagesB) {
        return 1;
  }
        return 0;
})}

clickEvents = function(){
    const authorHeader = document.getElementById("authorHeader");
    const titleHeader = document.getElementById("titleHeader");
    const pagesHeader = document.getElementById("pagesHeader");
    const removeButton = document.querySelectorAll(`button.removeButton`);
    const readCheckbox = document.querySelectorAll('input.readCheckbox');

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

      pagesHeader.addEventListener("click", () => {
        sortArrayPages();
        document
        .getElementById("tableDiv")
        .innerHTML = genTable(myLibrary);
        clickEvents();
})
     removeButton.forEach((btn) => {
        
        btn.addEventListener("click", () => {
             let remove = myLibrary.findIndex(myLibrary => myLibrary["data-id"] === btn.id); 
        if (remove !== -1) {
            myLibrary.splice(remove, 1);
        }
        document
        .getElementById("tableDiv")
        .innerHTML = genTable(myLibrary);
        clickEvents();
})
})

    readCheckbox.forEach ((cbx) => {
        let checkBoxTest = myLibrary.findIndex(myLibrary => myLibrary["data-id"] + 1 === cbx.id);
        if (checkBoxTest !== -1 && bookRead === "on") {
        console.log(myLibrary[checkBoxTest].read);
        }
        
           if (myLibrary[checkBoxTest].read === "on") {
        cbx.checked = true;
       }
       else {
        cbx.checked = false;
       }

       cbx.addEventListener ("change", () => {
        if(myLibrary[checkBoxTest].read === "on") {
            myLibrary[checkBoxTest].read = "null"
        }
        else {myLibrary[checkBoxTest].read = "on"}
       })
       
 })
      
};



