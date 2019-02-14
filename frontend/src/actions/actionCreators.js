// creator to toggle a job filter on and off
const jobsFetchUrl = '/api/jobs';

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
      const jobsResponse = await fetch(jobsFetchUrl);
      const jobs = await jobsResponse.json();
      dispatch(requestJobsSuccess(jobs));
    } catch (err) {
      dispatch(requestJobsError(err));
    }
  };
}

export function requestJobsInProgress() {
  return {
    type: 'JOBS_REQUEST_IN_PROGRESS',
  };
}

export function requestJobsError(error) {
  return {
    type: 'JOBS_REQUEST_ERROR',
    error,
  };
}

export function requestJobsSuccess(jobs) {
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
  const jobFetchUrl = `/api/job/${jobNo}`;
  return async dispatch => {
    dispatch(requestJobInProgress());
    try {
      const jobResponse = await fetch(jobFetchUrl);
      const jobRequestData = await jobResponse.json();
      dispatch(requestJobSuccess(jobRequestData));
    } catch (e) {
      dispatch(requestJobError(e));
    }
  };
}
export function requestJobInProgress() {
  return {
    type: 'JOB_REQUEST_IN_PROGRESS',
  };
}

export function requestJobError(error) {
  return {
    type: 'JOB_REQUEST_ERROR',
    error,
  };
}

export function requestJobSuccess(jobRequestData) {
  return {
    type: 'JOB_REQUEST_SUCCESS',
    jobRequestData,
  };
}

// To fetch the list of clients and add it to the store
export function requestClients() {
  const clientFetchUrl = '/api/clients/';
  return async dispatch => {
    dispatch(requestClientsInProgress());
    try {
      const clientResponse = await fetch(clientFetchUrl);
      const clients = await clientResponse.json();
      dispatch(requestClientsSuccess(clients));
    } catch (e) {
      dispatch(requestClientsError(e));
    }
  };
}
export function requestClientsInProgress() {
  return {
    type: 'CLIENT_REQUEST_IN_PROGRESS',
  };
}

export function requestClientsError(error) {
  return {
    type: 'CLIENT_REQUEST_ERROR',
    error,
  };
}

export function requestClientsSuccess(clients) {
  return {
    type: 'CLIENT_REQUEST_SUCCESS',
    clients,
  };
}
