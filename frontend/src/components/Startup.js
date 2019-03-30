// Wrapper component to make async calls at app mount time
// calls requestJobs and requestClients to get list of jobsand clients for search and fast loading
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

class Startup extends Component {
  componentDidMount() {
    this.props.requestJobs();
    this.props.requestClients();
    this.props.checkLogin();
  }

  render() {
    return this.props.children;
  }
}

const mapStateToProps = ({ jobFilters, testFilter, jobs, clients }) => ({
  jobFilters,
  testFilter,
  jobs,
  clients,
});

// Pull the necessary dispatch from connect and pass it as props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Startup);
