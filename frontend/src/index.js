import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import store from './store';
import JobsContainer from './components/JobsContainer';
import JobContainer from './components/JobContainer';
import Header from './components/Header';
import CreateJob from './components/CreateJob';
import CreateClient from './components/CreateClient';
import Inner from './components/Inner';
import styles from './components/styles/root.scss';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className={styles.wrapper}>
          <Header />
          <Router>
            <Inner>
              <React.Fragment>
                <Route path="/" exact component={JobsContainer} />
                <Route path="/createjob/" component={CreateJob} />
                <Route path="/createclient/" component={CreateClient} />
                <Route path="/jobs/:job_no" component={JobContainer} />
              </React.Fragment>
            </Inner>
          </Router>
        </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
