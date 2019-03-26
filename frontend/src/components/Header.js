import React from 'react';
import styles from './styles/Header.scss';
import SearchBarContainer from './SearchBarContainer';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className={styles.Header}>
    <div className={styles.header_wrapper}>
      <Link to="/">
        <h1 className={styles.h1}>Tool Tracker</h1>
      </Link>
      <SearchBarContainer />
    </div>
  </header>
);

export default Header;
