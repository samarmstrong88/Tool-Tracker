import React, { Component } from 'react';

import Job from './Job';

class JobContainer extends Component {
  state = {
    job: {},
  };

  componentDidMount() {
    this.fetchData = async () => {
      const job_no = this.props.match.params.job_no;
      const job_raw = await fetch(`/api/job/${job_no}`);
      const job = await job_raw.json();
      this.setState({ job });
    };

    this.fetchData();
  }

  render() {
    // return <div>{this.state.job.job_no}</div>;
    return <Job job={this.state.job} />;
  }
}

export default JobContainer;
