import React, { Component } from 'react';
import styles from './styles/SearchBar.scss';
import SearchResultsDropdown from './SearchResultsDropdown';

class SearchBar extends Component {
  state = {
    searchString: '',
  };

  handleInput = e => {
    const { value } = e.target;
    this.setState({ searchString: value });
  };

  render() {
    const { searchString } = this.state;
    return (
      <div className={styles.wrapper}>
        <input
          type="text"
          className={styles.search_area}
          value={searchString}
          onChange={this.handleInput}
        />
        {searchString.length > 0 && (
          <SearchResultsDropdown {...this.props} searchString={searchString} />
        )}
      </div>
    );
  }
}

export default SearchBar;
