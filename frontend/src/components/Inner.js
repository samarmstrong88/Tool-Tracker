import React from 'react';
import styles from './styles/Inner.scss';

const Inner = props => <div className={styles.Inner}>{props.children}</div>;

export default Inner;
