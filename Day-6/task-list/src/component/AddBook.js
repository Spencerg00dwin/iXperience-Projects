import React from "react";

export default function AddBook() {
  return (
    <div className="container mt-4">
        <h1>Add Book:</h1>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>

      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Author
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>

            <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          IBSN #
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>

      <div class="d-grid gap-2">
        <button type="button" className="btn btn-outline-secondary">Submit</button>
    </div>



    </div>
  );
}
