import React from 'react';
import { displayTime } from '../utils/convertTime';
import styles from './styles/Timesheet.scss';
import confirmDelete from './confirmDelete';

const Timesheet = ({ timesheet, deleteTimesheet }) => {

  const handleDelete = () => {
    confirmDelete('Delete timesheet?').then(
      (result) => {
        deleteTimesheet(timesheet._id);
      },
      (result) => {
        console.log('cancel')
      }
    )
  };

  return (
    <div className={styles.Timesheet}>
      <h4>{timesheet.labourType} </h4>
      <p>{displayTime(timesheet.labourTime)}</p>
      <p>{timesheet.labourNotes} </p>
      <button onClick={handleDelete} className = {styles.DeleteButton}>Remove</button>
    </div>
  );
};

export default Timesheet;


