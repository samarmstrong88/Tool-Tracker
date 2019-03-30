// creator to toggle a job filter on and off
// const API_URL = _API_URL;
import store from '../store';

const jobsFetchUrl = `${API_URL}/jobs`;

console.log('running');

export function updateJobStatusFilters(statusFilter) {
  return {
    type: 'UPDATE_JOB_STATUS_FILTER',
    statusFilter,
  };
}

export function updateJobCatFilters(catFilter) {
  return {
    type: 'UPDATE_JOB_CAT_FILTER',
    catFilter,
  };
}

export function requestJobs() {
  return async dispatch => {
    dispatch(requestJobsInProgress());
    try {
      const jobsResponse = await fetch(jobsFetchUrl, {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const jobs = await jobsResponse.json();
      dispatch(requestJobsSuccess(jobs));
    } catch (err) {
      dispatch(requestJobsError(err));
    }
  };
}

function requestJobsInProgress() {
  return {
    type: 'JOBS_REQUEST_IN_PROGRESS',
  };
}

function requestJobsError(error) {
  return {
    type: 'JOBS_REQUEST_ERROR',
    error,
  };
}

function requestJobsSuccess(jobs) {
  return {
    type: 'JOBS_REQUEST_SUCCESS',
    jobs,
  };
}

//  To fetch a single job for job view
//  order of operation:
//    call requestjob(), this then awaits the API
//    state is set to in progress via IN_PROGRESS action
//    when promise returns or rejects, the state is set to
//    success, with data or job load error
export function requestJob(jobNo) {
  const jobFetchUrl = `${API_URL}/job/${jobNo}`;
  return async dispatch => {
    dispatch(requestJobInProgress());
    try {
      const jobResponse = await fetch(jobFetchUrl, {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const jobRequestData = await jobResponse.json();
      dispatch(requestJobSuccess(jobRequestData));
    } catch (e) {
      dispatch(requestJobError(e));
    }
  };
}
function requestJobInProgress() {
  return {
    type: 'JOB_REQUEST_IN_PROGRESS',
  };
}

function requestJobError(error) {
  return {
    type: 'JOB_REQUEST_ERROR',
    error,
  };
}

function requestJobSuccess(jobRequestData) {
  return {
    type: 'JOB_REQUEST_SUCCESS',
    jobRequestData,
  };
}

// To fetch the list of clients and add it to the store
export function requestClients() {
  const clientFetchUrl = `${API_URL}/clients/`;
  return async dispatch => {
    dispatch(requestClientsInProgress());
    try {
      const clientResponse = await fetch(clientFetchUrl, {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const clients = await clientResponse.json();
      dispatch(requestClientsSuccess(clients));
    } catch (e) {
      dispatch(requestClientsError(e));
    }
  };
}
function requestClientsInProgress() {
  return {
    type: 'CLIENTS_REQUEST_IN_PROGRESS',
  };
}

function requestClientsError(error) {
  return {
    type: 'CLIENTS_REQUEST_ERROR',
    error,
  };
}

function requestClientsSuccess(clients) {
  return {
    type: 'CLIENTS_REQUEST_SUCCESS',
    clients,
  };
}

export function requestClient(clientId) {
  const clientFetchUrl = `${API_URL}/clients/${clientId}`;
  return async dispatch => {
    dispatch(requestClientInProgress());
    try {
      const clientResponse = await fetch(clientFetchUrl, {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const client = await clientResponse.json();
      dispatch(requestClientSuccess(client));
    } catch (e) {
      dispatch(requestClientError(e));
    }
  };
}
function requestClientInProgress() {
  return {
    type: 'CLIENT_REQUEST_IN_PROGRESS',
  };
}

function requestClientError(error) {
  return {
    type: 'CLIENT_REQUEST_ERROR',
    error,
  };
}

function requestClientSuccess(client) {
  return {
    type: 'CLIENT_REQUEST_SUCCESS',
    client,
  };
}

export function requestSignIn(email, password) {
  const signInUrl = `${API_URL}/users/signin`;
  return async dispatch => {
    dispatch(requestSignInInProgress());
    try {
      const signInResponse = await fetch(signInUrl, {
        method: 'POST',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const { userId, username, status } = await signInResponse.json();
      if (signInResponse.status === 200) {
        dispatch(requestSignInSuccess(userId, username));
      } else {
        dispatch(requestSignInError('err'));
      }
    } catch (err) {
      console.log(err.message);
      dispatch(requestSignInError('Error ' + err.message));
    }
  };
}
function requestSignInInProgress() {
  return {
    type: 'SIGNIN_REQUEST_IN_PROGRESS',
  };
}

function requestSignInError(error) {
  return {
    type: 'SIGNIN_REQUEST_ERROR',
    error,
  };
}

export function requestSignInSuccess(userId, username) {
  return {
    type: 'SIGNIN_REQUEST_SUCCESS',
    userId,
    username,
  };
}

export function checkLogin() {
  const loginUrl = `${API_URL}/users/me`;
  return async dispatch => {
    dispatch(requestSignInInProgress());
    try {
      const response = await fetch(loginUrl, {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        const { userId, username } = await response.json();
        dispatch(requestSignInSuccess(userId, username));
      } else {
        dispatch(requestSignInError(response.status));
      }
    } catch (err) {
      console.log(err.message);
      dispatch(requestSignInError('Error ' + err.message));
    }
  };
}
