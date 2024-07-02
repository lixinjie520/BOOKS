import React from "react";
import books from "./books.js"; // 根据你的实际路径
import Header from "./components/Header/Header.jsx";

function BookList() {
  return (
    <>
      <Header />
      <div>
        {books.map((book) => (
          <div key={book.id}>
            <h2>{book.name}</h2>
            <p>Author: {book.author}</p>
            <p>Published Date: {book.publishedDate}</p>
            <p>Publisher: {book.publisher}</p>
            <p>Description: {book.description}</p>
            <p>ISBN: {book.isbn}</p>
            <img src={book.image} alt={`${book.name} cover`} />
          </div>
        ))}
      </div>
    </>
  );
}

export default BookList;
