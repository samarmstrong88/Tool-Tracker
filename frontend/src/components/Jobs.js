import React, { Component } from 'react';

import styles from './styles/Jobs.scss';
import JobCard from './JobCard';
import FilterBar from './FilterBar';
import JobsList from './JobsList';

class Jobs extends Component {
  constructor(props) {
    super(props);

    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);

    this.state = {
      jobData: [],
      selectedCategory: 'Warranty',
      statusList: ['to-be-started'],
    };
  }

  componentDidMount() {
    // fetch('http://etstooltracker.qwugpm3akq.us-east-1.elasticbeanstalk.com/job/all')
    // fetch('/job/all')
    //   .then(res => res.json())
    //   .then(res => this.setState({ jobData: res }))
    // .then(console.log(this.state.jobData))
    this.props.requestJobs();
  }

  handleStatusChange(e) {
    const statusList = this.state.statusList;

    if (statusList.includes(e.target.value)) {
      const index = statusList.indexOf(e.target.value);
      statusList.splice(index, 1);
      this.setState({ statusList });
    } else {
      statusList.push(e.target.value);
      this.setState({ statusList });
    }
  }

  handleCategoryChange(e) {
    this.setState({ selectedCategory: e.target.value });
  }

  render() {
    return (
      <div className={styles.container}>
        <FilterBar
          jobFilters={this.props.jobFilters}
          handleStatusChange={this.props.updateJobStatusFilters}
          handleCategoryChange={this.props.updateJobCatFilters}
        />
        <JobsList {...this.props} />
        {/* <div className='ContentArea'>
          <ul>
            {this.state.jobData
              .filter((job) => {
                if (this.state.selectedCategory === 'all') return true;
                if (job.category === this.state.selectedCategory) return true;
                else return false

              })
              .filter((job) => {
                if (this.state.statusList.length === 0) return true;
                if (this.state.statusList.includes(job.status)) return true
                return false;
              })
              .sort((a, b) => b.job_no - a.job_no)
              .map((job, key) => {
                return <JobCard jobCardData={job} key={job._id} />
              }
              )}
          </ul>
        </div> */}
      </div>
    );
  }
}

export default Jobs;
