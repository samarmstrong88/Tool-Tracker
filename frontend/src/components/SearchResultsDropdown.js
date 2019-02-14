import React from 'react';
import styles from './styles/SearchResultsDropdown.scss';
import SearchResultJob from './SearchResultJob';
import SearchResultClient from './SearchResultClient';

const SearchResultsDropdown = ({ jobs, clients, searchString }) => {
  const clientsFiltered = clients.clients.filter(client =>
    client.name.toLowerCase().includes(searchString.toLowerCase())
  );
  const jobsFiltered = jobs.jobs // jobs is the object in store, and array of jobs is nested inside it
    .filter(
      // filter the array of jobs and return matches to job_no, model or brand
      job =>
        job.job_no == searchString ||
        job.brand.toLowerCase().includes(searchString.toLowerCase()) ||
        (job.model &&
          job.model.toLowerCase().includes(searchString.toLowerCase()))
    );

  return (
    <ul className={styles.dropdown}>
      {clientsFiltered.length > 0 ? 
        clientsFiltered
            .slice(0, 5)
            .map(client => (
              <SearchResultClient
                client={client}
                key={`searchResult.${client._id}`}
              />
            )) :
        jobsFiltered
            .slice(0, 5)
            .map(job => (
              <SearchResultJob job={job} key={`searchResult.${job.job_no}`} />
            ))}
    </ul>
  );
};

export default SearchResultsDropdown;
