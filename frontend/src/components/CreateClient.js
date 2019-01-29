import React, { Component } from 'react';
import styles from './styles/Form.scss';

class CreateClient extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
  };

  handleSubmit = async () => {
    const post_url = '/api/clients/add';
    const post_config = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
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
        <h2>Create a new client</h2>
        <fieldset className={styles.fieldset}>
          <label htmlFor="name">
            Client Name
            <input //
              type="text"
              placeholder=""
              id="name"
              name="name"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="phone">
            Phone
            <input //
              type="tel"
              placeholder=""
              id="phone"
              name="phone"
              required
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="email">
            Email
            <input //
              type="email"
              placeholder=""
              id="email"
              name="email"
              required
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Sumbit</button>
        </fieldset>
      </form>
    );
  }
}

export default CreateClient;
