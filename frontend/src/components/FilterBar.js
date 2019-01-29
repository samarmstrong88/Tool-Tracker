import React, { Component } from 'react';
import styles from './styles/FilterBar.scss';

class FilterBar extends React.Component {
  render() {
    return (
      <div className={styles.FilterBar}>
        <form className={styles.selector}>
          <legend>Category</legend>
          <label htmlFor="all">
            <input
              type="radio"
              name="category"
              value="all"
              checked={this.props.jobFilters.cat_filter === 'all'}
              onChange={this.props.handleCategoryChange.bind(null, 'all')}
            />
            All
          </label>

          <label htmlFor="warranty">
            <input
              type="radio"
              name="category"
              value="Warranty"
              checked={this.props.jobFilters.cat_filter === 'warranty'}
              onChange={this.props.handleCategoryChange.bind(null, 'warranty')}
            />
            Warranty
          </label>

          <label htmlFor="standard">
            <input
              type="radio"
              name="category"
              value="Standard"
              checked={this.props.jobFilters.cat_filter === 'standard'}
              onChange={this.props.handleCategoryChange.bind(null, 'standard')}
            />
            Standard
          </label>
        </form>

        <form className={styles.selector}>
          <legend>Status</legend>

          <label htmlFor="completed">
            <input
              type="checkbox"
              name="status"
              value="completed"
              checked={this.props.jobFilters.status_filter.includes(
                'completed'
              )}
              onChange={this.props.handleStatusChange.bind(null, 'completed')}
            />
            Completed
          </label>

          <label htmlFor="to-be-started">
            <input
              type="checkbox"
              name="status"
              value="to-be-started"
              checked={this.props.jobFilters.status_filter.includes(
                'to-be-started'
              )}
              onChange={this.props.handleStatusChange.bind(
                null,
                'to-be-started'
              )}
            />
            To Be Started
          </label>

          <label htmlFor="parts-arrived">
            <input
              type="checkbox"
              name="status"
              value="parts-arrived"
              checked={this.props.jobFilters.status_filter.includes(
                'parts-arrived'
              )}
              onChange={this.props.handleStatusChange.bind(
                null,
                'parts-arrived'
              )}
            />
            Parts Arrived
          </label>

          <label htmlFor="parts-on-order">
            <input
              type="checkbox"
              name="status"
              value="parts-on-order"
              checked={this.props.jobFilters.status_filter.includes(
                'parts-on-order'
              )}
              onChange={this.props.handleStatusChange.bind(
                null,
                'parts-on-order'
              )}
            />
            Parts on Order
          </label>
        </form>
      </div>
    );
  }
}

export default FilterBar;
