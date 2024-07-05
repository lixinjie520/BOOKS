import React from "react";
import books from "../../books.js";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      {books.map((book) => (
        <div href="#" className={styles.card} key={book.id}>
          <img src={book.image} alt="book cover" className={styles.image} />
          <div className={styles.cardBody}>
            <h1 className={styles.title}>{book.title}</h1>
            <h2 className={styles.author}>{book.author}</h2>
            <button className={styles.btn}>更多</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
