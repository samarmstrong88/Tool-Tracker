const initalRequestJobsState = {
  jobRequestLoading: false,
  jobRequestError: {},
  jobRequestData: [],
};

const jobs = (state = initalRequestJobsState, action) => {
  switch (action.type) {
    case 'JOBS_REQUEST_IN_PROGRESS':
      return { ...state, jobRequestLoading: true };
    case 'JOBS_REQUEST_ERROR':
      return {
        ...state,
        jobRequestLoading: false,
        jobRequestError: action.error,
      };
    case 'JOBS_REQUEST_SUCCESS':
      return {
        ...state,
        jobRequestLoading: false,
        jobRequestData: action.jobRequestData,
      };
    default:
      return state;
  }
};

export default jobs;
