import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import Job from './Job';

// TODO connect this component to redux store

const mapStateToProps = ({ job }) => ({
  job,
});;

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const JobContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Job);

// class JobContainer extends Component {
//   state = {
//     job: {},
//   };

//   componentDidMount() {
//     // fetch job data
//     this.fetchData = async () => {
//       const job_no = this.props.match.params.job_no;
//       const job_raw = await fetch(`/api/job/${job_no}`);
//       const job = await job_raw.json();
//       this.setState({ job });
//     };

//     this.fetchData();
//   }

//   render() {
//     // return <div>{this.state.job.job_no}</div>;
//     return <Job job={this.state.job} labour_types={this.state.labour_types} />;
//   }
// }

export default JobContainer;
