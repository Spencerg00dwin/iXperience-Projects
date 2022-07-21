import React, {useState} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import AddBook from './component/AddBook'
import BookTable from './component/BookTable'

export default function App() {

const[books, setBooks] = useState([])

  function onBookCreated(book){
    console.log(book)
    const newBooks = []
    for(let b of books) {newBooks.push(b)}
    newBooks.push(book)
    setBooks(newBooks)
  }

  return (
    <div>

      <AddBook onBookCreated={onBookCreated}></AddBook>

      <BookTable books={books}></BookTable>

    </div>


  )
}

