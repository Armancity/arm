import React from 'react';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book">
          <img src={book.thumbnail} alt={book.title} />
          <h3>{book.title}</h3>
          <p>{book.authors}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
