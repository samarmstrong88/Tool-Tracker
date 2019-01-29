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
  };

  handleSubmit = async () => {
    const post_url = '/api/jobs/add';
    const post_config = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        job_no: this.state.job_no,
        client: this.state.client,
        brand: this.state.brand,
        model: this.state.model,
        start_date: this.state.start_date,
        status: this.state.status,
        category: this.state.category,
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
              placeholder="1234"
              id="job_no"
              name="job_no"
              required
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="client">
            Client
            <input //
              type="text"
              id="client"
              name="client"
              required
              value={this.state.client}
              onChange={this.handleChange}
            />
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
