// JobsContainer has to get state and dispatch, and send them on to the Main component via cloneChildren

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Jobs from './Jobs';
import styles from './styles/Jobs.scss';

// pull the necessary state from connect and pass it as props
const mapStateToProps = ({ jobFilters, testFilter, jobs }) => ({
  jobFilters,
  testFilter,
  jobs,
});

// Pull the necessary dispatch from connect and pass it as props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const JobsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Jobs);

export default JobsContainer;
