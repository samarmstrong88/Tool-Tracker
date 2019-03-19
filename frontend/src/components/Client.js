import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Client.scss' 

class Client extends Component {

  componentDidMount() {
    this.props.requestClient(this.props.match.params.clientId)
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.clientId !== prevProps.match.params.clientId) {
      console.log('didupdate')
      this.props.requestClient(this.props.match.params.clientId)
    }
  }


  // const clientId = props.match.params.clientId;
  render() {
    const { client: {client}} = this.props;
  return (
    <>
    <div className = {styles.Client}>
    <h3>Client</h3>

    </div>
    <div className = {styles.Client}>
      <h3>{client.name}</h3>
      <h2>Jobs</h2>
      {client.jobs && client.jobs.map( (job) => (
        <p>{job.job_no}</p>
      ))}
    </div>
    </>
  )};


};

export default Client;

//push client to redux state
//use redux state to populate data
