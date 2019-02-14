import React, { Component } from 'react';
import Timesheet from './Timesheet';
import CreateTimesheet from './CreateTimesheet';

class Job extends Component {
  state = {};

  componentDidMount() {
    this.props.requestJob(this.props.match.params.job_no);
    (async () => {
      const labour_types_raw = await fetch('/api/jobs/labour_types');
      const labour_types = await labour_types_raw.json();
      this.setState({ labour_types });
    })();
  }

  deleteTimesheet = async _id => {
    const jobNo = this.props.job.jobData.job_no;
    const deleteUrl = `/api/job/${jobNo}/timesheet/${_id}`;
    const deleteConfig = {
      method: 'delete',
      // headers: {
      //   Accept: 'application/json',
      //   'Content-Type': 'application/json',
      // },
    };
    const res = await fetch(deleteUrl, deleteConfig);
    if (res.ok) {
      this.props.requestJob(jobNo);
    }
  };

  render() {
    const {
      job,
      job: { jobData },
    } = this.props;
    const { labour_types } = this.state;

    const startDate = new Date(job.jobData.start_date);
    return (
      <div className="job">
        <h2>Job Overview</h2>
        <h3>{jobData.job_no}</h3>
        {/* <h2>{jobData.client}</h2> */}
        <p>Start Date: {startDate.toLocaleDateString()}</p>
        <p>Brand: {jobData.brand}</p>
        <p>Model: {jobData.model}</p>
        <p>Job Category: {jobData.category}</p>
        <p>Status: {jobData.status}</p>

        {jobData.timesheets &&
          jobData.timesheets.map(timesheet => (
            <Timesheet
              timesheet={timesheet}
              key={timesheet._id}
              deleteTimesheet={this.deleteTimesheet}
            />
          ))}

        <CreateTimesheet {...this.props} labourTypes={labour_types} />
      </div>
    );
  }
}

export default Job;
