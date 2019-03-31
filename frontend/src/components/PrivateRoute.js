import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({
  component: Component,
  userData,
  loadingStates,
  ...rest
}) =>
  loadingStates.signinRequestLoading === false && (
    <Route
      {...rest}
      render={props =>
        userData.loggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
PrivateRoute.propTypes = {
  userData: PropTypes.object.isRequired,
};

const mapStateToProps = ({ userData, loadingStates }) => ({
  userData,
  loadingStates,
});

export default connect(mapStateToProps)(PrivateRoute);
