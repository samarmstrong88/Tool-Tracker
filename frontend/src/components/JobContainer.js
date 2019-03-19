import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';


import Job from './Job';

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


export default JobContainer;
