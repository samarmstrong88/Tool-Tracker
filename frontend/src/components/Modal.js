import React from 'react';
import styles from './styles/Modal.scss';

const Modal = (props) => {
  const onOverlayClick = () => {
    console.log('Overlay click')
  }

  return (
    <div className = {styles.ModalOverlay} >
      <div className = {styles.ModalContent}>
        <div className = {styles.ModalDialog}>
          
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Modal;