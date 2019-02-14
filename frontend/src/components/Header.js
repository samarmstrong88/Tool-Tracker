import React from 'react';
import styles from './styles/Header.scss';
import SearchBarContainer from './SearchBarContainer';

const Header = () => (
  <header className={styles.Header}>
    <div className={styles.header_wrapper}>
      <h1 className={styles.h1}>Tool Tracker</h1>
      <SearchBarContainer />
    </div>
  </header>
);

export default Header;
