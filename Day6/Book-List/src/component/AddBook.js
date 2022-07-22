import React, {useState} from "react";

import { Book } from '../models/book'


export default function AddBook(props) {

  const[bookName, setBookName] = useState('')

  const[authorName, setAuthorName] = useState('')

  const[ibsnNumber, setIbsnNumber] = useState('')



  function onSubmit(event){
    event.preventDefault()

      const book = new Book(
      bookName,
      authorName,
      ibsnNumber,
      new Date().getTime()
    )

    props.onBookCreated(book)

    setBookName('')
    setAuthorName('')
    setIbsnNumber('')

  }

  return (
    <div className="container mt-4">
        <h1>Add Book:</h1>
      <div className="mb-3">
        <label className="form-label">
          Title
        </label>
        <input
          value = {bookName}
          onChange={(event) => setBookName(event.target.value)}
          type="text"
          className="form-control" />
      </div>

      <div className="mb-3">
        <label  className="form-label">
          Author
        </label>
        <input
          value = {authorName}
          onChange={(event) => setAuthorName(event.target.value)}
          type="text"
          className="form-control"
        />
      </div>

       <div className="mb-3">
        <label className="form-label">
          IBSN #
        </label>
        <input
          value = {ibsnNumber}
          onChange={(event) => setIbsnNumber(event.target.value)}
          type="number"
          className="form-control"
        />
      </div>
    <form onSubmit={onSubmit}>
      <div className="d-grid gap-2">
        <button type="submit" className="btn btn-outline-secondary">Submit</button>
    </div>
    </form>



    </div>
  );
}
