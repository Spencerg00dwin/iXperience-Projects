import React from 'react';

export default function BookTable(props) {
  return (

    <div className='container mt-4'>

<table className="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Author</th>
      <th scope="col">IBSN #</th>
    </tr>
  </thead>
  <tbody>
    {
      props.books.map((book) =>
      <tr key={book.id}>
        
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.ibsn}</td>
      </tr>)
      }
    
  </tbody>
</table>

    </div>
  )
}
