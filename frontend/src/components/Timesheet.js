import React from 'react';
import { displayTime } from '../utils/convertTime';

const Timesheet = ({ timesheet, deleteTimesheet }) => {
  const handleDelete = () => {
    deleteTimesheet(timesheet._id);
  };
  return (
    <div>
      <h3>{timesheet.labourType} </h3>
      <p>{displayTime(timesheet.labourTime)}</p>
      <p>{timesheet.labourNotes} </p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Timesheet;
