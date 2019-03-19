import React, { Component } from 'react';

import styles from './styles/Jobs.scss';
import JobCard from './JobCard';
import FilterBar from './FilterBar';
import JobsList from './JobsList';

class Jobs extends Component {

  componentDidMount() {
    this.state = {
      jobData: [],
      selectedCategory: 'Warranty',
      statusList: ['to-be-started'],
    };
  }

  handleStatusChange = (e) => {
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

  handleCategoryChange = (e) =>{
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
      
      </div>
    );
  }
}

export default Jobs;
