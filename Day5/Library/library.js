
class Book {

    constructor(title, author, ISBN){
        this.title = title
        this.author = author
        this.ISBN = ISBN
    }
}

class UserInterface {
    constructor(){
        this.authorInput = document.getElementById('author-input')
        this.isbnInput = document.getElementById('ISBN-input')
        this.button = document.getElementById('button')
        this.tableBody = document.getElementById('table-body')
        this.titleInput = document.getElementById('title-input')

        this.books = []
    }

    bindEventListeners(){
        this.button.addEventListener('click', (event) =>{
            this.handleButtonClick(event)

        })
    }

    handleButtonClick(event){
        const book = new Book(
        this.titleInput.value,
        this.authorInput.value,
        this.isbnInput.value,
        )

        this.books.push(book)

        this.titleInput.value = ''
        this.authorInput.value = ''
        this.isbnInput.value = ''

        this.populateTable();
    
    }

    populateTable(){
        this.tableBody.innerHTML = ''

        for(let book of this.books){
            const row = document.createElement('tr')
            const titleCell = document.createElement('td')
            const authorCell = document.createElement('td')
            const isbnCell = document.createElement('td')
            const actionsCell = document.createElement('td')

            row.append(titleCell)
            row.append(authorCell)
            row.append(isbnCell)
            row.append(actionsCell)

            this.tableBody.append(row);

            titleCell.innerHTML = book.title;
            authorCell.innerHTML = book.author
            isbnCell.innerHTML = book.isbn
        }
    }
}

const ui = new UserInterface();
ui.bindEventListeners();