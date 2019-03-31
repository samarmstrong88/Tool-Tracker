import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Client.scss';

class Client extends Component {
  componentDidMount() {
    this.props.requestClient(this.props.match.params.clientId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.clientId !== prevProps.match.params.clientId) {
      console.log('didupdate');
      this.props.requestClient(this.props.match.params.clientId);
    }
  }

  // const clientId = props.match.params.clientId;
  render() {
    const { client } = this.props;
    return (
      <>
        <div className={styles.Client}>
          <h2>Client: {client.name}</h2>
        </div>
        <div className={styles.Client}>
          <h3>Jobs</h3>
          {client.jobs && client.jobs.map(job => <p>{job.job_no}</p>)}
        </div>
      </>
    );
  }
}

export default Client;

//push client to redux state
//use redux state to populate data
