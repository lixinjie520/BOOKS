import React from "react";
import books from "../../books.js";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      {books.map((book) => (
        <div className={styles.card} key={book.id}>
          <img
            src={book.image}
            className={`card-img-top ${styles.cardImage}`}
            alt="book cover"
          />

          <div className={`card-body ${styles.cardBody}`}>
            <h5 className="card-title">{book.name}</h5>
            <p className="card-author">Author : {book.author}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
