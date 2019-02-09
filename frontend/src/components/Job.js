import React from 'react';
import Timesheet from './Timesheet';
import CreateTimesheet from './CreateTimesheet';

const Job = props => {
  const { labour_types, job } = props;

  const startDate = new Date(job.start_date);

  return (
    <div className="job">
      <h2>Job Overview</h2>
      <h3>{job.job_no}</h3>
      {/* <h2>{job.client}</h2> */}
      <p>Start Date: {startDate.toLocaleDateString()}</p>
      <p>Brand: {job.brand}</p>
      <p>Model: {job.model}</p>
      <p>Job category: {job.category}</p>
      <p>Status: {job.status}</p>

      {job.timesheets &&
        job.timesheets.map(timesheet => <Timesheet timesheet={timesheet} />)}

      <CreateTimesheet job={props.job} labourTypes={labour_types} />
    </div>
  );
};

export default Job;
