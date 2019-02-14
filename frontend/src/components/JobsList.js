import React, { Component } from 'react';
import styles from './styles/Jobs.scss';

import JobCard from './JobCard';

class JobsList extends Component {
  render() {
    const jobs = this.props.jobs.jobs;
    const cat_filter = this.props.jobFilters.cat_filter;
    const status_filter = this.props.jobFilters.status_filter;

    const filtered_jobs = jobs
      // filter by category
      .filter(
        job => cat_filter === 'all' || cat_filter === job.category.toLowerCase()
      )
      // filter by status - if no status then display all
      .filter(
        job => status_filter.length === 0 || status_filter.indexOf(job.status) > -1
      )
      // return first 10 items
      .slice(0, 10);

    // TODO add pagination
    return (
      // render the filtered list of jobs
      <div className={styles.list}>
        {filtered_jobs.map(job => (
          <JobCard job={job} key={job.job_no} />
        ))}
      </div>
    );
  }
}

export default JobsList;
