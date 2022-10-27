let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    } 
}

const addBookToLibrary = function(book) {
    myLibrary.push(book)
}

Book.prototype.anExample = function(){
    return 'this is an example of a prototype';
}

let book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not yet read');
let book2 = new Book('Mother Night', 'Kurt Vonnegut Jr.', 268, 'read');
let book3 = new Book('In Cold Blood', 'Truman Capote', 343, 'read');
let book4 = new Book('Reincarnation Blues', 'Michael Poore', 371, 'read');

addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)
addBookToLibrary(book4)

const container = document.querySelector('.cards')

const generateLibrary = function(){
    myLibrary.forEach((book, index) => {
        let bookEl = document.createElement('div');
        bookEl.setAttribute('class', 'card'); 
        bookEl.textContent = `${book.title} by ${book.author}`;

        book.id = index
        bookEl.setAttribute('id', `${index}`)

        container.appendChild(bookEl)
    })  
}
generateLibrary()


let bookEls = document.querySelectorAll('.card')
bookEls.forEach((bookEl, index) => {
    let buttonEl = document.createElement('button');
    buttonEl.textContent = 'X';
    buttonEl.setAttribute('class', 'deleteBtn')
    buttonEl.setAttribute('data-index-num', `${index}`)
    buttonEl.addEventListener('click', (e) => {
        container.innerHTML = '';
        myLibrary.splice(e.target.dataset.indexNum, 1);
    })
    bookEl.appendChild(buttonEl);
})


const newBookBtn = document.querySelector('.new-book-btn')
const newBookForm = document.querySelector('#new-book-form')

const bookTitle = document.querySelector('#bookTitle')
const bookAuthor = document.querySelector('#author')
const bookPages = document.querySelector('#pages')

newBookBtn.addEventListener('click', (e) => {
    newBookForm.style.visibility = 'visible';
})

newBookForm.addEventListener('submit', (e) => {
    card.innerHTML = '';
    e.preventDefault()
    let book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, 'not yet read')
    e.target.style.visibility = 'hidden';
    addBookToLibrary(book)
    generateLibrary()
})
