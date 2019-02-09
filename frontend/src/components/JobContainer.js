import React, { Component } from 'react';

import Job from './Job';

class JobContainer extends Component {
  state = {
    job: {},
  };

  componentDidMount() {
    // fetch job data
    this.fetchData = async () => {
      const job_no = this.props.match.params.job_no;
      const job_raw = await fetch(`/api/job/${job_no}`);
      const job = await job_raw.json();
      this.setState({ job });
    };
    // fetch labour type enum to fll out select element in timesheets
    (async () => {
      const labour_types_raw = await fetch('/api/jobs/labour_types');
      const labour_types = await labour_types_raw.json();
      this.setState({ labour_types });
    })();
    this.fetchData();
  }

  render() {
    // return <div>{this.state.job.job_no}</div>;
    return <Job job={this.state.job} labour_types= {this.state.labour_types} />;
  }
}

export default JobContainer;
