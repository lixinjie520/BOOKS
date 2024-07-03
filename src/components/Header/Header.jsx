import React from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.home}>
          <a className={styles.homeAnchor} href="#">
            My Booklist
          </a>
          <ul className={styles.navbarList}>
            <li className={styles.item}>
              <a className="nav-link" aria-current="page" href="#">
                About
              </a>
            </li>
            <li className={styles.item}>
              <a className="nav-link" href="#">
                Favorite
              </a>
            </li>
          </ul>
        </div>
        <form className={styles.searchForm}>
          <input
            className={styles.searchInput}
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className={styles.btn} type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </nav>
    </header>
  );
};

export default Header;
