import React from 'react';
import styles from './styles/Pagination.scss';

const Pagination = ({changePage, page, numberOfPages}) => {
  return (
    <div className = {styles.Pagination}>
      <button disabled = {(page == 1)} onClick = {() => {changePage('first')}}>First</button>
      <button disabled = {(page == 1)} onClick = {() => {changePage('prev')}}>&lt;</button>
      <button disabled = {(page == numberOfPages)} onClick = {() => {changePage('next', numberOfPages)}}>
      &gt;</button>
      <button disabled = {(page == numberOfPages)} onClick = {() => {changePage('last',  numberOfPages)}}>
      Last</button>
    </div>
  );
};

export default Pagination;