import React from 'react';

const Timesheet = ({ timesheet }) => (
  <div>
    <h3> {timesheet.labourType} </h3>
    <p> {timesheet.labourTime} </p>
    <p> {timesheet.labourNotes} </p>
  </div>
);

export default Timesheet;
