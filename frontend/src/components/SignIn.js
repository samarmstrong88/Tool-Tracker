import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestSignIn } from '../actions/actionCreators';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
  state = { email: '', password: '' };

  handleSubmit = e => {
    console.log(e.target.email.value, e.target.password.value);
    this.props.requestSignIn(e.target.email.value, e.target.password.value);
    this.props.history.push('/jobs');
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return this.props.userData.loggedIn ? (
      <Redirect to="/jobs" />
    ) : (
      <div>
        <h3>Sign In</h3>
        <form
          method="post"
          onSubmit={async e => {
            e.preventDefault();
            this.handleSubmit(e);
          }}
        >
          <label htmlFor="email">
            Email
            <input type="text" id="email" name="email" />
          </label>

          <label htmlFor="password">
            Password
            <input type="password" id="password" name="password" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    requestSignIn: (email, password) =>
      dispatch(requestSignIn(email, password)),
  };
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
