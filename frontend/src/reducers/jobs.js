const initalRequestJobsState = {
  jobsRequestLoading: false,
  jobsRequestError: {},
  jobs: [],
};

const jobs = (state = initalRequestJobsState, action) => {
  switch (action.type) {
    case 'JOBS_REQUEST_IN_PROGRESS':
      return { ...state, jobsRequestLoading: true };
    case 'JOBS_REQUEST_ERROR':
      return {
        ...state,
        jobsRequestLoading: false,
        jobsRequestError: action.error,
      };
    case 'JOBS_REQUEST_SUCCESS':
      return {
        ...state,
        jobsRequestLoading: false,
        jobs: action.jobs,
      };
    default:
      return state;
  }
};

export default jobs;
