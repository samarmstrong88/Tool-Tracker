import React from 'react';
import styles from './styles/Header.scss';
import SearchBarContainer from './SearchBarContainer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../actions/actionCreators';

const Header = ({ userData, signOut }) => (
  <header className={styles.Header}>
    <div className={styles.header_wrapper}>
      <h1 className={styles.h1}>Tool Tracker</h1>
      {userData.loggedIn && (
        <>
          <SearchBarContainer />
          <img height="20px" width="20px" src="user_icon.svg" />
          <h2>{userData.username}</h2>
          <button onClick={signOut}>Sign Out</button>
        </>
      )}
    </div>
  </header>
);

function mapStateToProps({ userData }) {
  return {
    userData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signOut: () => dispatch(signOut()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
