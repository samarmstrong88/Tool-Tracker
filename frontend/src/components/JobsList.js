import React, { Component } from 'react';
import queryString from 'query-string';
import styles from './styles/Jobs.scss';

import JobCard from './JobCard';
import Pagination from './Pagination';

class JobsList extends Component {
  state = { page: 1 };

  componentDidMount() {
    const page = queryString.parse(this.props.location.search).page;
    if (page) this.setState({ page });
  }

  changePage = (pageDirection, numberOfPages = 1) => {
    let page;
    switch (pageDirection) {
      case 'first':
        page = 1;
        break;
      case 'prev':
        page = parseInt(this.state.page) - 1;
        break;
      case 'next':
        page = parseInt(this.state.page) + 1;
        break;
      case 'last':
        page = numberOfPages;
        break;
      default:
        break;
    }

    const query1 = queryString.stringify({ page });
    this.setState({ page });
    this.props.history.push({
      pathname: '/jobs',
      search: queryString.stringify({ page }),
    });
  };

  handlePush = () => {
    this.props.history.push('/clients');
  };

  render() {
    //data
    const jobs = this.props.jobs.all;
    const cat_filter = this.props.jobFilters.cat_filter;
    const status_filter = this.props.jobFilters.status_filter;
    //page display data/numbers
    const numberOfPages = Math.ceil(jobs.length / 10);
    const displayNumber = 10;
    const firstIndex = (this.state.page - 1) * displayNumber;

    const filtered_jobs = jobs
      // filter by category
      .filter(
        job => cat_filter === 'all' || cat_filter === job.category.toLowerCase()
      )
      // filter by status - if no status then display all
      .filter(
        job =>
          status_filter.length === 0 || status_filter.indexOf(job.status) > -1
      )
      // return items based on which page in pagination the page is on
      .slice(firstIndex, firstIndex + displayNumber);

    return (
      // render the filtered list of jobs
      <div className={styles.list}>
        <Pagination
          page={this.state.page}
          changePage={this.changePage}
          numberOfPages={numberOfPages}
        />
        {filtered_jobs.map(job => (
          <JobCard job={job} key={job.job_no} />
        ))}
        <Pagination
          page={this.state.page}
          changePage={this.changePage}
          numberOfPages={numberOfPages}
        />
      </div>
    );
  }
}

export default JobsList;
