import React, { Component } from 'react';
import Timesheet from './Timesheet';
import CreateTimesheet from './CreateTimesheet';
import styles from './styles/Job.scss';


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

  //Checks if props (route params) have changed, and forces update of job in redux store, triggering update of job data
  componentDidUpdate(prevProps) {
    if (this.props.match.params.job_no !== prevProps.match.params.job_no) {
      this.props.requestJob(this.props.match.params.job_no);
    }
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
      <div>
        <div className={styles.JobOverview}>
          <h2>Job Overview</h2>
          <dl className={styles.JobDescription}>
            <dt>Job:</dt>
            <dd>{jobData.job_no}</dd>
            <dt>Client:</dt>
            <dd>{jobData.client && jobData.client.name}</dd>
            <dt>Start Date:</dt>
            <dd>{startDate.toLocaleDateString()}</dd>
            <dt>Brand: </dt>
            <dd>{jobData.brand}</dd>
            <dt>Model: </dt>
            <dd>{jobData.model}</dd>
            <dt>Job Category: </dt>
            <dd>{jobData.category}</dd>
            <dt>Status: </dt>
            <dd>{jobData.status}</dd>
          </dl>
        </div>
        <div className={styles.TimeSheets}>
          <h2>Timesheets</h2>
          <div className = {styles.TimesheetGrid} >
            {jobData.timesheets &&
              jobData.timesheets.map(timesheet => (
                <Timesheet
                timesheet={timesheet}
                key={timesheet._id}
                deleteTimesheet={this.deleteTimesheet}
                />
                ))}
          </div>
          <CreateTimesheet {...this.props} labourTypes={labour_types} />
        </div>
      </div>
    );
  }
}

export default Job;
