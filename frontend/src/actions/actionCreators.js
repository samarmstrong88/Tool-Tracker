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
      const jobRequestData = await jobsResponse.json();
      dispatch(requestJobsSuccess(jobRequestData));
    } catch (e) {
      dispatch(requestJobsError(e));
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

export function requestJobsSuccess(jobRequestData) {
  return {
    type: 'JOBS_REQUEST_SUCCESS',
    jobRequestData,
  };
}
