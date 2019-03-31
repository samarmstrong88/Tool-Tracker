import '@babel/polyfill'; // Required for jest to be able to parse ES6+ code
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store';

import JobsContainer from './components/JobsContainer';
import JobContainer from './components/JobContainer';
import Header from './components/Header';
import CreateJob from './components/CreateJob';
import CreateClient from './components/CreateClient';
import Inner from './components/Inner';
import './components/styles/root.scss';
import Startup from './components/Startup';
import ClientContainer from './components/ClientContainer.js';
import SignIn from './components/SignIn';
import PrivateRoute from './components/PrivateRoute';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Startup>
          <div>
            <Router>
              <>
                <Header />
                <Inner>
                  <Switch>
                    <PrivateRoute
                      path="/(|jobs)"
                      exact
                      component={JobsContainer}
                    />
                    <PrivateRoute path="/createjob/" component={CreateJob} />
                    <PrivateRoute
                      path="/createclient/"
                      component={CreateClient}
                    />
                    <PrivateRoute
                      path="/jobs/:job_no"
                      component={JobContainer}
                    />
                    <PrivateRoute
                      path="/clients/:clientId"
                      component={ClientContainer}
                    />
                    <Route path="/signin/" component={SignIn} />
                  </Switch>
                </Inner>
              </>
            </Router>
          </div>
        </Startup>
      </Provider>
    );
  }
}

render(
  <App />,
  // Render to <root> if it's available, or create a <div> if it isnt.
  // <root> will be available if built/devserver and <div> will be created to test w/ jest
  document.getElementById('root') || document.createElement('div')
);
