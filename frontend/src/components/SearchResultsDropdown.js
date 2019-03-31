import React from 'react';
import styles from './styles/SearchResultsDropdown.scss';
import SearchResultJob from './SearchResultJob';
import SearchResultClient from './SearchResultClient';
import { Link } from 'react-router-dom';

const renderJob = (job, i, resetField) => (
  <li key={`SearchResult${i}`} className={styles.job}>
    <Link to={`/jobs/${job.job_no}`} onClick={resetField}>
      <h3>Job: {job.job_no}</h3>
      <p>{job.client ? job.client.name : ''}</p>
      <p>
        {job.brand} <p />
        {job.model}
      </p>
    </Link>
  </li>
);

const renderClient = (client, i, resetField) => (
  <li key={`SearchResult${i}`} className={styles.client}>
    <div>Client:</div>
    <Link to={`/clients/${client._id}`} onClick={resetField}>
      {client.name}
    </Link>
  </li>
);

const SearchResultsDropdown = ({ jobs, clients, searchResults, resetField }) =>
  searchResults.length > 0 && (
    <ul className={styles.dropdown}>
      {searchResults.map((result, i) =>
        //conditional render job or client
        result.job_no
          ? renderJob(result, i, resetField)
          : renderClient(result, i, resetField)
      )}
    </ul>
  );

export default SearchResultsDropdown;
