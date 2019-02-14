import React from 'react';

const Client = props => {
  const clientId = props.match.params.clientId;
  return (
    <div>
      <p>I'm client #{clientId}</p>
    </div>
  );
};

export default Client;
