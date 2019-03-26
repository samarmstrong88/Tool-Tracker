import React, { Component } from 'react';
import styles from './styles/SearchBar.scss';
import SearchResultsDropdown from './SearchResultsDropdown';
import { requestClientsError } from '../actions/actionCreators';
import { withRouter } from 'react-router-dom';
// import { debounce } from 'throttle-debounce';

class SearchBar extends Component {
  state = {
    searchString: '',
    show: true,
  };

  handleInput = e => {
    this.setState({ searchString: e.target.value });
    this.handleFocus();
  };
  handleBlur = e => {
    if (!e.currentTarget || !e.currentTarget.contains(e.relatedTarget)) {
      this.setState({ show: false });
    }
  };
  handleFocus = () => {
    this.setState({ show: true });
  };

  resetField = e => {
    this.setState({ searchString: '' });
  };

  returnFirstSearchResult = e => {
    e.preventDefault();
    const result = this.getSearchResults()[0];
    if (result.job_no) {
      this.props.history.push(`/jobs/${result.job_no}`);
      this.setState({ searchString: '' });
    } else {
      this.props.history.push(`/clients/${result._id}`);
      this.setState({ searchString: '' });
    }
  };

  getSearchResults = () => {
    const { jobs, clients } = this.props;
    const { searchString } = this.state;

    const clientsFiltered = clients.all.filter(client =>
      //filter the clients array if search term matches a client name
      client.name.toLowerCase().includes(searchString.toLowerCase())
    );

    const jobsFiltered = jobs.all // jobs is the object in store, and array of jobs is nested inside it
      .filter(
        // filter the array of jobs and return matches to job_no, model or brand
        job =>
          job.job_no == searchString ||
          job.brand.toLowerCase().includes(searchString.toLowerCase()) ||
          (job.model &&
            job.model.toLowerCase().includes(searchString.toLowerCase()))
      );

    return clientsFiltered
      .slice(0, 5)
      .concat(jobsFiltered.slice(0, 5))
      .slice(0, 5);
  };

  render() {
    const { searchString, show } = this.state;
    const searchResults = this.getSearchResults();
    return (
      <form
        className={styles.wrapper}
        onSubmit={this.returnFirstSearchResult}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
      >
        <input
          type="text"
          className={styles.search_area}
          placeholder="&#x1F50D; Search"
          value={searchString}
          onChange={this.handleInput}
        />
        {searchString.length > 0 && show && (
          <SearchResultsDropdown
            {...this.props}
            searchResults={searchResults}
            resetField={this.resetField}
          />
        )}
      </form>
    );
  }
}

export default withRouter(SearchBar);
