import React from 'react';
import PropTypes from 'prop-types';
import { confirmable } from 'react-confirm';
import Modal from './Modal';
import styles from './styles/Modal.scss'

const ConfirmDeleteDialog = ({show, proceed, dismiss, cancel, confirmation, options}) => {
  if(show) return (
    <Modal onHide={dismiss} show={show}>
      
        <p>{confirmation}</p>
        <button className = 'button-cancel' onClick = {() => cancel()} >Cancel</button>
        <button className = {styles.ButtonDelete} onClick = {() => proceed()} >Delete</button>
      
      
    </Modal>
  );
  return null;
};

ConfirmDeleteDialog.propTypes = {
  show: PropTypes.bool,            // from confirmable. indicates if the dialog is shown or not.
  proceed: PropTypes.func,         // from confirmable. call to close the dialog with promise resolved.
  cancel: PropTypes.func,          // from confirmable. call to close the dialog with promise rejected.
  dismiss: PropTypes.func,         // from confirmable. call to only close the dialog.
  confirmation: PropTypes.string,  // arguments of your confirm function
  options: PropTypes.object        // arguments of your confirm function
}

export default confirmable(ConfirmDeleteDialog);


//from https://www.npmjs.com/package/react-confirm