import React from 'react';
import Timesheet from './Timesheet';

const Job = props => {
  const start_date = new Date(props.job.start_date);

  return (
    <div className="job">
      <h2>Job Overview</h2>
      <h3>{props.job.job_no}</h3>
      {/* <h2>{props.job.client}</h2> */}
      <p>Start Date: {start_date.toLocaleDateString()}</p>
      <p>Brand: {props.job.brand}</p>
      <p>Model: {props.job.model}</p>
      <p>Job category: {props.job.category}</p>
      <p>Status: {props.job.status}</p>

      <Timesheet job={props.job} />
    </div>
  );
};

export default Job;
