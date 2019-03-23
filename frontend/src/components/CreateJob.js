import React, { Component } from 'react';
import styles from './styles/Form.scss';

class CreateJob extends Component {
  state = {
    job_no: '',
    client: '',
    brand: '',
    model: '',
    start_date: '',
    status: '',
    category: '',
    clients: [],
    last_job: {},
  };

  componentDidMount() {
    this.getClients();
    this.getJobsData();
  }

  handleSubmit = async () => {
    const {
      job_no,
      client,
      brand,
      model,
      start_date,
      status,
      category,
    } = this.state;
    const post_url = `${API_URL}/jobs/add`;
    const post_config = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        job_no,
        client,
        brand,
        model,
        start_date,
        status,
        category,
      }),
    };
    const res = await fetch(post_url, post_config);
    if (res.ok) {
      // return json
      return res;
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  getClients = async () => {
    const clients_raw = await fetch(`${API_URL}/clients?filter=name`);
    const clients = await clients_raw.json();
    this.setState({ clients });
  };

  getJobsData = async () => {
    const last_job_raw = await fetch(`${API_URL}/jobs/last`);
    const last_job = await last_job_raw.json();
    this.setState({ last_job, job_no: last_job.job_no + 1 });
  };

  render() {
    return (
      <form
        method="post"
        onSubmit={async e => {
          e.preventDefault();
          this.handleSubmit(e);
        }}
      >
        <fieldset className={styles.fieldset}>
          <label htmlFor="job_no">
            Job number
            <input
              type="number"
              id="job_no"
              name="job_no"
              placeholder={this.state.last_job.job_no || 0 + 1}
              required
              value={this.state.job_no}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="client">
            Client
            <select
              id="client"
              name="client"
              value={this.state.client}
              onChange={this.handleChange}
            >
              {this.state.clients.map(client => (
                <option value={client._id} key={client._id}>
                  {client.name}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="brand">
            Brand
            <input
              type="text"
              placeholder="i.e Hitachi"
              id="brand"
              name="brand"
              required
              value={this.state.brand}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="model">
            Model
            <input
              type="text"
              placeholder="i.e. DV18DSL"
              id="model"
              name="model"
              required
              value={this.state.model}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="start_date">
            Start Date
            <input
              type="date"
              id="start_date"
              name="start_date"
              required
              value={this.state.start_date}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="category">
            Job category
            <input //
              type="text"
              value="Standard"
              id="category"
              name="category"
              required
              value={this.state.category}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="status">
            Job Status
            <input
              type="text"
              value="to-be-started"
              id="status"
              name="status"
              required
              value={this.state.status}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    );
  }
}

export default CreateJob;
