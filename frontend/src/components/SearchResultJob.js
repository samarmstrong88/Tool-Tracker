import React from 'react';
import { Link } from 'react-router-dom';

const SearchResultJob = ({ job: {
 job_no, client, brand, model 
} }) => (
  <div>
    <Link to={`/jobs/${job_no}`}>{job_no}</Link>
    <p>{client && client.name}</p>
    <p>{brand}</p>
    <p>{model}</p>
  </div>
);

export default SearchResultJob;
