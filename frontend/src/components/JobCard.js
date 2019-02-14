import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/JobCard.scss';

class JobCard extends Component {
  render() {
    const { job_no, brand } = this.props.job;
    return (
      <div className={styles.JobCard}>
        <div className={styles.Title}>
          <Link to={`/jobs/${job_no}`} className={styles.Number}>
            {job_no}
          </Link>
          <h3 className={styles.Name}>Placeholder Name</h3>
        </div>
        <div>
          Job No:
          {job_no}
        </div>
        <div>
          Brand:
          {brand}
        </div>
      </div>
    );
  }
}

export default JobCard;
