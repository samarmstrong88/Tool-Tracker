import React from 'react';
import styles from './styles/JobCard.scss';

class JobCard extends React.Component {
  render() {
    return (
      <div className={styles.JobCard}>
        <div className={styles.Title}>
          <h3 className={styles.Number}>{this.props.job.job_no}</h3>
          <h3 className={styles.Name}>Placeholder Name</h3>
        </div>
        <div>
          Job No:
          {this.props.job.job_no}
        </div>
        <div>
          Brand:
          {this.props.job.brand}
        </div>
      </div>
    );
  }
}

export default JobCard;
