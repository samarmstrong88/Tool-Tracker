// SearchContainer has to get state and dispatch, and send them on to the Searc bar component via cloneChildren

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import SearchBar from './SearchBar';

// pull the necessary state from connect and pass it as props
const mapStateToProps = ({ jobs, clients }) => ({
  jobs,
  clients,
});

// Pull the necessary dispatch from connect and pass it as props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const SearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);

export default SearchBarContainer;
