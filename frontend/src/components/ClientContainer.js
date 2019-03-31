import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import { requestClient } from '../actions/actionCreators';

import Client from './Client';

const mapStateToProps = ({ client }) => ({
  client,
});

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(requestClientError, dispatch);
// }

function mapDispatchToProps(dispatch) {
  return {
    requestClient: id => dispatch(requestClient(id)),
  };
}

const ClientContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Client);

export default ClientContainer;
