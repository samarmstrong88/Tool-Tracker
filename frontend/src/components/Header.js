import React from 'react';
import styles from './styles/Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.Header}>
        <h1 className={styles.h1}>ETS Job Tracker</h1>
      </div>
    );
  }
}

export default Header;
