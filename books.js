let myLibrary = [];

class Book {
    constructor(title, author, pages, read='not read') {
        this.title = title;
        this.author = author,
        this.pages = pages,
        this.read = read;
    }
    addBookToLibrary() {
        myLibrary.push(this)
    }
}

const container = document.querySelector('.card-container');


const resetLibrary = function(){
    container.innerHTML = '';
}

let book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read');
let book2 = new Book('Mother Night', 'Kurt Vonnegut Jr.', 268, 'read');
let book3 = new Book('In Cold Blood', 'Truman Capote', 343, 'read');
let book4 = new Book('Reincarnation Blues', 'Michael Poore', 371);

book1.addBookToLibrary()

const createBookDom = function (){
    myLibrary.forEach((book, index) => {
        book.id = index;
        const bookEl = document.createElement('div');
        const bookTitle = document.createElement('h2')
        const bookAuthor = document.createElement('h3')
        const removeButton = document.createElement('button')
        const readStatusBtn = document.createElement('button');
    
        bookEl.classList.add('card');
        bookEl.setAttribute('id', `book-${index}`)
        removeButton.classList.add('remove-button')
        removeButton.setAttribute('id', `removeBtn-${index}`)
        readStatusBtn.classList.add('status-btn')
    
        bookTitle.textContent = `${book.title}`;
        bookAuthor.textContent = `${book.author}`;
        removeButton.textContent = 'delete';
        readStatusBtn.textContent = `${book.read}`

        removeButton.addEventListener('click', function(e){
            let el = document.querySelector(`#book-${index}`)
            el.remove();
            myLibrary = myLibrary.filter((book) => book.id !== index)
           console.log(myLibrary)
        })

        readStatusBtn.addEventListener('click', (e) => {
            if(book.read === 'not read'){
                book.read = 'read'
                readStatusBtn.textContent = book.read
            } else {
                book.read = 'not read'
                readStatusBtn.textContent = book.read
            }
            console.log(myLibrary)
        })
    
        bookEl.appendChild(bookTitle);
        bookEl.appendChild(bookAuthor);
        bookEl.appendChild(removeButton);
        bookEl.appendChild(readStatusBtn);
        container.appendChild(bookEl);        
    })
}

if (myLibrary !== []){
    createBookDom()
}


const newBookBtn = document.querySelector('.new-book-btn')
const newBookForm = document.querySelector('#new-book-form')

const bookTitle = document.querySelector('#bookTitle')
const bookAuthor = document.querySelector('#author')
const bookPages = document.querySelector('#pages')

newBookBtn.addEventListener('click', (e) => {
    newBookForm.style.visibility = 'visible';
})

newBookForm.addEventListener('submit', (e) => {
    container.innerHTML = '';
    e.preventDefault()
    let book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, 'not yet read')
    e.target.style.visibility = 'hidden';
    book.addBookToLibrary()
    createBookDom()
})

