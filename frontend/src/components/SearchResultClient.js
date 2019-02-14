import React from 'react';
import { Link } from 'react-router-dom';

const SearchResultClient = ({ client: { name, _id } }) => (
  <div>
    <Link to={`/clients/${_id}`}>{name}</Link>

    <p>{name}</p>
  </div>
);

export default SearchResultClient;
