import React from "react";

const Book = ({ book }) => {
  return (
    <div className="book">
      <h2>{book.fields.title}</h2>
      <div>
        <img
          width="200"
          alt="book display"
          src={book.fields.image.fields.file.url}
        />
      </div>
      <p>({book.fields.author})</p>
    </div>
  );
};

export default Book;
