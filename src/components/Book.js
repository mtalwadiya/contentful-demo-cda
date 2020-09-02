import React from "react";

const Book = ({ book }) => {
  return (
    <div className="book">
      <h2>{book.title}</h2>
      <div>
        <img
          width="200"
          alt="book display"
          src={book.image.url}
        />
      </div>
      <p>({book.author})</p>
    </div>
  );
};

export default Book;
